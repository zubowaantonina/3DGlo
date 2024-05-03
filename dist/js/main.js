/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer.js */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu.js */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal.js */ \"./modules/modal.js\");\n/* harmony import */ var _modules_scroll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/scroll.js */ \"./modules/scroll.js\");\n/* harmony import */ var _modules_form_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/form.js */ \"./modules/form.js\");\n/* harmony import */ var _modules_calculator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/calculator.js */ \"./modules/calculator.js\");\n/* harmony import */ var _modules_tabs_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/tabs.js */ \"./modules/tabs.js\");\n/* harmony import */ var _modules_slider_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/slider.js */ \"./modules/slider.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"15 may 2024\");\r\n(0,_modules_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_scroll_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_form_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_calculator_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(100);\r\n(0,_modules_tabs_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n(0,_modules_slider_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calculator.js":
/*!*******************************!*\
  !*** ./modules/calculator.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calculator = (price = 100) => {\r\n  const calcBlock = document.querySelector(\".calc-block\");\r\n  const calcType = document.querySelector(\".calc-type\");\r\n  const calcSquare = document.querySelector(\".calc-square\");\r\n  const calcCount = document.querySelector(\".calc-count\");\r\n  const calcDay = document.querySelector(\".calc-day\");\r\n  const total = document.getElementById(\"total\");\r\n  const calcInputs = document.querySelectorAll(\"input.calc-item\");\r\n\r\n  calcInputs.forEach((item) => {\r\n    item.addEventListener(\"input\", (e) => {\r\n      e.target.value = e.target.value.replace(/\\D+/g, \"\");\r\n    });\r\n  });\r\n\r\n  const countCalc = () => {\r\n    const calcTypeValue = +calcType.options[calcType.selectedIndex].value;\r\n    const calcSquareValue = calcSquare.value;\r\n    let totalValue = 0;\r\n    let calcCountValue = 1;\r\n    let calcDayValue = 1;\r\n\r\n    if (calcCount.value > 1) {\r\n      calcCountValue += +calcCount.value / 10;\r\n    }\r\n    if (calcDay.value && calcDay.value < 5) {\r\n      calcDayValue = 2;\r\n    } else if (calcDay.value && calcDay.value < 10) {\r\n      calcDayValue = 1.5;\r\n    }\r\n    if (calcTypeValue && calcSquareValue) {\r\n      totalValue =\r\n        price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;\r\n    } else {\r\n      totalValue = 0;\r\n    }\r\n   let time = 100;\r\n    let step = 1;\r\n\r\n    const numberAnimation = (num, elem) => {\r\n      let n = 0;\r\n      const t = Math.round(time / (num / step));\r\n      const interval = setInterval(() => {\r\n        n = n + step;\r\n        if (n == num) {\r\n          clearInterval(interval);\r\n        }\r\n        total.textContent = n;\r\n      }, t);\r\n    };\r\n    if (totalValue !== 0) {\r\n      numberAnimation(totalValue, total);\r\n    }\r\n  };\r\n\r\n  calcBlock.addEventListener(\"input\", (e) => {\r\n    if (\r\n      e.target === calcType ||\r\n      e.target === calcSquare ||\r\n      e.target === calcCount ||\r\n      e.target === calcDay\r\n    ) {\r\n      countCalc();\r\n    }\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculator);\r\n\n\n//# sourceURL=webpack:///./modules/calculator.js?");

/***/ }),

