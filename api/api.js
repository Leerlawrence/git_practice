var FruitApi = function(app){

  var fruits=["Apple","Orange","Lychee", "Kumquat"];
  app.get("/fruits",function(req,res){    
    res.json({data:fruits});
    console.log(res);
  });
}
module.exports = FruitApi;