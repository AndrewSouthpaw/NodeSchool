var app = require('express')()
  , http = require('http')
  , server = http.createServer(app)
  , io = require('socket.io').listen(server);


app.get('/', function(req, res) {
	console.log('hello there');
	
});

// not io.sockets.on
io.on('connection', function(client) {
	console.log('Client connected.');
	client.emit('messages', {hello: 'world'});
})

app.listen(8080);