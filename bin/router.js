const express = require("express");
const app = express();

app.get("/", function (req, res){ 
    res.status(200).send("hola mundo");

});

app.get("/users", function (req, res) {
    let users = [
        {nickname: "jose cogollo", password: "12345"},
        {nickname: "Alix baron", password: "12345678"},
        {nickname: "Grey Novoa", password: "1234567890"},
        {nickname: "Paula Rambao", password: "12345"},
        {nickname: "Sebastian Paternina", password: "12345"}
        
    ];
    res.status(200).send(users);
    
});

app.get("/songs", function (req, res) {
    let songs = [
        {id: "hdh76hy6h44r4", nombre: "la risa de las vocales", duracion: "4:20", id_autor: "cgcb87uy6f"},
        {id: "hdh76hy6h44r4", nombre: "la cancion de los colores", duracion: "3:10", id_autor: "cgcb87uy6f"},
        {id: "hdh76hy6h44r4", nombre: "las figuras geometricas", duracion: "5:15", id_autor: "kh6hf6fh9j8"}
    ];
    res.status(200).send(songs);

    
});


exports.app = app;
