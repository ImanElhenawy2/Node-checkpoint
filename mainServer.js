const  http = require("http");


http.createServer((req, res)=> {
    res.writeHead(200,{"content-type": "text/html"} );
    res.write("<h1>Hello Node!!!!</h1>");
    res.end()
}).listen(3000);
