var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-type': 'text/html; charset=utf-8'});
  res.write('<h1> Oia</h1>');
  res.end()
})

server.listen(3000)