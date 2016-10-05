var RequestFruits = require("../models/requestFruits");

var UI = function(){
  var requestFruits = new RequestFruits();
  console.log("hello")
  requestFruits.all("http://localhost:3000/fruits",function(result){
    if(this.status != 200){console.log(this.status)}
      var data = this.responseText;
      var fruits = JSON.parse(data);
      var fruitsArray = fruits.data;
      console.log(fruitsArray);

  });
}

UI.prototype = {
  render: function(fruits){
    var container = document.getElementById("fruits");

    for (var fruit of fruits) {

      var li = documemt.createElement("li");
      this.appendText(li, fruit,"Fruit: ");
    }
    container.appendChild(li);
  }
}

module.exports = UI;