/***/ "./modules/form.js":
/*!*************************!*\
  !*** ./modules/form.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst form = () => {\r\n    const textInputs = document.querySelectorAll('input[Placeholder=\"Ваше имя\"]');\r\n    const textArea = document.querySelector(\r\n        'input[Placeholder=\"Ваше сообщение\"]'\r\n    );\r\n    const emailInputs = document.querySelectorAll('input[Type=\"email\"]');\r\n    const telInputs = document.querySelectorAll('input[Type=\"tel\"]');\r\n\r\n    textInputs.forEach((item) => {\r\n        item.addEventListener(\"input\", (e) => {\r\n            e.target.value = e.target.value.replace(/[^а-яА-Я -]/g, \"\");\r\n        });\r\n    });\r\n    textArea.addEventListener(\"input\", (e) => {\r\n        e.target.value = e.target.value.replace(/[^а-яА-Я -]/g, \"\");\r\n    });\r\n    emailInputs.forEach((item) => {\r\n        item.addEventListener(\"input\", (e) => {\r\n            e.target.value = e.target.value.replace(/[^0-9a-zA-Z@-_.!~*']/g, \"\");\r\n        });\r\n    });\r\n    telInputs.forEach((item) => {\r\n        item.addEventListener(\"input\", (e) => {\r\n            e.target.value = e.target.value.replace(/[^0-9()-]/g, \"\");\r\n        });\r\n    });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (form);\r\n\n\n//# sourceURL=webpack:///./modules/form.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n  const menu = document.querySelector(\"menu\");\r\n\r\n  const handleMenu = () => {\r\n    menu.classList.toggle(\"active-menu\");\r\n  };\r\n\r\n  document.addEventListener(\"click\", (e) => {\r\n    if (e.target.closest(\".close-btn\")) {\r\n      handleMenu();\r\n    }\r\n    if (e.target.closest(\".active-menu\") && e.target.hasAttribute(\"href\")) {\r\n      handleMenu();\r\n    }\r\n    if (!e.target.closest(\"menu\") && menu.classList.contains(\"active-menu\")) {\r\n      handleMenu();\r\n    } else if (e.target.closest(\".menu\")) {\r\n      handleMenu();\r\n    }\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\r\n\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n    const modal = document.querySelector(\".popup\");\r\n    const buttons = document.querySelectorAll(\".popup-btn\");\r\n    const closeBtn = modal.querySelector(\".popup-close\");\r\n    const media = window.matchMedia('(min-width: 768px)');\r\n    \r\n    let count = 0;\r\n    let idInterval;\r\n\r\n    if (media.matches) {\r\n        const animatePopup = () => {\r\n            count++;\r\n            idInterval = requestAnimationFrame(animatePopup);\r\n            modal.style.display = 'block';\r\n            if (count < 100) {\r\n                modal.style.opacity = count + '%';\r\n            } else {\r\n                cancelAnimationFrame(idInterval);\r\n            }\r\n        };\r\n        const unPopup = () => {\r\n            count--;\r\n            idInterval = requestAnimationFrame(unPopup);\r\n\r\n            if (count > 0) {\r\n                modal.style.opacity = count + '%';\r\n            } else {\r\n                cancelAnimationFrame(idInterval);\r\n                modal.style.display = 'none';\r\n            }\r\n        };\r\n        buttons.forEach(btn => {\r\n            btn.addEventListener('click', animatePopup);\r\n        });\r\n        closeBtn.addEventListener('click', unPopup);\r\n    } else {\r\n        buttons.forEach(btn => {\r\n            btn.addEventListener('click', () => {\r\n                modal.style.display = 'block';\r\n            });\r\n        });\r\n        closeBtn.addEventListener('click', () => {\r\n            modal.style.display = 'none';\r\n        });\r\n    }\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/scroll.js":
/*!***************************!*\
  !*** ./modules/scroll.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scroll = () => {\r\n  const menu = document.querySelector(\"menu\");\r\n  const links = menu.querySelectorAll(\"ul>li>a\");\r\n  const mainBtn = document.querySelector(\"main>a\");\r\n  const allLinks = [...links, mainBtn];\r\n\r\n  allLinks.forEach((link) => {\r\n    link.addEventListener(\"click\", (event) => {\r\n      event.preventDefault();\r\n      const id = link.getAttribute(\"href\").substring(1);\r\n      const section = document.getElementById(id);\r\n\r\n      if (section) {\r\n        section.scrollIntoView({ behavior: \"smooth\", block: \"start\" });\r\n      }\r\n    });\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);\r\n\n\n//# sourceURL=webpack:///./modules/scroll.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\r\n    const sliderBlock = document.querySelector(\".portfolio-content\");\r\n    const slides = document.querySelectorAll(\".portfolio-item\");\r\n    const dotsBlock = document.querySelector(\".portfolio-dots\");\r\n\r\n    let currentSlide = 0;\r\n    let interval;\r\n    slides.forEach(() => {\r\n        dotsBlock.insertAdjacentHTML(\"beforeend\", `<li class=\"dot\"></li>`);\r\n    });\r\n    const dots = document.querySelectorAll(\".dot\");\r\n    const prevSlide = (elems, index, strClass) => {\r\n        elems[index].classList.remove(strClass);\r\n    };\r\n    const nextSlide = (elems, index, strClass) => {\r\n        elems[index].classList.add(strClass);\r\n    };\r\n    const autoSlide = () => {\r\n        prevSlide(slides, currentSlide, \"portfolio-item-active\");\r\n        prevSlide(dots, currentSlide, \"dot-active\");\r\n        currentSlide++;\r\n        if (currentSlide >= slides.length) {\r\n            currentSlide = 0;\r\n        }\r\n        nextSlide(slides, currentSlide, \"portfolio-item-active\");\r\n        nextSlide(dots, currentSlide, \"dot-active\");\r\n    };\r\n    const startSlide = () => {\r\n        interval = setInterval(autoSlide, 2000);\r\n    };\r\n    const stopSlide = () => {\r\n        clearInterval(interval)\r\n    };\r\n\r\n    sliderBlock.addEventListener('click', (e) => {\r\n        e.preventDefault();\r\n        if (!e.target.matches(\".dot, .portfolio-btn\")) {\r\n            \r\n            return;\r\n        }\r\n        prevSlide(slides, currentSlide, \"portfolio-item-active\");\r\n        prevSlide(dots, currentSlide, \"dot-active\");\r\n        if (e.target.matches('#arrow-right')) {\r\n            currentSlide++;\r\n        } else if (e.target.matches('#arrow-left')) {\r\n            currentSlide--;\r\n        } else if (e.target.classList.contains('dot')) {\r\n            dots.forEach((dot, index) => {\r\n                if (e.target === dot) {\r\n                    currentSlide = index\r\n                }\r\n            })\r\n        }\r\n        if (currentSlide >= slides.length) {\r\n            currentSlide = 0;\r\n        }\r\n        if (currentSlide < 0) {\r\n            currentSlide = slides.length - 1;\r\n        }\r\n        nextSlide(slides, currentSlide, \"portfolio-item-active\");\r\n        nextSlide(dots, currentSlide, \"dot-active\");\r\n    });\r\n    sliderBlock.addEventListener('mouseenter', (e) => {\r\n        if (e.target.matches('.dot, .portfolio-btn')) {\r\n            stopSlide();\r\n        }\r\n    }, true)\r\n\r\n    sliderBlock.addEventListener('mouseleave', (e) => {\r\n        if (e.target.matches('.dot, .portfolio-btn')) {\r\n            startSlide();\r\n        }\r\n    }, true)\r\n    \r\n\r\n\r\n    startSlide();\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\r\n\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\r\n    const tabPanel = document.querySelector(\".service-header\");\r\n    const tabs = document.querySelectorAll(\".service-header-tab \");\r\n    const tabContent = document.querySelectorAll(\".service-tab\");\r\n\r\n    tabPanel.addEventListener(\"click\", (e) => {\r\n        if (e.target.closest(\".service-header-tab\")) {\r\n            const tabBtn = e.target.closest(\".service-header-tab\");\r\n           tabs.forEach((tab, index) => {\r\n                if (tab === tabBtn) {\r\n                    tab.classList.add(\"active\");\r\n                    tabContent[index].classList.remove(\"d-none\");\r\n                } else {\r\n                    tab.classList.remove(\"active\");\r\n                    tabContent[index].classList.add(\"d-none\");\r\n                }\r\n            });\r\n        }\r\n    });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\r\n\n\n//# sourceURL=webpack:///./modules/tabs.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n  const timerHours = document.getElementById(\"timer-hours\");\r\n  const timerMinutes = document.getElementById(\"timer-minutes\");\r\n  const timerSeconds = document.getElementById(\"timer-seconds\");\r\n\r\n  const zero = (elem) => {\r\n    if (elem < 10) {\r\n      return (elem = `0${elem}`);\r\n    } else {\r\n      return elem;\r\n    }\r\n  };\r\n  let dateStop = new Date(deadline).getTime();\r\n  const getTimeRemaining = () => {\r\n    let dateNow = new Date().getTime();\r\n    let timeRemaining = (dateStop - dateNow) / 1000; //кол-во сек. до дедлайна\r\n    let hours = Math.floor(timeRemaining / 60 / 60);\r\n    let minutes = Math.floor((timeRemaining / 60) % 60);\r\n    let seconds = Math.floor(timeRemaining % 60);\r\n    seconds = zero(seconds);\r\n    minutes = zero(minutes);\r\n    hours = zero(hours);\r\n    return { timeRemaining, hours, minutes, seconds };\r\n  };\r\n \r\n  let interval;\r\n  const updateClock = () => {\r\n    let getTime = getTimeRemaining();\r\n    timerHours.textContent = getTime.hours;\r\n    timerMinutes.textContent = getTime.minutes;\r\n    timerSeconds.textContent = getTime.seconds;\r\n    if (getTime.timeRemaining <= 0) {\r\n      clearInterval(interval);\r\n      timerHours.textContent = \"00\";\r\n      timerMinutes.textContent = \"00\";\r\n      timerSeconds.textContent = \"00\";\r\n    }\r\n  };\r\n\r\n  interval = setInterval(updateClock, 1000);\r\n  updateClock();\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\r\n\n\n//# sourceURL=webpack:///./modules/timer.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;