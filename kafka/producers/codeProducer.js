import kafka from "kafka-node";
import { TOPICS } from "../topics.js";

const client = new kafka.KafkaClient({ kafkaHost: "localhost:9092" });
const producer = new kafka.Producer(client);

export const sendCodeChange = (data) => {
  producer.send(
    [{ topic: TOPICS.CODE_CHANGES, messages: JSON.stringify(data) }],
    (err, data) => {
      if (err) console.error(err);
      else console.log("Sent:", data);
    }
  );
};
