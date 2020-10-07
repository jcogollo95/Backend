const express = require("express");
const app = express();

app.get("/", function (req, res){ 
    res.status(200).send("hola mundo");

})


exports.app = app;
