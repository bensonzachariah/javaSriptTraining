const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))











// var express = require("express");
// var app = express();
// const port = 5000;
// const fs=require('fs');
// const http=require('http');

// fs.readFile("index.html",'utf8',(err,data)=>{

//     if(err)
//     {
//         console.log(err.message);
//     }

//    const server= http.createServer( (req, res) =>  {
//         res.statusCode=200;
//         res.setHeader("Content-type","text/html");
//         res.write(data);
//         res.end();
//     })

//     server.listen(port,()=>{
//         console.log(`server is running in the port ${port}`);
//     });
// });



// app.get("/:name", (req, res) => {
//     const name = req.params.name;
//     var nameCap = name.charAt(0).toUpperCase() + name.slice(1);
//     res.send(`Hi ${nameCap}, Welcome`);
// });

// app.get("/*", (req, res) => res.send("Your Lost "));

// app.listen(port, () => console.log(`server has been started in the port ${port}`));