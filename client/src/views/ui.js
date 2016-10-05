var RequestFruits = require("../models/requestFruits");

var UI = function(){
  var self = this;
  var requestFruits = new RequestFruits();
  console.log("hello")
  requestFruits.all("http://localhost:3000/fruits",function(result){
    if(this.status != 200){console.log(this.status)}
      var data = this.responseText;
      var fruits = JSON.parse(data);
      var fruitsArray = fruits.data;
      self.render(fruitsArray);

  });

}

UI.prototype = {
  render: function(fruits){
    var container = document.getElementById("fruits");

    for (var i = 0; i < fruits.length; i ++) {

      var li = document.createElement("li");
      console.log(fruits[i]);
      console.log("test")
    //  this.appendText(li, fruits[i],"Fruit: ");
      li.innerText = fruits[i] +"fruit";
      container.appendChild(li);  
    }
  }
}

module.exports = UI;