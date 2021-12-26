const { CHAT_ID } = require("../../config");

module.exports = async (bot, userId) => {
    try {
        let isMember = await bot.getChatMember(CHAT_ID, userId);
        if(isMember.status !== "left") {
            return true;
        } else {
            await bot.sendMessage(userId, `Bot'dan foydalanish uchun @AlisherITblog kanaliga obuna bo'ling va tekshirish tugmasini bosing.`, {
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: "✅Tekshirish",
                                callback_data: "check_is_member"
                            }
                        ]
                    ]
                }
            })
            return false;
        }
    } catch (err) {
        console.log(err.message);
    }
}