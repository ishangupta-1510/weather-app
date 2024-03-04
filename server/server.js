const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const cors = require("cors");
const apiRoutes = require("./routes/apiRoutes");
const websocketController = require("./controllers/websocketController");
const errorHandler = require("./middleware/errorHandler");

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
const test = "Hello, World!";

app.use("/api", apiRoutes);

app.get("/", (req, res) => {
  res.send(test);
});

// Handle WebSocket connections
websocketController.initWebSocket(server);

app.use(errorHandler);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
