const userSchema = require(`${process.cwd()}/modelos/user.js`)
const keySchema = require(`${process.cwd()}/modelos/clave.js`)
module.exports = {
    name: "claim",
    aliases: ["reclamar", "claim-key"], 
    desc: "Sirve para reclamar una Clave Premium",
    run: async (client, message, args, prefix) => {
        const clave = await keySchema.findOne({clave: args[0]});
        if(clave) {
            if(clave.activado) {
                return message.reply("❌ **La clave que has mencionado ya ha sido utilizada!**");
            } else {

                clave.activado = true;
                clave.save();

                await userSchema.findOneAndUpdate({guildID: message.guild.id}, {
                    premium: Math.round(Date.now() + Number(clave.duracion))
                });
                return message.reply(`✅ **Se han activado las funciones premium!**\nExpirará en <t:${Math.round((Date.now() + Number(clave.duracion)) / 1000)}:R>`)
            }
        } else {
            return message.reply("❌ **No se ha encontrado la clave que has especificado!**")
        }
    }
}

/*
╔═════════════════════════════════════════════════════╗
║    || - || Desarollado por dewstouh#1088 || - ||    ║
║    ----------| discord.gg/MBPsvcphGf |----------    ║
╚═════════════════════════════════════════════════════╝
*/
