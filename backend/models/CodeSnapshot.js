const mongoose = require("mongoose");

const codeSnapshotSchema = new mongoose.Schema(
  {
    roomId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CodeRoom",
      required: true,
    },
    code: { type: String, required: true },
    savedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const CodeSnapshot = mongoose.model("CodeSnapshot", codeSnapshotSchema);

module.exports = CodeSnapshot;
