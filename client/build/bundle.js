/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var UI = __webpack_require__(1);
	
	var app = function(){
	  console.log("eee")
	  new UI();
	}
	
	window.onload = app;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var RequestFruits = __webpack_require__(2);
	
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
	      // this.appendText(li, fruits[i],"Fruit: ");
	      // li.innerText = fruits[i];
	      htmltext ="<BR><B><U>" + fruits[i] + "<BR>" + "</B>This will be an image of a <B><U>"+fruits[i]+"</B></U> if I knew where to put the image in build" 

	      ;
	      li.innerHTML=htmltext+"<P><HR>"
	      container.appendChild(li);  

	    }
	  }
	}
	
	module.exports = UI;

/***/ },
/* 2 */
/***/ function(module, exports) {

	var RequestFruits = function(){
	
	}
	RequestFruits.prototype = {
	  all: function(url, callback){
	    var request = new XMLHttpRequest();
	    request.open("GET", url);
	    request.onload = callback;
	    request.send();
	  }
	}
	
	module.exports = RequestFruits;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map