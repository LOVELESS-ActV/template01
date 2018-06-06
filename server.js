var express = require('express'),
    server = express();
var path = require('path');
var port = 8080;

server.use('/app', express.static(__dirname + '/app'));
server.use('/i18n', express.static(__dirname + '/i18n'));
server.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/index.html'));
});
server.set('json spaces', 4);
server.listen(port, function (e) {
  console.log('WebServer started. Go to http://localhost:'+port+'/');
}).on('error', function (e) {
  if (e.code == 'EADDRINUSE') {
    console.log("Port "+port+" already in use...");
    setTimeout(function () {
      process.exit();
    }, 1000);
  }
});
