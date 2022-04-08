const Discord = require("discord.js");
const { Client, Collection } = require("discord.js");

module.exports = {
  name: "avatar",
  aliases: ["av", "av-user"],
  description: "Show your avatar",
  run: async (client, message, args) => {
    let member = message.mentions.users.first();
    if (!member) {
      const embed = new Discord.MessageEmbed()
        .setImage(`${message.author.avatarURL()}`)
        .setColor(0x66b3ff)
        .setFooter(`Avatar from ${message.author.tag}`);
      message.channel.send({ embeds: [embed] })
    } else {
      const embed2 = new Discord.MessageEmbed()
        .setImage(`${member.avatarURL()}`)
        .setColor(0x66b3ff)
        .setFooter(`Avatar from ${member.tag}`);

        message.channel.send({ embeds: [embed2] })

    if (!message.guild.me.permissions.has("EMBED_LINKS"))
       return message.reply(
         "I don't have permissions for ember messages and insert links"
        );
      
    }
  }
};