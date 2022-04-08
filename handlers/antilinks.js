const setupSchema = require(`${process.cwd()}/modelos/setups.js`);
module.exports = client => {
    client.on("messageCreate", async message => {
        try {

        
        if(!message.guild || !message.channel) return;
        let setups_data = await setupSchema.findOne({guildID: message.guild.id});
        if(!setups_data.antilinks) return;
        if(message.content.startsWith("https://") || message.content.startsWith("http://")) {
            message.delete();
            message.member.timeout(30 * 1000, "Ha enviado links").catch(() => {
                message.channel.send("No he podido mutear al usuario!")
            })
            message.channel.send("No puedes enviar links").then(msg => {
                setTimeout(() => {
                    msg.delete();
                }, 3_000);
            })

        }
    } catch(e){console.log(e)}
    })
}