Const Discord = require('discord.js')
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Ready..');
    });
console.login(process.env.BOT_TOKEN);
