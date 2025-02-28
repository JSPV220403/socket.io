const { io } = require('socket.io-client');
const readline = require('readline');

const socket = io('http://localhost:3000');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

socket.on('connect', () => {
    console.log('Connected to server. Type a message:');
    
    rl.on('line', (message) => {
        socket.emit('message', message);
    });
});

socket.on('message', (msg) => {
    console.log(`New message: ${msg}`);
});

socket.on('disconnect', () => {
    console.log('Disconnected from server.');
    rl.close();
});
