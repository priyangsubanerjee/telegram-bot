const chat = require("node-telegram-bot-api");
const express = require("express");
const app = express();
const port = 3000 || process.env.PORT;
const token = "6005874620:AAE2ilM3xpnglJg70OmhG6JFsB9yvxx214Y";
const bot = new chat(token, { polling: true });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "Received your message");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
