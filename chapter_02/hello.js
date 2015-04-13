var express = require('express');

var app = express();

var port = 3000;

app.get('*', function(req, res){
  res.end('Hello Word Express!!');
});

app.listen(port, function(){
  console.log('Please, open your browser at http://localhost:%s', port);
});
