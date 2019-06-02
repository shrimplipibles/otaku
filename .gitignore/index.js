const Discord = require('discord.js');

const client = new Discord.Client();
var prefix = "*";

client.login("NTg0Njg3MDc4MjQ0MzUyMDA3.XPOi4Q.mJBkv9drU4lLimCvXUVTrbG3y9M");
client.on("ready", function () { 
    console.log("Je suis prêt !"); 
    client.user.setGame("regarder des anime");
});



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})
client.on('message', msg => {
  if (msg.content === 'Otaku') {
    msg.reply('Oui c est moi')
  }
})
