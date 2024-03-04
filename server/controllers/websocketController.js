const socketIO = require("socket.io");

let io;

exports.initWebSocket = (server) => {
  io = require("socket.io")(server);

  io.on("connection", (socket) => {
    console.log("Client connected");

    socket.on("disconnect", () => {
      console.log("Client disconnected");
    });
  });
};
