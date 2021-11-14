const http = require('http');
const fs = require('fs');
const fileContent = fs.readFileSync('mathobjectjs61.html');

const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-type': 'text/html'});
    res.end(fileContent);
});

server.listen(80, '127.0.0.1', ()=>{
    console.log("Listening On Port 80");
});
//port 80 is helpful in the way that we can directly enter url of code and it will execute
