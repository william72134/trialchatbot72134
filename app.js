const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const { chatBotResponse } = require('./chatbot');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('userMessage', (message) => {
        const response = chatBotResponse(message);
        socket.emit('botMessage', response);
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
