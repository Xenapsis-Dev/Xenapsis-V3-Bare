const http = require("node:http");
const { createBareServer } = require("@tomphttp/bare-server-node");
const fs = require("fs");
const path = require("path");
const url = require('url');
const express = require('express');
const app = express();

app.use(express.static('public'));

// Create an HTTP server
const httpServer = http.createServer();
const bareServer = createBareServer("/bare/");

httpServer.on("request", (req, res) => {
  if (bareServer.shouldRoute(req)) {
    bareServer.routeRequest(req, res);
  } else {
    app(req, res);
  }});

  httpServer.on("upgrade", (req, socket, head) => {
  if (bareServer.shouldRoute(req)) {
    bareServer.routeUpgrade(req, socket, head);
  } else {
    socket.end();
  }
})

httpServer.on("listening", () => {
  console.log("HTTP server listening");
  console.log("View your server at localhost:2100")
});

httpServer.listen({
  port: 2100,
});