const express = require("express");
const { Server } = require("socket.io");
require('dotenv').config()
const app = express();
const http = require("http");
const { hostname } = require("os");
const server = http.createServer(app);
const PORT = process.env.PORT;
const io = new Server(server)
app.use(express.static('public'))
const ip = process.env.IPV4_ADDR;

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
