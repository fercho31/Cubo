const schema = require(`${process.cwd()}/modelos/servidor.js`)
module.exports = {
    name: "prefix",
    aliases: ["prefijo", "cambiarprefijo", "cambiarprefix", "setprefix", "set-prefix"],
    desc: "Sirve para cambiar el prefijo en el servidor.",
    permisos: "ADMINISTRATOR",
    run: async (client, message, args, prefix) => {
        if(!args[0]) return message.reply(`:x: **Tienes que especificar un nuevo prefijo para el Bot.**`)
        await schema.findOneAndUpdate({guildID: message.guild.id}, {
            prefijo: args[0]
        })
        return message.reply(`:white_check_mark: Cambiado el Prefijo de \`${prefix}\` a \`${args[0]}\``)
    }
}
