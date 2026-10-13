// script.js
document.addEventListener("DOMContentLoaded", function () {
  const chatbotContainer = document.getElementById("chatbot-container");
  const closeBtn = document.getElementById("close-btn");
  const sendBtn = document.getElementById("send-btn");
  const chatbotInput = document.getElementById("chatbot-input");
  const chatbotMessages = document.getElementById("chatbot-messages");

  const chatbotIcon = document.getElementById("chatbot-icon");
  const closeButton = document.getElementById("close-btn");

  // Toggle chatbot visibility when clicking the icon
  // Show chatbot when clicking the icon
  chatbotIcon.addEventListener("click", function () {
    chatbotContainer.classList.remove("hidden");
    chatbotIcon.style.display = "none"; // Hide chat icon
  });

  // Also toggle when clicking the close button
  closeButton.addEventListener("click", function () {
    chatbotContainer.classList.add("hidden");
    chatbotIcon.style.display = "flex"; // Show chat icon again
  });

  sendBtn.addEventListener("click", sendMessage);
  chatbotInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      sendMessage();
    }
  });

  function sendMessage() {
    const userMessage = chatbotInput.value.trim();
    if (userMessage) {
      appendMessage("user", userMessage);
      chatbotInput.value = "";
      getBotResponse(userMessage);
    }
  }

  function appendMessage(sender, message) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", sender);
    messageElement.textContent = message;
    chatbotMessages.appendChild(messageElement);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }

  async function getBotResponse(userMessage) {
    const apiKey = "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"; // Replace with your OpenAI API key
    const apiUrl = "https://api.openai.com/v1/chat/completions";


    try {
    //   const response = await fetch(apiUrl, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${apiKey}`,
    //     },
    //     body: JSON.stringify({
    //       model: "gpt-3.5-turbo",
    //       messages: [{ role: "user", content: userMessage }],
    //       max_tokens: 150,
    //     }),
    //   });

    //http://localhost:11434/

    const response = await fetch("http://localhost:11434/api/generate",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
       
        //llama3
        body:JSON.stringify({
            model:"llama3",
            prompt:userMessage,
            stream:false
        })
        });

      const data = await response.json();
      console.log(data);
      const botMessage = data.response;
      appendMessage("bot", botMessage);
    } catch (error) {
      console.error("Error fetching bot response:", error);
      appendMessage("bot", "Sorry, something went wrong. Please try again.");
    }
  }
});