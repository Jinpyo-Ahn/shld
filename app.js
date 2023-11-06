// json server 커스터마이징
import express from "express";
import { join } from "path";

import jsonServer from "json-server";
import * as mqttService from "./mqtt-service.js";

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use("/", express.static(join(process.cwd(),
"public")));

server.use(router);
server.use(middlewares);

const DEVELOPER = "";
const PORT = 13000;

server.listen(PORT, () => {
    mqttService.run();
    console.log(`${DEVELOPER}'s server is running port ${PORT}`);
})
