const { Client, Message, MessageEmbed } = require("discord.js");
const { format, createBar } = require("../../handlers/functions")

module.exports = {
    name: "nowplaying",
    aliases : ['np'],
    description : 'Mira la canción que se reproduce actualmente.',

    run: async (client, message, args, Discord) => {

        const queue = client.distube.getQueue(message)

        if(!message.member.voice.channel) return message.channel.send(':x: **Debes estar en un canal de voz**')
      
        if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(":x: **Debes estar en el mismo canal de voz que yo.**")

        if(!queue) return message.channel.send(':x: **No hay una canción en la playlist.**')

        let track = queue.songs[0];

        const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`<a:music:960705666354389104> | Reproduciendo:`)
        .setDescription(`[${track.name}](${track.url})\n\nDuración: \`${track.formattedDuration}\``.substr(0, 256))
        .addField("Vistas", `${track.views}`,true)
        .addField("Dislikes", `${track.dislikes}`,true)
        .addField("Likes", `${track.likes}`,true)
        .setThumbnail(track.thumbnail)
        message.channel.send({ embeds: [embed] })
    },
};