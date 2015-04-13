// importar libreria
var express = require("express");

// crear una aplicacion
var app = express();

// Inicializar un puerto
var port = 3000;

// Routes
app.get("*", function(req, res){
  res.status(200);
  res.set("Content-type: text/html");
  res.send("<h1>this is my aplication</h1>");
});


// Listening
app.listen(port, function(){
  console.log("El servidor de practice02 es inicilaizado.");
});
