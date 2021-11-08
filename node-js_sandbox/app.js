'use strict';

// integrated modules
const http = require('http'),
      path = require('path');

// modules installed from npm 
const express    = require('express'),
      bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, 'client')));

app.get('/articles', (req, res) => {
  res.send([
    { id: 1, title: 'foo' }
  ]);
});

app.post('/users', (req, res) => {
  res.send(`Hello ${req.body.user}`);
  console.log(`user received: ${req.body.user} `);
});

const server = http.createServer(app);

server.listen(3000, () => {
  console.log('Server listening on port 3000.');
});