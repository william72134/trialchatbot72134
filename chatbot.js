function chatBotResponse(message) {
    // Simple response logic for the chatbot
    if (message.toLowerCase().includes('hello')) {
        return 'Hello! How can I assist you today?';
    } else if (message.toLowerCase().includes('bye')) {
        return 'Goodbye! Have a great day!';
    } else {
        return 'I am a simple bot. Try saying "hello" or "bye".';
    }
}

module.exports = { chatBotResponse };
