const http = require('http');

const server = http.createServer((req,res)=> {
    res.writeHead(200,{'content-type':'text/plain'})
    res.end("Hi I successfully Excuted on server");
    })

    server.listen(3000,'127.0.0.1');
    console.log("server running at port 3000");

// create server():Create server and handle request.
// res.write Head():Send headers with staus code.
// res.end:End the response
// server.listen(): start server on port 3000