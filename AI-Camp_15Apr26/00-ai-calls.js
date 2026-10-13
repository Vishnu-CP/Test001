require('./utils/env-loader.js');
const API_KEY = process.env.OPENROUTER_API_KEY;
const url = "https://openrouter.ai/api/v1/chat/completions";
const model = "google/gemma-4-31b-it";
const headers = {
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
};
const payload = {
  model,
  messages: [
    {
      role: "user",
      content:
        "If you built the world's tallest skyscraper, what would you name it?",
    },
  ],
};

async function main(){
    const response = await fetch(url, {
  method: "POST",
  headers,
  body: JSON.stringify(payload),
});

const data = await response.json();
console.log(data);
    
}main();

