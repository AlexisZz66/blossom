const Discord = require("discord.js")

const TOKEN = "OTQ3Mjc5MTk3MTM3Njg2NjE4.Yhq8gA.nUG8xUAXhECo4IPQ8JVuxdTgvcs"
const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log('Logged in as ${client.user.tag}')
})

client.on("messageCreate", (message) => {
if (message.content == "hola"){
    message.reply("hola puto")
}
})

client.login(TOKEN)