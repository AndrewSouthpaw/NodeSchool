var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var redisClient = require('redis').createClient();

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
	console.log('a user connected');
	socket.on('join', function (userName) {
		socket.nickname = userName;
		socket.broadcast.emit('userConnect', userName);	
		redisClient.lrange('messages', 0, -1, function(err, messages) {
			messages.forEach(function(msg) {
				socket.emit('messageFromServer', JSON.parse(msg));
			});
			
		});
	});
	socket.on('disconnect', function () {
		console.log('user disconnected');
		socket.broadcast.emit('userDisconnect', socket.nickname);
	});
	socket.on('messageFromClient', function (msg) {
		var dataObj = {userName: socket.nickname, msg: msg};
		socket.broadcast.emit('messageFromServer', dataObj);
		var JSONmsg = JSON.stringify(dataObj)
		redisClient.rpush('messages', JSONmsg);
	});
});


http.listen(8080, function () {
	console.log('listening on *:8080');
});