var express = require("express");
var app = express();
var path = require("path");

var FruitApi = require("./api/api");


app.use(express.static("public"));

app.get("/", function(req, res){
  res.sendFile(path.join(__dirname+"/index.html"))
});


app.listen(3000, function(){
  // new FruitApi(app);
  console.log("app running on port" + this.address().port);
});