const Eris = require("eris");
const keep_alive = require('./keep_alive.js')

// Replace TOKEN with your bot account's token
const bot = new Eris(process.env.token1);
const bot = new Eris(process.env.token2);
const bot = new Eris(process.env.token3);
const bot = new Eris(process.env.token4);
const bot = new Eris(process.env.token5);

bot.on("error", (err) => {
  console.error(err); // or your preferred logger
});

bot.connect(); // Get the bot to connect to Discord
