const ecoSchema = require(`${process.cwd()}/modelos/economia.js`);
module.exports = {
    name: "bet",
    aliases: ["apostar"],
    desc: "Sirve para apostar una cantidad de dinero",
    run: async (client, message, args, prefix) => {
        //leemos la economia el usuario
        let data = await ecoSchema.findOne({ userID: message.author.id });
        let cantidad = args[0];
        //comprobaciones previas
        if (["todo", "all-in", "all"].includes(args[0])) {
            cantidad = data.dinero
        } else {
            if (isNaN(cantidad) || cantidad <= 0 || cantidad % 1 != 0) return message.reply("❌ **No has especificado una cantidad válida para apostar!**");
            if (cantidad > data.dinero) return message.reply("❌ **No tienes tanto dinero para apostar!**");
        }
        let posibildades = ["ganar", "perder"];
        let resultado = posibildades[Math.floor(Math.random() * posibildades.length)];
        if (resultado === "ganar") {
            await ecoSchema.findOneAndUpdate({ userID: message.author.id }, {
                $inc: {
                    dinero: cantidad
                }
            })
            return message.reply(`**Has ganado \`${cantidad} monedas\`**`)
        } else {
            await ecoSchema.findOneAndUpdate({ userID: message.author.id }, {
                $inc: {
                    dinero: -cantidad
                }
            })
            return message.reply(`**Has perdido \`${cantidad} monedas\`**`)
        }
    }
}