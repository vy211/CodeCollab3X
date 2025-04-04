import kafka from "kafka-node";
import { TOPICS } from "../topics.js";

const client = new kafka.KafkaClient({ kafkaHost: "localhost:9092" });
const consumer = new kafka.Consumer(client, [{ topic: TOPICS.CODE_CHANGES }]);

consumer.on("message", (message) => {
  console.log("Received Code Change:", JSON.parse(message.value));
});
