const http = require('http');

const server = http.createServer((req, res) => {
  const { headers, url, method } = req;
  console.log(`\nHEADERS:\n`, headers);
  console.log(`\nURLS:\n`, url);
  console.log(`\nMETHOD:\n`, method);
  res.end();
});

const PORT = 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));