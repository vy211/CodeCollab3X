const express = require("express");
const { getUsers } = require("../controllers/userController");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware.js");

router.get("/", protect, getUsers);

module.exports = router;
