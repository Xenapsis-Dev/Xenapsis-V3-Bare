import http from "node:http";
import { createBareServer } from "@tomphttp/bare-server-node";
import fs from "fs";
import path, { join } from "path";
import url from 'url';
import express from 'express';
import { fileURLToPath } from "url";

const app = express();

app.use(express.static('public'));

const publicPath = fileURLToPath(new URL("public", import.meta.url));

// Create an HTTP server
const httpServer = http.createServer();
const bareServer = createBareServer("/bare/");

app.use((req, res) => {
  res.status(404);
  res.sendFile(join(publicPath, "404.html"));
});

httpServer.on("request", (req, res) => {
  if (bareServer.shouldRoute(req)) {
    bareServer.routeRequest(req, res);
  } else {
    app(req, res);
  }
});

httpServer.on("upgrade", (req, socket, head) => {
  if (bareServer.shouldRoute(req)) {
    bareServer.routeUpgrade(req, socket, head);
  } else {
    socket.end();
  }
});

httpServer.on("listening", () => {
  console.log("HTTP server listening");
  console.log("View your server at http://localhost:2100");
});

httpServer.listen({
  port: 2100,
});
