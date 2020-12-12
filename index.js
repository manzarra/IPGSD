//teste primeiro commit
//console.log('Hello World');

const { write } = require('fs');
var http = require('http');
var server = http.createServer(function(req,res){
    res.writeHead(200);
    res.end('Hello World - Teste');
});
server.listen(8000);