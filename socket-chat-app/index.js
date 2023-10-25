const express = require('express');
const app = express();
const http = require('http');
const { Server } = require("socket.io");
const { addAbortSignal } = require('stream');

const server = http.createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

const banWords=['fuck','shit','bitch']

            function containsProfanity(message) {
                return message.replace(new RegExp(banWords.join ('|'), 'gi'), '****');
            }




io.on('connection', (socket) => {
    io.emit('connection', 'a user connected');
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    socket.on('chat message', (msg) => {
        let filteredMessage = containsProfanity(msg);
        io.emit('chat message', filteredMessage);
        console.log('message:' +filteredMessage);

     socket.on('typing', () => {
     socket.broadcast.emit('typing'); 
    });

    socket.on('stop typing', () => {
    socket.broadcast.emit('stop typing');
    });

        
    })
});



server.listen(3000, () => {
  console.log('listening on localhost:3000');
});
