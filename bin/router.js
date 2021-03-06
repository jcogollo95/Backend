const express = require("express");
const app = express();

app.get("/", function (req, res){ 
    res.status(200).send("hola mundo");

});

/**
 * @api {get} /users 
 * @apiName users
 * @apiGroup General
 * @apiDescription Permite mostrar los usuarios de la API
 * 
 * @apiSuccess {string} users usuarios en linea de la API
 * @apiSuccessExample {json} Success-Example
 * HTTP/1.1 200 OK
 * {
 * users: Usuarios
 * }


 */
app.get("/users", function (req, res) {
    let users = [
        {nickname: "jose cogollo", password: "12345"},
        {nickname: "Alix baron", password: "12345678"},
        {nickname: "Grey Novoa", password: "1234567890"},
        {nickname: "Paula Rambao", password: "12345"},
        {nickname: "Sebastian materninez", password: "12345"}
        
    ];
    res.status(200).send(users);
    
});

/**
 * @api {get} /songs
 * @apiName songs
 * @apiGroup grupo
 * @apiDescription Permite mostrar los grupos delas colecciones de musica de la API
 * @apiSuccess {string} Colecciones de canciones de la API
 * @apiSuccessExample {json} Success-Example
 * HTTP/1.1 200 OK
 * {
 * users: songs
 * }
 */

app.get("/songs", function (req, res) {
    let songs = [
        {id: "hdh76hy6h44r4", nombre: "la risa de las vocales", duracion: "4:20", id_autor: "cgcb87uy6f"}, 
        {id: "hdgjr4dmy6hdk", nombre: "la cancion de los colores", duracion: "3:10", id_autor: "cgcb87uy6f"},
        {id: "hhs7ujfnd8s8s", nombre: "las figuras geometricas", duracion: "5:15", id_autor: "kh6hf6fh9j8"}
    ];
    res.status(200).send(songs);

    
});
app.get("/songs/:id", function (req, res) {
    let { id } = req.params

    let song;
    if (id==="hdh76hy6h44r4") {
        song = {id: "hdh76hy6h44r4", nombre: "la risa de las vocales", duracion: "4:20", id_autor: "cgcb87uy6f"}

        
    }else if(id === "hdgjr4dmy6hdk"){
        song = {id: "hdgjr4dmy6hdk", nombre: "la cancion de los colores", duracion: "3:10", id_autor: "cgcb87uy6f"}

    }else{
        res.status(404).send({message: "La cancion no esta registrada en la base de datos"})
    }
    res.status(200).send(song);
    
});



exports.app = app;
