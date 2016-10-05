var Fruits = require("../models/fruits");

var UI = function(){
  var fruits = new Fruits();
  fruits.all(function(result){
    this.render(result);
  }.bind(this));
}

UI.prototype = {
  render: function(fruits){
    
  }
}

module.exports = UI;