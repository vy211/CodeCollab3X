// src/services/socket.js
import { io } from "socket.io-client";

const socket = io("http://localhost:3000"); // or your backend socket URL

export default socket;
