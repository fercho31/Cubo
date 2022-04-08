const Discord = require('discord.js')

module.exports = {
    name: "jumbo",
    aliases: ["jumbo-e"],
    desc: "Sirve para aumentar de tamaño el Emoji.",
    run: async (client, message, args, prefix) => {
        const embed = new Discord.MessageEmbed();
if(!args.join(' ')) {
  embed.setDescription("Menciona un Emoji.").setColor(0xff0000)
  message.reply({embeds: [embed]})
} else
if(!args.join(' ').match(/<a:.+?:\d+>|<:.+?:\d+>/g)) {
  embed.setDescription("You can't put emojis").setColor(0xff0000)
  message.reply({embeds: [embed]})
} else {
  for(var emj of args) {
    let ftcemoji = Discord.Util.parseEmoji(emj)
    if(ftcemoji.id) {
      let extension = ftcemoji.animated ? '.gif' : '.png', url = `https://cdn.discordapp.com/emojis/${ftcemoji.id+extension}`


      message.reply({  files: [new Discord.MessageAttachment(url)]
})
    }
  }
}

    }
}