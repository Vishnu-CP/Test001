require('./utils/env-loader.js');

// const API_KEY   = process.env.OPENROUTER_API_KEY;
// const API_URL   = 'https://openrouter.ai/api/v1/chat/completions';
// const API_MODEL = 'google/gemma-4-31b-it';

// const API_KEY   = process.env.OPENAI_API_KEY;
// const API_URL   = 'https://api.openai.com/v1/chat/completions';
// const API_MODEL = 'gpt-4o-mini';

const API_KEY   = process.env.GROQ_API_KEY;
const API_URL   = 'https://api.groq.com/openai/v1/chat/completions';
const API_MODEL = 'llama-3.1-8b-instant';

// Print only first and last 4 chars for security
console.log(`Using API_KEY: ${API_KEY ? API_KEY.slice(0, 4) + '...' + API_KEY.slice(-4) : 'Not Set'}`);
if (!API_KEY) {
  console.error('Please set your API_KEY environment variable.');
  process.exit(1);
}

const messages = [];

async function callApi(usrMessage) {

  // messages[0] = usrMessage;
  messages.push(usrMessage);

  const headers= {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      };

  const payload = {
    model: API_MODEL,
    messages : messages
  };

  try {
    console.log(`\n🤖 Asking AI (model: ${API_MODEL})... ${usrMessage.content}`);

    const response = await fetch(API_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify(payload)
    });

    // https://contabo.com/blog/http-response-codes-server-statuses/
    if (response.status === 429) {
      throw new Error('HTTP 429: Rate limit hit OR Insufficient Quota. 💸');
    }

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();
    console.log('\n💬 Response:');
    console.log(data.choices[0].message);

  } catch (error) {
    console.error('\n🚨 Error calling AI:', error.message);
  }
}

// Execute the function
async function main() {
  await callApi({ role: 'user', content: 'Explain JavaScript fetch in one short sentence.' });
  await callApi({ role: 'user', content: 'My name is Neo?' });
  await callApi({ role: 'user', content: 'What is my name?' });
}

main();
