const { timeStamp } = require('console');
const Discord = require('discord.js');
const { Snake } = require('weky')

module.exports = {
    name: "snake",
    desc: "Comando para jugar la viborita de nokia.",
    alias: ["viborita"],

    run: async (client, message, args, prefix) => {

  await Snake({
      message: message,
      embed: {
          title: '🐍 Snake!',
          description: '> **🏆 {{score}} Puntos!**',
          color: 'BLUE',
          footer: `${message.author.tag}`,
          timeStamp: false
      },
      emojis: {
          empty: '⬛',
          snakeBody: '🟩',
          food: '🍎',
          up: '⬆',
          right: '⬅',
          down: '⬇',
          left: '➡'
      },
      othersMessage: `Solo <@{{author}}> puede usar los botones!`,
      buttonText: 'Salir!'
  });
    
  }
    
}