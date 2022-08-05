const Discord = require("discord.js");
require("dotenv").config();

const generateImage = require("./generateImage")

const client = new Discord.Client({ 
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS",
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

const welcomeChannelId = "968315519163858974"


client.on("guildMemberAdd", async (member) => {
    const img = await generateImage(member)
    member.guild.channels.cache.get(welcomeChannelId).send({
        content: ` **Welcome <@${member.id}> to W:RP!** You're one paw away from starting your new journey! Please react to the message in <#968320499585261599> to see the rest of the server and follow the guide in <#1003220784124264528> to begin your adventure!`,
        files: [img]
    })

})


client.login(process.env.token);
