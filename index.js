const Discord = require("discord.js");
require("dotenv").config();

const token  = "MTAwMzUzNTcyNjY0Nzk3NjAzNg.GQuIRh.l_lRg8pQ5S2TrUbJTxLEGi8puk7iKfg55KiH6w"


const client = new Discord.Client({ 
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Ready! ${client.user.tag} is online!`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("```Hello World!```")
    }
})

client.login(process.env.token);
