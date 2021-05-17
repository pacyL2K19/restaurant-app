/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderContactPage\": () => (/* binding */ renderContactPage)\n/* harmony export */ });\n/* eslint-disable import/prefer-default-export */\nvar renderContactPage = function () {\n  // container\n  var contentContainer = document.querySelector('#content');\n  var contact = document.createElement('div');\n  contact.setAttribute('id', 'contact');\n  contact.setAttribute('data-tab-content', '');\n  contact.innerHTML = \"\\n    <div class=\\\"hero\\\">\\n    <h1>Contact us</h1>\\n  </div>\\n  <div class=\\\"contact-container\\\">\\n    <div class=\\\"info\\\">\\n      <div class=\\\"address\\\">\\n        <p>\\n          <i class=\\\"fi-xnsuxl-map-marker-solid\\\"></i>Gombe OUA 390<br />San\\n          Kinshasa\\n        </p>\\n      </div>\\n      <div class=\\\"hours\\\">\\n        <p>\\n          <i class=\\\"fi-cnsuhl-clock-solid\\\"></i\\n          ><span>Mon-Thurs:</span>8am-8pm<br /><span>Fri-Sun:</span\\n          >8am-11pm\\n        </p>\\n      </div>\\n      <div class=\\\"phone\\\">\\n        <p><i class=\\\"fi-xnsrxl-phone-solid\\\"></i>(243)-999 999 999</p>\\n      </div>\\n      <div class=\\\"contact-form\\\">\\n        <form onsubmit=\\\"return false\\\">\\n          <h3><i class=\\\"fi-xwsuxl-envelope-solid\\\"></i>Message us</h3>\\n          <div class=\\\"input-box\\\">\\n            <input type=\\\"text\\\" required />\\n            <span>Full Name</span>\\n          </div>\\n          <div class=\\\"input-box\\\">\\n            <input type=\\\"text\\\" required />\\n            <span>Email</span>\\n          </div>\\n          <div class=\\\"input-box\\\">\\n            <textarea required></textarea>\\n            <span>Type your message...</span>\\n          </div>\\n          <input type=\\\"submit\\\" value=\\\"Send\\\" />\\n        </form>\\n      </div>\\n    </div>\\n    <iframe\\n      src=\\\"https://www.google.com/maps/d/u/0/embed?mid=110QBBHsqaZ4qZL84I0zX-x5ecoaaACd0\\\" width=\\\"640\\\" height=\\\"480\\\"\\n      width=\\\"600\\\"\\n      height=\\\"450\\\"\\n      frameborder=\\\"0\\\"\\n      style=\\\"border: 0\\\"\\n      allowfullscreen=\\\"\\\"\\n      aria-hidden=\\\"false\\\"\\n      tabindex=\\\"0\\\"\\n    ></iframe>\\n  </div>\";\n  contentContainer.appendChild(contact);\n}();\n\n\n\n//# sourceURL=webpack://restaurant-app/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderHomePage\": () => (/* binding */ renderHomePage)\n/* harmony export */ });\n/* eslint-disable import/prefer-default-export */\nvar renderHomePage = function () {\n  var contentContainer = document.querySelector('#content');\n  var home = document.createElement('div');\n  home.classList.add('tab-content');\n  home.innerHTML = \"<div id=\\\"home\\\" class=\\\"active\\\" data-tab-content>\\n  <div class=\\\"overlay\\\"></div>\\n  <div class=\\\"hero\\\">\\n    <h1>Come on down for some delicious cuisine!</h1>\\n    <p>Tasty and affordable!</p>\\n    <div class=\\\"btn-container\\\">\\n      <a data-tab-target=\\\"#menu\\\" class=\\\"order-now\\\">Order Now</a>\\n    </div>\\n  </div>\\n  <div class=\\\"info\\\">\\n    <div class=\\\"address\\\">\\n      <span><i class=\\\"fi-xnsuxl-map-marker-solid\\\"></i></span>\\n      <p>Gombe OUA 300<br />Kinshasa Town</p>\\n    </div>\\n    <div class=\\\"hours\\\">\\n      <span><i class=\\\"fi-cnsuhl-clock-solid\\\"></i></span>\\n      <p>\\n        <span>Mon-Thurs:</span>8am-8pm<br /><span>Fri-Sun:</span\\n        >8am-11pm\\n      </p>\\n    </div>\\n  </div>\\n</div>\";\n  contentContainer.appendChild(home);\n}();\n\n\n\n//# sourceURL=webpack://restaurant-app/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageload */ \"./src/pageload.js\");\n/* harmony import */ var _pageload__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pageload__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* eslint-disable no-unused-vars */\n\n\n\n\nvar tabs = document.querySelectorAll('[data-tab-target]');\nvar tabContents = document.querySelectorAll('[data-tab-content]');\nvar burger = document.querySelector('.hamburger');\nburger.addEventListener('click', function () {\n  document.querySelector('ul').classList.toggle('active');\n  burger.classList.toggle('toggle');\n});\ntabs.forEach(function (tab) {\n  return tab.addEventListener('click', function () {\n    var target = document.querySelector(tab.dataset.tabTarget);\n    tabContents.forEach(function (tabContent) {\n      tabContent.classList.remove('active');\n    });\n    tabs.forEach(function (tab) {\n      tab.classList.remove('red');\n    });\n    tab.classList.add('red');\n    target.classList.add('active');\n  });\n});\ndocument.querySelector('.order-now').addEventListener('click', function () {\n  document.querySelector('[data-tab-target=\"#menu\"]').classList.add('red');\n});\ndocument.querySelector('[type=\"submit\"]').addEventListener('click', function () {\n  document.querySelector('form').reset();\n});\n\n//# sourceURL=webpack://restaurant-app/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderMenuPage\": () => (/* binding */ renderMenuPage)\n/* harmony export */ });\n/* eslint-disable import/prefer-default-export */\nvar renderMenuPage = function () {\n  var contentContainer = document.querySelector('#content');\n  var menu = document.createElement('div');\n  menu.setAttribute('id', 'menu');\n  menu.setAttribute('data-tab-content', '');\n  menu.innerHTML = \"\\n  <div class=\\\"hero\\\">\\n  <h1>Menu</h1>\\n</div>\\n<div class=\\\"menu-container\\\">\\n  <div class=\\\"menu-item\\\">\\n    <img src=\\\"./assets/hamburger.png\\\" alt=\\\"\\\" />\\n    <div class=\\\"item-content\\\">\\n      <h4>Hamburger: <span>$2.49</span></h4>\\n      <p>\\n        Buns, patty, tomato, onions, lettuce, and our secret family\\n        recipe.\\n      </p>\\n    </div>\\n  </div>\\n  <div class=\\\"menu-item\\\">\\n    <img src=\\\"./assets/cheeseburger.png\\\" alt=\\\"\\\" />\\n    <div class=\\\"item-content\\\">\\n      <h4>Cheeseburger: <span>$2.99</span></h4>\\n      <p>Similar to our hamburger, but with cheese.</p>\\n    </div>\\n  </div>\\n  <div class=\\\"menu-item\\\">\\n    <img src=\\\"./assets/double-cheeseburger.png\\\" alt=\\\"\\\" />\\n    <div class=\\\"item-content\\\">\\n      <h4>Double Cheeseburger: <span>$3.49</span></h4>\\n      <p>Similar to our cheeseburger, but with an extra patty.</p>\\n    </div>\\n  </div>\\n  <div class=\\\"menu-item\\\">\\n    <img src=\\\"./assets/steak.png\\\" alt=\\\"\\\" />\\n    <div class=\\\"item-content\\\">\\n      <h4>Steak: <span>$11.99</span></h4>\\n      <p>A juicy steak made just how you like it.</p>\\n    </div>\\n  </div>\\n  <div class=\\\"menu-item\\\">\\n    <img src=\\\"./assets/ribs.png\\\" alt=\\\"\\\" />\\n    <div class=\\\"item-content\\\">\\n      <h4>BBQ Ribs: <span>$8.99</span></h4>\\n      <p>Barbecue ribs with your choice of a add-ons.</p>\\n    </div>\\n  </div>\\n  <div class=\\\"menu-item\\\">\\n    <img src=\\\"./assets/grilled-cheese.png\\\" alt=\\\"\\\" />\\n    <div class=\\\"item-content\\\">\\n      <h4>Grilled Cheese Sandwich: <span>$4.99</span></h4>\\n      <p>\\n        A toasted and grilled cheese sandwich, dipped in our special\\n        sauce.\\n      </p>\\n    </div>\\n  </div>\\n  <div class=\\\"menu-item\\\">\\n    <img src=\\\"./assets/caesar-salad.png\\\" alt=\\\"\\\" />\\n    <div class=\\\"item-content\\\">\\n      <h4>Caesar Salad: <span>$7.99</span></h4>\\n      <p>\\n        Your typical caesar salad that comes with your choice of\\n        dressings.\\n      </p>\\n    </div>\\n  </div>\\n  <div class=\\\"menu-item\\\">\\n    <img src=\\\"./assets/french-fries.png\\\" alt=\\\"\\\" />\\n    <div class=\\\"item-content\\\">\\n      <h4>French Fries: <span>$1.99</span></h4>\\n      <p>\\n        Sometimes you don't want to eat your burger alone, why not add\\n        some french fries?\\n      </p>\\n    </div>\\n  </div>\\n</div>\";\n  contentContainer.appendChild(menu);\n}();\n\n\n\n//# sourceURL=webpack://restaurant-app/./src/menu.js?");

/***/ }),

/***/ "./src/pageload.js":
/*!*************************!*\
  !*** ./src/pageload.js ***!
  \*************************/
/***/ (() => {

eval("/* eslint-disable no-unused-vars */\nvar pageLoad = function () {\n  var contentContainer = document.querySelector('#content');\n  var header = document.createElement('header');\n  header.innerHTML = \"\\n  <nav>\\n  <h2>Restaurant</h2>\\n  <a href=\\\"#\\\" class=\\\"hamburger\\\">\\n    <span class=\\\"line line1\\\"></span>\\n    <span class=\\\"line line2\\\"></span>\\n    <span class=\\\"line line3\\\"></span>\\n  </a>\\n  <ul class=\\\"links\\\">\\n    <li data-tab-target=\\\"#home\\\" class=\\\"tab red\\\">Home</li>\\n    <li data-tab-target=\\\"#menu\\\" class=\\\"tab\\\">Menu</li>\\n    <li data-tab-target=\\\"#contact\\\" class=\\\"tab\\\">Contact us</li>\\n  </ul>\\n</nav>\";\n  contentContainer.appendChild(header);\n}();\n\n//# sourceURL=webpack://restaurant-app/./src/pageload.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;