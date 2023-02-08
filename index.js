const express = require("express");
const { Server } = require("socket.io");
const app = express();
const http = require("http");
const { hostname } = require("os");
const server = http.createServer(app);
const PORT = 3030;
const io = new Server(server)
app.use(express.static('public'))
const ip = `192.168.1.213`

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('user connected');
  socket.on('msg', (msg,username) => {
    io.emit('msg',msg,username)
  })
})

server.listen(PORT, ip, () => {
  console.log(`server listening on ${ip}:${PORT}`);
});
