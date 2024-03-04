const socketIO = require("socket.io-client");

let socket;

exports.initWebSocket = (serverUrl) => {
  socket = socketIO(serverUrl);

  socket.on("connect", () => {
    console.log("Connected to WebSocket server");
  });

  socket.on("weatherUpdate", (weatherData) => {
    console.log("Received weather update:", weatherData);
    // Handle received weather data here
  });
};

exports.closeWebSocket = () => {
  if (socket) {
    socket.close();
    console.log("WebSocket connection closed");
  }
};
