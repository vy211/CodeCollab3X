const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  getProfile,
  refreshAccessToken,
} = require("../controllers/authController.js");
const { protect } = require("../middleware/authMiddleware.js");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/me", protect, getProfile);
router.post("/refresh-token", refreshAccessToken);

module.exports = router;
