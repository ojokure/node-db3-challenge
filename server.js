const express = require("express");

const SchemeRouter = require("./schemes/scheme-router.js");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
    res.send(" <h1>YO !!</>");
  });
  
server.use("/api/schemes", SchemeRouter);



module.exports = server;
