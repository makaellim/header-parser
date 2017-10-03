var express = require('express');
var app = express();

app.get('/', function(req, res){
  console.log(req.header['a']);


  var obj = req.headers;

  res.send("listening the localhost: " + obj.host + "<br>user-agent: " + obj["user-agent"] + "<br>language: " + obj["accept-language"]);
  console.log(JSON.stringify(obj));
});
app.listen(3000);
// ipaddress
// language
// software
