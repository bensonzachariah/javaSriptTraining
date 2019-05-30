const http = require('http');
const os = require('os');
const port=3001;

const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader("Content-type","text/plain");
    res.write("Welcome to Node.js server" +os.EOL);
    res.write(`Running on port ${port} at ${req.url}`);
    res.end();
});

server.listen(port,host,()=>{
    console.log(`server is running on the port ${port}`)
});