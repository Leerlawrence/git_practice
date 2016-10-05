var FruitApi = function(app){

  var fruits=["Raspberry","Mango","Lemon", "Orange","Ugli Fruit", "Banana", "melon","Strawberries"];
  app.get("/fruits",function(req,res){    
    res.json({data:fruits});
    console.log(res);
  });
}
module.exports = FruitApi;