/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DOM/DomManipulation.js":
/*!************************************!*\
  !*** ./src/DOM/DomManipulation.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Refresh = /*#__PURE__*/function () {
  function Refresh() {
    _classCallCheck(this, Refresh);
  }
  return _createClass(Refresh, [{
    key: "walkDom",
    value:
    /**
     * Recursively walks through the DOM tree and applies a callback function to each element.
     * @param {HTMLElement} el - The current element being processed.
     * @param {Function} callback - The function to be applied to each element.
     */
    function walkDom(el, callback) {
      // Applying the callback function to the current element
      callback(el);
      // Moving to the first child element
      el = el.firstElementChild;

      // Looping through each child element
      while (el) {
        // Recursively walking through the child elements
        this.walkDom(el, callback);
        // Moving to the next sibling element
        el = el.nextElementSibling;
      }
    }
  }], [{
    key: "refreshDom",
    value:
    /**
     * Refreshes the DOM based on the provided root element, directives, and data.
     * @param {HTMLElement} root - The root element from which to start refreshing.
     * @param {object} directives - Object containing directive functions.
     * @param {object} data - Data object to be applied to the directives.
     */
    function refreshDom(root, directives, data) {
      // Creating a new instance of Refresh
      var refresher = new Refresh();
      // Walking through the DOM starting from the root element
      refresher.walkDom(root, function (el) {
        // Iterating through each attribute of the element
        Array.from(el.attributes).forEach(function (attribute) {
          // Checking if the attribute name matches any directive
          if (Object.keys(directives).includes(attribute.name)) {
            // Applying the directive function to the element
            directives[attribute.name](el, data[attribute.value]);
          }
        });
      });
    }
  }]);
}(); // Exporting the Refresh class
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Refresh);

/***/ }),

/***/ "./src/directives.js":
/*!***************************!*\
  !*** ./src/directives.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _directives_f_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directives/f-html.js */ "./src/directives/f-html.js");
/* harmony import */ var _directives_f_text_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directives/f-text.js */ "./src/directives/f-text.js");



// Object containing directive functions mapped to their names
var directives = {
  /**
   * Map directives to its functions
   */
  "f-html": _directives_f_html_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "f-text": _directives_f_text_js__WEBPACK_IMPORTED_MODULE_1__["default"]
};

// Export the directives object
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (directives);

/***/ }),

/***/ "./src/directives/f-html.js":
/*!**********************************!*\
  !*** ./src/directives/f-html.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ fHtml)
/* harmony export */ });
function fHtml(el, value) {
  el.innerHTML = value;
}

/***/ }),

/***/ "./src/directives/f-text.js":
/*!**********************************!*\
  !*** ./src/directives/f-text.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ fText)
/* harmony export */ });
function fText(el, value) {
  el.textContent = value;
}

/***/ }),

/***/ "./src/evaluation/Evaluate.js":
/*!************************************!*\
  !*** ./src/evaluation/Evaluate.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// Class for evaluating data types
var Evaluate = /*#__PURE__*/function () {
  function Evaluate() {
    _classCallCheck(this, Evaluate);
  }
  return _createClass(Evaluate, null, [{
    key: "evaluateDataType",
    value:
    /**
     * Evaluates the data type of the input value.
     * @param {*} input - The value to be evaluated.
     * @returns {*} - The evaluated value.
     */
    function evaluateDataType(input) {
      // Check if input is a string "true" or "false"
      if (input === "true" || input === "false") {
        return Boolean(input);
      }
      // Check if input can be converted to a number
      else if (!isNaN(Number(input))) {
        return Number(input);
      }
      // Return input as is if not a boolean or number
      else {
        return input;
      }
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Evaluate);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _directives_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directives.js */ "./src/directives.js");
/* harmony import */ var _evaluation_Evaluate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./evaluation/Evaluate.js */ "./src/evaluation/Evaluate.js");
/* harmony import */ var _DOM_DomManipulation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOM/DomManipulation.js */ "./src/DOM/DomManipulation.js");



window.Nimble = {
  /**
   * Directives like f-text, f-html, f-show, etc...
   */
  directives: _directives_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  /**
   * start() will boot everything
   */
  start: function start() {
    // Selecting the root element with f-data attribute
    this.root = document.querySelector("[f-data]");

    // Extracting initial data and storing it
    this.rawData = this.getInitialData();
    this.data = this.rawData;

    // Triggering the refresh of the DOM
    _DOM_DomManipulation_js__WEBPACK_IMPORTED_MODULE_2__["default"].refreshDom(this.root, this.directives, this.data);
  },
  /**
   * @returns {object} - Returns the converted object from data string
   * 
   * Takes the Data as string, and converts it to an object
   */
  getInitialData: function getInitialData() {
    // Extracting the data string from the root element
    var dataString = this.root.getAttribute("f-data");
    var obj = {}; // Initializing an empty object to store key-value pairs
    var key = ''; // Initializing an empty string for the key
    var value = ''; // Initializing an empty string for the value
    var inQuotes = false; // Flag to track if inside quotes
    var isKey = true; // Flag to track if currently reading key or value

    // Looping through each character in the data string
    for (var i = 0; i < dataString.length; i++) {
      // Removing unnecessary characters like '{', '}', etc.
      var _char = dataString[i].replace(/[\{{\}}]/g, "");

      // Checking if the character is a quote
      if (_char === "'" || _char === '"') {
        // Toggling the inQuotes flag
        inQuotes = !inQuotes;
      } else if (_char === ':' && !inQuotes) {
        // Changing the flag to read value
        isKey = false;
      } else if (_char === ',' && !inQuotes) {
        // Storing the key-value pair and resetting the variables
        obj[key.trim()] = _evaluation_Evaluate_js__WEBPACK_IMPORTED_MODULE_1__["default"].evaluateDataType(value.trim());
        key = '';
        value = '';
        isKey = true;
      } else {
        // Appending characters to key or value based on the flag
        if (isKey) {
          key += _char;
        } else {
          value += _char;
        }
      }
    }

    // Storing the last key-value pair if any
    if (key.trim() !== '' && value.trim() !== '') {
      obj[key.trim()] = _evaluation_Evaluate_js__WEBPACK_IMPORTED_MODULE_1__["default"].evaluateDataType(value.trim()); // Will convert the string to it's corresponing datatype.
    }

    // Returning the final object
    return obj;
  }
};

// Starting the program
window.Nimble.start();
})();

/******/ })()
;