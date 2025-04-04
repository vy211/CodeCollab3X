const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { Server } = require("socket.io");
const http = require("http");
const connectDB = require("./config/db.js");
const authRoutes = require("./routes/authRoutes.js");
// const User = require("./models/User.js");

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

// const seedTestUser = async () => {
//   const exists = await User.findOne({ email: "test@example.com" });
//   if (!exists) {
//     await User.create({
//       username: "testuser",
//       email: "test@example.com",
//       password: "password123",
//     });
//     console.log("✅ Test user created");
//   } else {
//     console.log("ℹ️ Test user already exists");
//   }
// };

// seedTestUser();

app.use(cors());
app.use(express.json());
app.use("/api/user", authRoutes);

server.listen(5001, () => {
  console.log("Server running on port 5001");
});
