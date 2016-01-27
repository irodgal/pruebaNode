var http = require('http');
var server = http.createServer();

function control(petic, resp) { 
	console.log('peticion pillada!');
	resp.writeHead(200, {'content-type': 'text/plain'});
	resp.write('Hola, Mundo!');
	resp.end();
}

server.on('request', control);
server.listen(8080);