const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = "$"
client.on('message', message => {

  if (message.content.startsWith( prefix + "rep")) {
 if (message.author.id !== "373804180734738434") return;
  if (!message.channel.guild) return;
  let args = message.content.split(" ").slice(1).join(' ');
  client.channels.get("497684753433231360").send(
      "\n" + "#rep <@!" + args + ">")
  }
  });
client.login(process.env.BOT_TOKEN); 