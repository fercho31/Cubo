const setupSchema = require(`${process.cwd()}/modelos/setups.js`)
const sugSchema = require(`${process.cwd()}/modelos/valoración.js`)
const Discord = require('discord.js')
module.exports = client => {
    client.on("messageCreate", async message => {
        try {
            if (!message.guild || !message.channel || message.author.bot) return;
            let data = await setupSchema.findOne({ guildID: message.guild.id });
            if (!data || !data.valoraciones || !message.guild.channels.cache.get(data.valoraciones) || message.channel.id !== data.valoraciones) return;
            try {
                message.delete();
                let msg = await message.channel.send({
                    embeds: [new Discord.MessageEmbed()
                        .setAuthor({ name: "Valoración de " + message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
                        .setDescription(`>>> ${message.content}`)
                        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
                        .setColor(client.color)
                        .setFooter({ text: "¿Quieres dar una valoración? Solo escríbela aquí.", iconURL: "https://images.emojiterra.com/google/android-10/512px/1f64c.png" })
                    ],
                });
                let data_msg = new sugSchema({
                    messageID: msg.id,
                    autor: message.author.id
                });
                data_msg.save();
            } catch (e) { console.log(e) }
        } catch (e) { console.log(e) }
    })
}