const Discord = require('discord.js');
const spanishmeme = require('spanish.memes')

module.exports = {
  name: "memes", 
  desc: "Sirve para generar memes randoms.",
  aliases: ["meme", "momo", "momazo"], 

  run: async (client, message, args, prefix) => {

    const meme = spanishmeme.Meme()

  const embedmeme = new Discord.MessageEmbed()
  .setTitle("**Meme!**")
  .setImage(spanishmeme.Meme())
  .setColor("RANDOM")
  .setTimestamp()
  message.channel.send({embeds: [embedmeme]})

 }

} 