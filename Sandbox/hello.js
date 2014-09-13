// var http = require('http');
// http.createServer(function(request, response) {
// 	response.writeHead(200);	// Status code in header
// 	response.write('Hello, this is dog.');	// reponse body
// 	response.end();	// Close connection
// }).listen(8080);	// Listen for connections on this port
// console.log('Listening to port 8080...');


// var fs = require('fs');
// var http = require('http');
// http.createServer(function(request, response) {
// 	response.writeHead(200);
// 	fs.readFile('testfile.txt', function(err, contents) {
// 		response.write(contents);
// 		response.end();
// 	});
//
// }).listen(8080);




// var fs = require('fs');
// var http = require('http');
// http.createServer(function(request, response) {
// 	response.writeHead(200);
// 	var file = fs.createReadStream('testfile.txt');
// 	var newFile = fs.createWriteStream('testfile_copy.txt');
// 	file.pipe(newFile);
// 	response.end();
// 	console.log('File successfully copied.')
//
// }).listen(8080);


/* Echo a string sent as data -d */

// var fs = require('fs');
// var http = require('http');
// http.createServer(function(request, response) {
// 	response.writeHead(200);
// 	request.pipe(response);
//
// }).listen(8080);


/* Upload a file */

// var fs = require('fs');
// var http = require('http');
// http.createServer(function(request, response) {
// 	response.writeHead(200);
// 	var newFile = fs.createWriteStream('output.txt');
// 	request.pipe(newFile);
// 	request.on('end', function() {
// 		response.end('uploaded!');
// 	})
//
// }).listen(8080);


/* Using a custom module */

// var hello = require('./custom_hello');
// hello();

/* Using a custom module for HTTP client */

// var makeRequest = require('./make_request');
// makeRequest('Hello world.');



/* Create simple Express server */
// var express = require('express');
// var app = express();
// app.get('/', function(request, response) {
// 	response.sendFile(__dirname + '/index.html');
// });
// app.listen(8080);









