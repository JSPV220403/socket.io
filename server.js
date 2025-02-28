const { Server } = require('socket.io');
const io = new Server(3000);

console.log('Server running on port 3000...');

io.on('connection', (socket) => {
    console.log(`User connected: ${socket.id}`);
    socket.on('message', (msg) => {
        console.log(`Message from ${socket.id}: ${msg}`);
        io.emit('message', msg); 
    });

    socket.on('disconnect', () => {
        console.log(`User disconnected: ${socket.id}`);
    });
});
