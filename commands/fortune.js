const fortunes = require("../assets/fortunes.json");

exports.run = async (client, message) => {
    return await message
        .reply(
            `your fortune says... '${
                fortunes[Math.floor(Math.random() * fortunes.length)]
            }' 🥠`
        )
        .catch(console.error);
};

exports.help = {
    name: "fortune",
    category: "Fun",
    description: "Replies to the user with a fortune.",
    usage: "fortune",
};
