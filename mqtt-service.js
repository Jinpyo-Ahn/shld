import mqtt from "mqtt";
import * as iaqService from "./iaq-service.js";

const uri = "wss://broker.emqx.io:8084/mqtt";
const options = {
  clean: true,
  connectTimeout: 4000,
  clientId: "hbnu_smart_human_life_Jinpyo",
};

function run() {
  const client = mqtt.connect(uri, options);

  client.on("connect", () => {
    client.subscribe("hbnu/smart_human_life_Jinpyo", (err) => {
      err
        ? console.log("MQTT Subscribe failed:", err)
        : console.log("MQTT Subscribe successfully!");
    });
  });

  client.on("reconnect", (error) => {
    console.log("reconnecting:", error);
  });

  client.on("error", (error) => {
    console.log("Connection failed:", error);
  });
 
  // 메시지 처리 로직
  client.on("message", (topic, message) => {
    const result = iaqService.post(message);
    result
      ? console.log("IAQ data saved successfully!")
      : console.log("IAQ data saved failed!");
  });
}

export { run };
