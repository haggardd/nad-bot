exports.run = async (client, message, args) => {
    if (args.length <= 1) {
        return await message
            .reply("you need to give me one or more options to choose from! 👨‍⚖️")
            .catch(console.error);
    } else {
        return await message
            .reply(
                `in my opinion... '${
                    args[Math.floor(Math.random() * args.length)]
                }' is the best option. 👨‍⚖️`
            )
            .catch(console.error);
    }
};

exports.help = {
    name: "choose",
    category: "Misc",
    description: "Makes a choice from the given options.",
    usage: "choose [choice1/choice2/choice3/...]",
};

// TODO: allow this to take multi-word options (you could seperate options with a specific character)
