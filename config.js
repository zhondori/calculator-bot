require("dotenv").config();
const { env } = process;
module.exports = {
    TOKEN: env.TOKEN,
    CHAT_ID: env.CHAT_ID,
    APP_URL: env.APP_URL,
};