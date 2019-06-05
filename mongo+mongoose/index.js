const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect('mongodb://localhost/myapp',{ useNewUrlParser: true }, ()=>console.log("DB Connected"))


app.get("/", (req, res) => res.send("Hello Benson"));

app.listen(3001, ()=> console.log("Live"));