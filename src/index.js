const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ],
});

client.login("MTExNDE5Mzg4OTk5MDAzMzQyOA.GAT3pN.koqW7zvDPaVOBiN5jeBAU07NDuPL95Bty47hqA");
