// server.js

const express = require('express');
const jsonServer = require('json-server');

const server = express();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);



server.listen(8000, () => {
  console.log(`Server is running on port 8000`);
});
