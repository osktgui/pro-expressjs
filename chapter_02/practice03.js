//Importar la libreria
var express = require("express");

//Creacion de la aplicacion
var app = express();

// Inicializacion del puerto
var port = 3000;

// Routes
app.get("/user/:username", function(req, res){
  res.status(200);
  res.set("Content-type; text/html");
  res.send("<h1>Bienvenido usuario " + req.params.username + "</h1>");
});


//Escuchador
app.listen(port, function(){
  console.log("Start practice03");
});
