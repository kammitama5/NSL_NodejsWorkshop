//Uniform Reform Identifier ("URI") tells the server which page we are requesting

// Get/HTTPS/1.1 --> root directory of server

//Status code, data

//200 OK, 302 Found, 404 not Found, 500 Internal Server Error

// in terminal; do npm install express --> install for each project


//store module express in express var
var express = require('express');  

//instantiate express in a function in variable app
var app = express();

var fileSystem = require('fs');

//websocket
var webSocket = require('ws');
var webServer = webSocket.Server();

function handleGetRequest(request, response){
	function getFileContents(error, data){
		response.send(data);
	}
	//response.send('Hello world');
	fileSystem.readFile("file.txt", "utf8", getFileContents);
}

// if find request, do function
app.get('/', handleGetRequest);
app.listen(11100);

//Go to localhost or ssh IP:11100

//Client side --> modify look of page or communicate with server
//DOM (Document object model) --> browser sees webpage asin

//Websockets

var options = {
	//add one to port number
	port: 11101
}

var webSocketServer = webSocket.Server(options);

var clients = [];

function handleConnection (webSocketClient) {
	clients.push(webSocketClient);
	
	function handleMessage(msg) {
		for (var i = 0; i < clients.length; i++){
			var client = clients[i];
			client.send(msg);
		}
	}
	webSocketClient.on('message', handleMessage);
}
webSocketServer.on('connection', handleConnection);





