const { DiscordTogether } = require('discord-together')

module.exports = {
    name: "discord-together",
    aliases: ["ytt", "dt"],
    desc: "Sirve para ver contenido de youtube con tus amigos.",
    run: async (client, message, args, prefix) => {
        if(message.member.voice.channel){
            const tumbalacasa = new DiscordTogether(client)

            const canal = message.member.voice.channel.id 

            tumbalacasa.createTogetherCode(canal, "youtube").then(invite => {
                message.reply(`Aqui tienes tu link para el canal <#${canal}>: ${invite.code}`)
            }).catch(e => {
                message.reply(`Ha ocurrido un error: ${e}`)
            })
        } else {
            message.reply('Debes estar en un canal de voz.')
        }
    }
}