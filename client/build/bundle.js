/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var PortfolioView = __webpack_require__(1);
var Request = __webpack_require__(2);

var onLoad = function(){
  new Request('/portfolio', PortfolioView);
};

window.addEventListener('load', onLoad);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var PortfolioView = function(projects) {
  var div = document.getElementById('main-container');
  projects.forEach((project) => {
    var imageDiv = document.createElement('div');
    imageDiv.className = 'project-img-div';
    var img = document.createElement('img');
    img.className = 'project-img';
    img.src = project.squareImage;
    imageDiv.appendChild(img);
    div.appendChild(imageDiv);
  });
};

module.exports = PortfolioView;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

var Request = function(url, callback) {
  var onRequestLoad = function(event) {
    if (this.status !== 200) return callback([]);
    var resultString = event.target.responseText;
    var result = JSON.parse(resultString);
    callback(result);
  };

  var startRequest = function() {
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.addEventListener('load', onRequestLoad);
    request.send();
  };

  startRequest();
};

module.exports = Request;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map