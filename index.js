const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
  bot.user.setPresence({ game: { name: `prefix is $`, type: 0 }});
  bot.user.setStatus('idle')
});

const prefix = "$"

bot.on('message', msg => {
  if (msg.author.bot) return;
  let args = msg.content.split(" ").slice(1).join(" ")
  if (msg.guild.id !== "361722796201607168" && msg.content.startsWith(prefix + "ping" || "subscribe" || "unsubscribe") === true) {
    return msg.channel.send("Sorry, my commands are not available on this server!")
  } else if (msg.guild.id !== "361722796201607168" && msg.content.startsWith(prefix + `subscribe ${args}`)) {
    return msg.channel.send("You provided arguments but I'm not authorised to operate on this server.")
  } else if (msg.guild.id !== "361722796201607168" && msg.content.startsWith(prefix + `unsubscribe ${args}`)) {
    return msg.channel.send("You provided arguments but I'm not authorised to operate on this server.")
  }

  if (msg.content.startsWith(prefix + 'ping')) {
    msg.channel.send("Pinging...").then(sent => {
    sent.edit(`Pong! (${sent.createdTimestamp - msg.createdTimestamp}ms)`)
  })
}

  if (msg.content.startsWith(prefix + 'subscribe')) {
    let args = msg.content.split(" ").slice(1).join(" ")
    var announceRole = msg.guild.roles.find("name", "announcement alerts")
    if (!args) {
      msg.channel.send("Arguments required!")
    } else if (args === "announcements") {
      msg.channel.send("You've successfully subscribed to `announcements`!")
      msg.member.addRole(announceRole)
    }
  }

  if (msg.content.startsWith(prefix + 'unsubscribe')) {
    let args = msg.content.split(" ").slice(1).join(" ")
    var announceRole = msg.guild.roles.find("name", "announcement alerts")
    if (!args) {
      msg.channel.send("Arguments required!")
    } else if (args === "announcements") {
      msg.channel.send("You've successfully unsubscribed from `announcements`!")
      msg.member.removeRole(announceRole)
    }
  }
});

bot.login(process.env.BOT_TOKEN);
