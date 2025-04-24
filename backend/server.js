const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { Server } = require("socket.io");
const http = require("http");
const connectDB = require("./config/db.js");
const logger = require("./utils/logger.js");
const authRoutes = require("./routes/authRoutes.js");
const userRoutes = require("./routes/userRoutes.js");
const bodyParser = require("body-parser");
// const User = require("./models/User.js");
const redis = require("./redis/redisClient.js");

dotenv.config();
connectDB();

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("code-change", (data) => {
    socket.broadcast.emit("code-update", data);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});
//app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5001;
server.listen(PORT, () => {
  logger.info(`Server Connected to port ${PORT}`);
  logger.info(`Frontend should connect to http://localhost:3000`);
});
