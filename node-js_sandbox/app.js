'use strict';

// integrated modules
const http = require('http'),
      path = require('path');

// modules installed from npm 
const express    = require('express'),
      bodyParser = require('body-parser'),
      session    = require('express-session');

const app = express();

app.use(bodyParser.json());

app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 14 * 60 * 60 * 1000 }
}));

app.use('/', express.static(path.join(__dirname, 'client')));

app.get('/hello', (req,res) => {
    req.session.user = 'jane.doe';
    console.log(req.session.user);
  });

app.get('/articles', (req, res) => {
  res.send([
    { id: 1, title: 'foo' }
  ]);
});


app.post('/users', (req, res) => {
  res.send(`Hello ${req.body.user.firstName}`);
  console.log(`user received: ${req.body.user.firstName} ${req.body.user.lastName}`);
});

const server = http.createServer(app);

server.listen(3000, () => {
  console.log('Server listening on port 3000.');
});