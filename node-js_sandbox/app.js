'use strict';

const http = require('http');

const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

app.get('/blog/:year/:month/:day?', (req, res) => {
  if (req.query.format.data === 'html') {
    if (req.query.format.date === 'uk') {
      return res.send(`<h1 style="color:blue">${req.params.day || '01'}/${req.params.month}/${req.params.year}</h1>`);
    } else {
      return res.send(`<h1 style="color:red">${req.params.day || '01'}.${req.params.month}.${req.params.year}</h1>`);
    }
  }
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