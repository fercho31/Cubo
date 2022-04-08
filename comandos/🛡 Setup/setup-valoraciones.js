const Discord = require('discord.js');
const setupSchema = require(`${process.cwd()}/modelos/setups.js`);

module.exports = {
    name: "setup-valoraciones",
    desc: "Sirve para establecer el canal de valoraciones.",
    permisos: ["ADMINISTRATOR"],
    run: async (client, message, args, prefix) => {
        const channel = message.guild.channels.cache.get(args[0]) || message.mentions.channels.first();
        if(!channel) return message.reply(":x: |  **Tienes que especificar un canal válido del servidor!**");
        await setupSchema.findOneAndUpdate({guildID: message.guild.id,
            valoraciones: channel.id
        })
        return message.reply({embeds: [new Discord.MessageEmbed()
        .setTitle(`:white_check_mark: | Establecido el canal de valoraciones a \`${channel.name}\``)
        .setDescription(`*Cada vez que una persona envíe un mensaje en ${channel}, lo convertiré en una valoración!*`)
        .setColor(client.color)
        ]})
    }
}