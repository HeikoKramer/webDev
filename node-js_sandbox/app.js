'use strict';

const http = require('http');

const express = require('express');

const app = express();

app.get('/blog/:year/:month/:day?', (req, res) => {
  res.send({
    year: req.params.year,
    month: req.params.month,
    day: req.params.day || '01'
  });
});

const server = http.createServer(app);

server.listen(3000, () => {
  console.log('Server is listening on port 3000')
});