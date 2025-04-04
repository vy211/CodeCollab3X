const mongoose = require("mongoose");

const cursorSchema = new mongoose.Schema(
  {
    roomId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CodeRoom",
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    position: {
      line: { type: Number, required: true },
      column: { type: Number, required: true },
    },
  },
  { timestamps: true }
);

const Cursor = mongoose.model("Cursor", cursorSchema);

module.exports = Cursor;
