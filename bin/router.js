const express = require("express");
const app = express();

app.get("/", function (req, res){ 
    res.status(200).send("hola mundo");

});

app.get("/users", function (req, res) {
    let users = [
        {nickname: "josecogollo", password: "12345"},
        {nickname: "Alixbaron", password: "12345678"},
        {nickname: "GreyNovoa", password: "1234567890"},
        {nickname: "PaulaRambao", password: "12345"},
        {nickname: "SebastianPaternina", password: "12345"}
        
    ];
    res.status(200).send(users);
    
});


exports.app = app;
