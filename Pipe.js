var ms = require('fs');
var myReadStream = ms.createReadStream(__dirname +'/document.txt', 'utf8');
var writeStream = ms.createWriteStream(__dirname +'/Pipe.txt');
// To Convert Read into write in normal 
// myReadStream.on'data', function(chunk){
//     console.log("New chunk received");
//     writeStream.write(chunk)
// });
myReadStream.pipe(writeStream)

// Pipe() in server creation



var PS = require('fs');
const http = require('http');
// Import HTTP Module
const Server = http.createServer((req,res) =>{
    res.writeHead(200,{'content-type':'text/plain'});
    var myReadStream = PS.createReadStream(__dirname +'/Sample.html', 'utf8');
    myReadStream.pipe(res);
})
Server.listen(3000,'192.168.1.16');
console.log("server running at port 3000");

// Pipe Running Html in Server
var PSH = require('fs');
const HTML= require('http');
// Import HTTP Module
const htmlServer = HTML.createServer((req,res) =>{
    res.writeHead(200,{'content-type':'text/html'});
    var myReadStream = PSH.createReadStream(__dirname +'/Sample.html', 'utf8');
    myReadStream.pipe(res);
})
htmlServer.listen(3002,'192.168.1.16');
console.log("server running at port 3002");

// Pipe Running JSON in Server
var PSJ = require('fs');
const JS= require('http');
// Import HTTP Module
const JSONServer = JS.createServer((req,res) =>{
    res.writeHead(200,{'content-type':'application/json'});
    var jsonfile = {
        Name:"Vijay",
        Age:12,
        Grade: "VIII" 
    }
    res.end(JSON.stringify(jsonfile))

})
JSONServer.listen(3003,'127.1.1.1');
console.log("server running at port 3003");

// Pipe Running server both HTML & JSON

var fs = require('fs');
const Hp = require('http');
// Import HTTP Module
const serve = Hp.createServer((req,res) =>{
    if(req.url==='/html'){
    res.writeHead(200,{'content-type':'text/html'});
    var myReadStream = fs.createReadStream(__dirname +'/Sample.html', 'utf8');
    myReadStream.pipe(res);
}
else if (req.url==='/json') {
res.writeHead(200,{'content-type':'application/json'});
const Json ={Name:"Jayaraj", Gender:"Male",Occupation:"Professor",Place:"Chennai"};
res.end(JSON.stringify(Json));
}
else{
    res.writeHead(404,{'content-type':'text/Italic'});
    res.end('File Not Found');
}
});
serve.listen( ');
console.log("Server runningat port 3011");




