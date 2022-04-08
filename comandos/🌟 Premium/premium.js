module.exports = {
    name: "premium",
    desc: "Sirve para comprobar si eres Premium",
    premium: true,
    run: async (client, message, args, prefix) => {
        message.reply(`<a:music:960705666354389104> Si ves este mensaje, significa que eres un usuario premium! 🌟`)
    }
}