'use strict';

const http = require('http');

const express = require('express');

const app = express();

const server = http.createServer(app);

server.listen(3000, () => {
  console.log('Server is listening on port 3000')
});