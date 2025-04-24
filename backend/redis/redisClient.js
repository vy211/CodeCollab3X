require("dotenv").config();
const redis = require("redis");
const logger = require("../utils/logger");

const redisClient = redis.createClient({
  url: process.env.REDIS_URL,
});

// Handle Redis errors
redisClient.on("error", (err) => {
  logger.error(` Redis Error: ${err.message}`);
});

// Connect to Redis on app startup
(async () => {
  try {
    await redisClient.connect();
    logger.info("✅ Connected to Redis");
  } catch (error) {
    logger.error(`❌ Redis Connection Failed: ${error.message}`);
  }
})();

module.exports = redisClient;
