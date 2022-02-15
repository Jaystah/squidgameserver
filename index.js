const {Server} = require('socket.io');
const PORT = process.env.PORT || 3333;

const io = new Server();


io.listen(PORT);
console.log('Listening on port', PORT);

io.on('connection', socket => {
  socket.emit('Faka');
});