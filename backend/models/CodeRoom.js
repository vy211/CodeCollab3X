const mongoose = require("mongoose");

const codeRoomSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // Connected users
    language: { type: String, required: true, default: "javascript" },
    code: { type: String, default: "" }, // Last saved code
  },
  { timestamps: true }
);

const CodeRoom = mongoose.model("CodeRoom", codeRoomSchema);

module.exports = CodeRoom;
