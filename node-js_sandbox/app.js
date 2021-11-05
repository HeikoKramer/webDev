'use strict';

const http = require('http');

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  const people = [
    {
      firstName: 'Jane',
      lastName: 'Doe'
    },
    {
      firstName: 'Jonnyodor',
      lastName: 'Doewstoevski'
    }
  ];

  res.send(people);
});

const server = http.createServer(app);

server.listen(3000, () => {
  console.log('Server is listening on port 3000')
});