//importacion de la libreria
var express = require("express");

// Creacion de la aplciación
var app = express();

// Agregar un puerto
var port = 3000;

//routes
app.get('*', function(req, res){
    res.end("Esto es una aolicacion");
});

// listening
app.listen(port, function(){
  console.log("El servidor es inicializado");
});
