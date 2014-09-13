var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
	console.log('a user connected');
	socket.on('join', function (userName) {
		socket.nickname = userName;
		socket.broadcast.emit('userConnect', userName);	
	});
	socket.on('disconnect', function () {
		console.log('user disconnected');
		socket.broadcast.emit('userDisconnect', socket.nickname);
	});
	socket.on('messageFromClient', function (msg) {
		socket.broadcast.emit('messageFromServer', 
		{
			userName: socket.nickname,
			msg: msg
		});
	});
});


http.listen(8080, function () {
	console.log('listening on *:8080');
});