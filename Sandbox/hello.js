// var http = require('http');
// http.createServer(function(request, response) {
// 	response.writeHead(200);	// Status code in header
// 	response.write('Hello, this is dog.');	// reponse body
// 	response.end();	// Close connection
// }).listen(8080);	// Listen for connections on this port
// console.log('Listening to port 8080...');


var fs = require('fs');
var http = require('http');
http.createServer(function(request, response) {
	response.writeHead(200);
	fs.readFile('testfile.txt', function(err, contents) {
		response.write(contents);
		response.end();
	});
	
}).listen(8080);
