require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, '✅ Le bot fonctionne depuis un Web Service Render !');
});

// Faux serveur pour "ouvrir un port" sur Render
require('http').createServer(() => {}).listen(process.env.PORT || 3000);
