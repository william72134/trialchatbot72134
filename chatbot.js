const responses = {
    hello: "Hello! How can I assist you today?",
    bye: "Goodbye! Have a great day!",
    default: "I'm not sure how to respond to that. Try asking something else!"
};

function chatBotResponse(message) {
    const lowerCaseMessage = message.toLowerCase();
    if (lowerCaseMessage.includes('hello')) {
        return responses.hello;
    } else if (lowerCaseMessage.includes('bye')) {
        return responses.bye;
    } else {
        return responses.default;
    }
}

module.exports = { chatBotResponse };
