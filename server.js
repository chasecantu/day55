var express = require('express');
var app = express();
var http = require('http').Server(app);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
app.use(express.static('dist'));


app.use('/dist', express.static('dist'));
var port = 1541;
http.listen(port, function(){
  console.log('listening on *:',port);
});