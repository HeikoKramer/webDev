'use strict';

const http    = require('http'),
      path    = require('path');

const express = require('express');

const app = express();

app.use('/', express.static(path.join(__dirname, 'client')));

app.get('/articles', (req, res) => {
  res.send([
    { id: 1, title: 'foo' }
  ]);
});

const server = http.createServer(app);

server.listen(3000, () => {
  console.log('Server listening on port 3000.');
});