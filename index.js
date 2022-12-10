const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const { url } = require("inspector");
const { request } = require("http");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));



app.listen(process.env.PORT || 2000, function(){
    console.log("port is running");
})

app.get("/", function(req, rec){
    rec.sendFile(__dirname+"/intex.html");
})

app.get("/gmail.html", function(req, rec){
rec.sendFile(__dirname+"/gmail.html");
})


app.post("/gmail", function(req, rec){
    const firstname= req.body.firstname;
    console.log(firstname);
    rec.send("hello");
})



