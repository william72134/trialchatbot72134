const socket = io();

function sendMessage() {
    const input = document.getElementById('user-input');
    const message = input.value;
    if (message.trim() !== '') {
        appendMessage('User', message);
        socket.emit('userMessage', message);
        input.value = '';
    }
}

socket.on('botMessage', (message) => {
    appendMessage('Bot', message);
});

function appendMessage(sender, message) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.textContent = `${sender}: ${message}`;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}
