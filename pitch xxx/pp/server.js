const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

// Chat endpoint
app.post("/chat", (req, res) => {
  const userMessage = req.body.message;
  let botReply;

  // Simple bot logic
  if (userMessage.toLowerCase().includes("hello")) {
    botReply = "Hi there! How can I help you?";
  } else if (userMessage.toLowerCase().includes("bye")) {
    botReply = "Goodbye! Have a great day!";
  } else {
    botReply = "I'm sorry, I don't understand that.";
  }

  res.json({ reply: botReply });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
