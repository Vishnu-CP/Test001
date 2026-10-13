require('./utils/env-loader.js');

const readline = require('readline/promises');
let delay      = ms => new Promise(resolve => setTimeout(resolve, ms));

const API_KEY = process.env.GROQ_API_KEY;
const API_URL = 'https://api.groq.com/openai/v1/chat/completions';
const model   = 'llama-3.1-8b-instant';

// Print only first and last 4 chars for security
console.log(`Using API_KEY: ${API_KEY ? API_KEY.slice(0, 4) + '...' + API_KEY.slice(-4) : 'Not Set'}`);
if (!API_KEY) {
  console.error('Please set your API_KEY environment variable.');
  process.exit(1);
}

// 1. Global Memory Array - This is how the AI remembers!
const messages = [
  {
    role: 'system',
    content: 'You are a helpful assistant that explains programming concepts in simple terms.'
  }
];

// 2. The Tool Schema
let tools = [
  {
    type: 'function',
    function: {
      name: 'shutdownAgent',
      description: 'Closes the application. Call this when the user says goodbye, thanks, or indicates they are done.',
      parameters: { type: 'object', properties: {} }
    }
  }
];

async function callApi() {
  const payload = {
    model,
    messages,
    tools,
    tool_choice: 'auto'
  };

  try {
    await delay(500); // delay to reduce chance of hitting rate limits

    console.log(`\n🤖 Asking AI ... ${messages[messages.length - 1].content}`);

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (response.status === 429) {
      throw new Error('HTTP 429: Rate limit hit OR Insufficient Quota. 💸');
    }

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();

    // Return the full message object { role: 'assistant', content: '...' }
    return data.choices[0].message;
  } catch (error) {
    console.error('\n🚨 Error calling AI:', error.message);
    return null;
  }
}

// The Interactive Loop
async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  console.log('===================================================');
  console.log(`🚀 Interactive AI Loop Initialized on model: ${model}`);
  console.log('💡 When you want to end the session, just say it.');
  console.log('===================================================\n');

  while (true) {
    const userInput = await rl.question('🧑 You: ');

    // 1. Add user message to memory
    messages.push({ role: 'user', content: userInput });

    // 2. Call the AI with the updated memory
    const aiMessage = await callApi();

    if (aiMessage) {
      // 3. Add AI response to memory so it remembers for the next loop!
      messages.push(aiMessage);

      // Simple Tool Handling
      if (aiMessage.tool_calls && aiMessage.tool_calls.length > 0) {
        let toolCall = aiMessage.tool_calls[0];
        console.log('toolCall:', toolCall)

        let toolName = toolCall.function.name;

        if (toolName === 'shutdownAgent') {
          console.log('👋 Goodbye!');
          rl.close();
          break;
        }


      } else if (aiMessage.content) { // Print the response only if it has text
        console.log(`\n🤖 AI: ${aiMessage.content}\n`);
      }
    }
  }
}

main();