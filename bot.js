const auth = require("./auth.json");
const Discord = require("discord.js");

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('pootypie dreamily ❤️❤️❤️', {type: "WATCHING"}); 
});

client.on('message', (msg) => {
  if (msg.author.id === "348915387708080128") {
    if (msg.toString().toLowerCase().includes('master')){
      msg.channel.send("please notice me pooty");
    }
  }
});

client.login(auth.token);
