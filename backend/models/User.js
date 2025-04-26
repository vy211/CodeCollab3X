const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { ObjectId } = mongoose.Schema;

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avatar: { type: String, default: "" }, // URL of avatar image
    refreshToken: { type: String, default: null }, // Stores hashed or plain token
  },
  { timestamps: true }
);

// Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Compare password method
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Optionally: Set refresh token (could hash it if you want extra security)
userSchema.methods.setRefreshToken = async function (token) {
  this.refreshToken = token; // or hash the token using bcrypt
  await this.save();
};

// Optionally: Clear refresh token
userSchema.methods.clearRefreshToken = async function () {
  this.refreshToken = null;
  await this.save();
};

const User = mongoose.model("User", userSchema);

module.exports = User;
