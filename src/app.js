const TelegramBot = require("node-telegram-bot-api");
const { TOKEN, APP_URL } = require("../config");
const CallbackController = require("./controllers/CallbackController");
const MemberController = require("./controllers/MemberController");
const getKeyboard = require("./modules/getKeyboard");

const bot = new TelegramBot(TOKEN, {
    webHook: {
        port: process.env.PORT
    }
});

bot.setWebHook(`${APP_URL}/bot${TOKEN}`);

bot.on("message", async (msg) => {
    const userId = msg.from.id;
    let isMember = await MemberController(bot, userId);
    if (isMember) {
        if (msg.text == "/start") {
            let keyboard = await getKeyboard();
            await bot.sendMessage(userId, "<b>0</b>", {
                reply_markup: {
                    inline_keyboard: keyboard
                },
                parse_mode: "HTML"
            })
        }
    }
});

bot.on("callback_query", async (query) => {
    CallbackController(bot, query);
})