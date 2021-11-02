const handle = function (req, res) {
  res.writeHead(200, {
    'content-type': 'text/html'
  });
  res.write('Hallo HTTP!');
  console.log(req.method);
  console.log(req.url);
  res.end();
};

module.exports = handle;