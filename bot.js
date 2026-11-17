const { Telegraf } = require('telegraf');

// O'zingizning bot tokeningizni shu yerga yozasiz
const BOT_TOKEN = "9127873062:AAE0PqLW0ohl01cCmXQj_l4rJ2SsqEdn6mw";
const bot = new Telegraf(BOT_TOKEN);

// Render'dagi veb-saytingiz havolasini shu yerga yozasiz (oxirida / belgisi bo'lmasin)
const WEBSITE_URL = "https://muhammadjonn930-stack.github.io/certify.uz/"; 

bot.start((ctx) => {
    ctx.reply(
        "👋 Assalomu alaykum! CERTIFY.UZ Milliy Sertifikat simulyatoriga xush kelibsiz.\n\n" +
        "📌 Pastdagi tugmani bosing va bot ichining o'zida imtihon fanlarini tanlab, sinovdan o'ting:",
        {
            reply_markup: {
                inline_keyboard: [
                    [{ text: "🚀 PLATFORMANI OCHISH", web_app: { url: WEBSITE_URL } }]
                ]
            }
        }
    );
});

bot.launch();
console.log("Telegram bot muvaffaqiyatli ishga tushdi!");

// Render serveri uxlab qolmasligi uchun kichik HTTP server
const http = require('http');
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Bot is running!\n');
}).listen(process.env.PORT || 3000);
