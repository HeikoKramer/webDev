const http = require('http');

const todos = [
  { id: 1, text: 'ToDo One'},
  { id: 2, text: 'ToDo Two'},
  { id: 3, text: 'ToDo Three'}
];

const myResponse = JSON.stringify({
  success: true,
  data: todos
});

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('X-Powered-By', 'Node.js');
  res.end(myResponse);
});

const PORT = 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));