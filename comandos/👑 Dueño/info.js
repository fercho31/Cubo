const Discord = require("discord.js");
const { mem, cpu, os } = require('node-os-utils');
const { stripIndent } = require('common-tags');

module.exports = {
    name: "systeminfo",
    aliases: ["sys-info"],
    owner: true,
    desc: "Sirve para ver la latencia del Bot",
    run: async (client, message, args, prefix) => {
        const { totalMemMb, usedMemMb } = await mem.info();

        const systeminfo = stripIndent`
            CPU       : ${cpu.model()}
            Cores     : ${cpu.count()}
            CPU Usage : ${await cpu.usage()} %
            RAM       : ${totalMemMb} MB
            RAM Usage : ${usedMemMb} MB
            `;
    
    message.channel.send({ content: `\`\`\`\n${systeminfo}\`\`\`` })
    }
}