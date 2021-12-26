const { CHAT_ID } = require("../../config");
const getKeyboard = require("../modules/getKeyboard");
module.exports = async (bot, query) => {
    let data = query.data;
    let chatId = query.message.chat.id;
    let msgId = query.message.message_id;
    let inline_keyboard = await getKeyboard();
    let editOptions = {
        message_id: msgId,
        chat_id: chatId,
        reply_markup: {
            inline_keyboard
        }
    }
    let hints = ["+", "-", "/", "x"];
    try {
        let member = await bot.getChatMember(CHAT_ID, chatId);
        if (data == "check_is_member") {
            console.log(true);
            if (member.status !== "left") {
                await bot.sendMessage(chatId, "0", {
                    reply_markup: {
                        inline_keyboard
                    },
                })
            } else {
                await bot.answerCallbackQuery(query.id, {
                    text: "Kanalga obuna bo'lmagansiz",
                    show_alert: true,
                })
            }
        } else if (member.status !== "left") {
            let text = query.message.text;
            if (data == "clear") {
                await bot.editMessageText("0", editOptions);
            } else if (data == "1") {
                text += "1";
                await bot.editMessageText(text, editOptions);
            } else if (data == "2") {
                text += "2";
                await bot.editMessageText(text, editOptions);
            } else if (data == "3") {
                text += "3";
                await bot.editMessageText(text, editOptions);
            } else if (data == "4") {
                text += "4";
                await bot.editMessageText(text, editOptions);
            } else if (data == "5") {
                text += "5";
                await bot.editMessageText(text, editOptions);
            } else if (data == "6") {
                text += "6";
                await bot.editMessageText(text, editOptions);
            } else if (data == "7") {
                text += "7";
                await bot.editMessageText(text, editOptions);
            } else if (data == "8") {
                text += "8";
                await bot.editMessageText(text, editOptions);
            } else if (data == "9") {
                text += "9";
                await bot.editMessageText(text, editOptions);
            } else if (data == "plus") {
                if (!hints.includes(text[text.length - 1])) {
                    text += "+";
                    await bot.editMessageText(text, editOptions);
                }
            } else if (data == "minus") {
                if (!hints.includes(text[text.length - 1])) {
                    text += "-";
                    await bot.editMessageText(text, editOptions);
                }
            } else if (data == "multiple") {
                if (!hints.includes(text[text.length - 1])) {
                    text += "x";
                    await bot.editMessageText(text, editOptions);
                }
            } else if (data == "divide") {
                if (!hints.includes(text[text.length - 1])) {
                    text += "/";
                    await bot.editMessageText(text, editOptions);
                }
            } else if (data == "00") {
                text += "00";
                await bot.editMessageText(text, editOptions);
            } else if (data == "back") {
                if (text.length > 1) {
                    text = text.slice(0, -1);
                    await bot.editMessageText(text, editOptions);
                } else if(text.length === 1) {
                    text = "0";
                    await bot.editMessageText(text, editOptions);
                }
            } else if (data == "==") {
                let result = eval(text.replace(/[x]/g, "*").slice(1));
                text = result;
                await bot.editMessageText(text, editOptions);
            }
        }
    } catch (err) {
        console.log(err.message);
    }
}