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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer.js */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu.js */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal.js */ \"./modules/modal.js\");\n/* harmony import */ var _modules_scroll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/scroll.js */ \"./modules/scroll.js\");\n/* harmony import */ var _modules_validateForm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/validateForm.js */ \"./modules/validateForm.js\");\n/* harmony import */ var _modules_calculator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/calculator.js */ \"./modules/calculator.js\");\n/* harmony import */ var _modules_tabs_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/tabs.js */ \"./modules/tabs.js\");\n/* harmony import */ var _modules_slider_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/slider.js */ \"./modules/slider.js\");\n/* harmony import */ var _modules_sendForm_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/sendForm.js */ \"./modules/sendForm.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"15 may 2024\");\r\n(0,_modules_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_scroll_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_validateForm_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_calculator_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(100);\r\n(0,_modules_tabs_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n(0,_modules_slider_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\r\n(0,_modules_sendForm_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({formId: 'form1', someElem: [\r\n    {\r\n        type: 'block',\r\n        id: 'total'\r\n    }\r\n]});\r\n(0,_modules_sendForm_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({formId: 'form2', someElem: [\r\n    {\r\n        type: 'block',\r\n        id: 'total'\r\n    }\r\n]});\r\n(0,_modules_sendForm_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({formId: 'form3', someElem: [\r\n    {\r\n        type: 'block',\r\n        id: 'total'\r\n    }\r\n]});\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calculator.js":
/*!*******************************!*\
  !*** ./modules/calculator.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\nconst calculator = (price = 100) => {\r\n  const calcBlock = document.querySelector(\".calc-block\");\r\n  const calcType = document.querySelector(\".calc-type\");\r\n  const calcSquare = document.querySelector(\".calc-square\");\r\n  const calcCount = document.querySelector(\".calc-count\");\r\n  const calcDay = document.querySelector(\".calc-day\");\r\n  const total = document.getElementById(\"total\");\r\n  const calcInputs = document.querySelectorAll(\"input.calc-item\");\r\n\r\n  calcInputs.forEach((item) => {\r\n    item.addEventListener(\"input\", (e) => {\r\n      e.target.value = e.target.value.replace(/\\D+/g, \"\");\r\n    });\r\n  });\r\n\r\n  const countCalc = () => {\r\n    const calcTypeValue = +calcType.options[calcType.selectedIndex].value;\r\n    const calcSquareValue = calcSquare.value;\r\n    let totalValue = 0;\r\n    let calcCountValue = 1;\r\n    let calcDayValue = 1;\r\n\r\n    if (calcCount.value > 1) {\r\n      calcCountValue += +calcCount.value / 10;\r\n    }\r\n    if (calcDay.value && calcDay.value < 5) {\r\n      calcDayValue = 2;\r\n    } else if (calcDay.value && calcDay.value < 10) {\r\n      calcDayValue = 1.5;\r\n    }\r\n    if (calcTypeValue && calcSquareValue) {\r\n      totalValue =\r\n        price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;\r\n    } else {\r\n      totalValue = 0;\r\n    }\r\n    if (totalValue !== 0) {\r\n      (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n        duration: 1000,\r\n        timing(timeFraction) {\r\n            return timeFraction;\r\n        },\r\n        draw(progress) {\r\n            \r\n            total.textContent = +total.textContent + Math.round(progress * (totalValue - total.textContent));\r\n        }\r\n    });\r\n  \r\n    }\r\n  };\r\n\r\n  calcBlock.addEventListener(\"input\", (e) => {\r\n    if (\r\n      e.target === calcType ||\r\n      e.target === calcSquare ||\r\n      e.target === calcCount ||\r\n      e.target === calcDay\r\n    ) {\r\n      countCalc();\r\n    }\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculator);\r\n\n\n//# sourceURL=webpack:///./modules/calculator.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   animate: () => (/* binding */ animate)\n/* harmony export */ });\n\r\n    const animate = ({timing, draw, duration}) => {\r\n\r\n        let start = performance.now();\r\n      \r\n        requestAnimationFrame(function animate(time) {\r\n          // timeFraction изменяется от 0 до 1\r\n          let timeFraction = (time - start) / duration;\r\n          if (timeFraction > 1) timeFraction = 1;\r\n      \r\n          // вычисление текущего состояния анимации\r\n          let progress = timing(timeFraction);\r\n      \r\n          draw(progress); // отрисовать её\r\n      \r\n          if (timeFraction < 1) {\r\n            requestAnimationFrame(animate);\r\n          }\r\n      \r\n        });\r\n    }\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./modules/helpers.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\nconst modal = () => {\r\n    const buttons = document.querySelectorAll('.popup-btn');\r\n    const modal = document.querySelector('.popup');\r\n    const mediaQuery = window.matchMedia('(min-width: 768px)');\r\n    let count = 0;\r\n\r\n    if (mediaQuery.matches) {\r\n        const animatePopup = () => {\r\n            (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                duration: 1000,\r\n                timing(timeFraction) {\r\n                    return timeFraction;\r\n                },\r\n                draw() {\r\n                    modal.style.display = 'block';\r\n                    if (count < 100) {\r\n                        modal.style.opacity = count + '%';\r\n                        count += 5;\r\n                    }\r\n                }\r\n            });\r\n        }\r\n        const unPopup = () => {\r\n            ;(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                duration: 1000,\r\n                timing(timeFraction) {\r\n                    return timeFraction;\r\n                },\r\n                draw() {\r\n                    if (count > 0) {\r\n                        modal.style.opacity = count + '%';\r\n                        count -= 5;\r\n                    } else {\r\n                        modal.style.display = 'none';\r\n                    }\r\n                }\r\n            });\r\n        }\r\n        buttons.forEach(btn => {\r\n            btn.addEventListener(\"click\", animatePopup);\r\n        });\r\n        modal.addEventListener('click', (e) => {\r\n            if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {\r\n                unPopup()\r\n            }\r\n        });\r\n    } else {\r\n        buttons.forEach(btn => {\r\n            btn.addEventListener('click', () => {\r\n                modal.style.display = 'block';\r\n            });\r\n        });\r\n        modal.addEventListener('click', (e) => {\r\n            if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {\r\n                modal.style.display = 'none';\r\n            }\r\n        });\r\n    }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/scroll.js":
/*!***************************!*\
  !*** ./modules/scroll.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scroll = () => {\r\n  const menu = document.querySelector(\"menu\");\r\n  const links = menu.querySelectorAll(\"ul>li>a\");\r\n  const mainBtn = document.querySelector(\"main>a\");\r\n  const allLinks = [...links, mainBtn];\r\n\r\n  allLinks.forEach((link) => {\r\n    link.addEventListener(\"click\", (event) => {\r\n      event.preventDefault();\r\n      const id = link.getAttribute(\"href\").substring(1);\r\n      const section = document.getElementById(id);\r\n\r\n      if (section) {\r\n        section.scrollIntoView({ behavior: \"smooth\", block: \"start\" });\r\n      }\r\n    });\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);\r\n\n\n//# sourceURL=webpack:///./modules/scroll.js?");

/***/ }),

/***/ "./modules/sendForm.js":
/*!*****************************!*\
  !*** ./modules/sendForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sendForm = ({ formId, someElem = [] }) => {\r\n  const form = document.getElementById(formId);\r\n  const statusBlock = document.createElement(\"div\");\r\n\r\n  const showStatus = (status) => {\r\n    const img = document.createElement(\"img\");\r\n    const statusList = {\r\n      load: {\r\n        message: `<span style=\"color:white\"></span>`,\r\n        img: \"./images/message/loading.gif\",\r\n      },\r\n      error: {\r\n        message: `<span style=\"color:white;padding-left: 10px\">Ошибка...</span>`,\r\n        img: \"./images/message/Err.png\",\r\n      },\r\n      success: {\r\n        message:`<span style=\"color:white;padding-left: 10px\">Спасибо! Наш менеджер свяжется с Вами</span>`,\r\n        img: \"./images/message/OK.png\",\r\n      },\r\n    };\r\n\r\n    statusBlock.innerHTML = statusList[status].message;\r\n    img.src = statusList[status].img;\r\n    img.height = 30;\r\n    statusBlock.append(img, statusBlock.firstChild);\r\n  };\r\n\r\n  const validate = (list) => {\r\n    let success = true;\r\n    return success;\r\n  };\r\n  const submitForm = () => {\r\n    const formData = new FormData(form);\r\n    const formBody = {};\r\n    const formElements = form.querySelectorAll(\"input\");\r\n\r\n    showStatus(\"load\");\r\n    form.append(statusBlock);\r\n\r\n    const sendData = (data) => {\r\n      return fetch(\"https://jsonplaceholder.typicode.com/posts\", {\r\n        method: \"POST\",\r\n        body: JSON.stringify(data),\r\n        headers: { \"Content-Type\": \"application/json\" },\r\n      }).then((res) => res.json());\r\n    };\r\n\r\n    formData.forEach((val, key) => {\r\n      formBody[key] = val;\r\n    });\r\n    someElem.forEach((elem) => {\r\n      const element = document.getElementById(elem.id);\r\n\r\n      if (elem.type === \"block\") {\r\n        formBody[elem.id] = element.textContent;\r\n      } else if (elem.type === \"input\") {\r\n        formBody[elem.id] = element.input;\r\n      }\r\n    });\r\n\r\n    if (validate(formElements)) {\r\n      sendData(formBody)\r\n        .then((data) => {\r\n          showStatus(\"success\");\r\n          formElements.forEach((input) => {\r\n            input.value = \"\";\r\n          });\r\n        })\r\n        .catch((error) => {\r\n          showStatus(\"error\");\r\n        });\r\n    } else {\r\n      alert(\"Данные не валидны\");\r\n    }\r\n  };\r\n  try {\r\n    if (!form) {\r\n      throw new Error(\"Верните форму на место, пожалуйста!\");\r\n    }\r\n    form.addEventListener(\"submit\", (e) => {\r\n      e.preventDefault();\r\n      submitForm();\r\n    });\r\n  } catch (error) {\r\n    console.log(error.message);\r\n  }\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\r\n\n\n//# sourceURL=webpack:///./modules/sendForm.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\r\n    const sliderBlock = document.querySelector(\".portfolio-content\");\r\n    const slides = document.querySelectorAll(\".portfolio-item\");\r\n    const dotsBlock = document.querySelector(\".portfolio-dots\");\r\n\r\n    let currentSlide = 0;\r\n    let interval;\r\n    slides.forEach(() => {\r\n        dotsBlock.insertAdjacentHTML(\"beforeend\", `<li class=\"dot\"></li>`);\r\n    });\r\n    const dots = document.querySelectorAll(\".dot\");\r\n    const prevSlide = (elems, index, strClass) => {\r\n        elems[index].classList.remove(strClass);\r\n    };\r\n    const nextSlide = (elems, index, strClass) => {\r\n        elems[index].classList.add(strClass);\r\n    };\r\n    const autoSlide = () => {\r\n        prevSlide(slides, currentSlide, \"portfolio-item-active\");\r\n        prevSlide(dots, currentSlide, \"dot-active\");\r\n        currentSlide++;\r\n        if (currentSlide >= slides.length) {\r\n            currentSlide = 0;\r\n        }\r\n        nextSlide(slides, currentSlide, \"portfolio-item-active\");\r\n        nextSlide(dots, currentSlide, \"dot-active\");\r\n    };\r\n    const startSlide = () => {\r\n        interval = setInterval(autoSlide, 2000);\r\n    };\r\n    const stopSlide = () => {\r\n        clearInterval(interval)\r\n    };\r\n\r\n    sliderBlock.addEventListener('click', (e) => {\r\n        e.preventDefault();\r\n        if (!e.target.matches(\".dot, .portfolio-btn\")) {\r\n\r\n            return;\r\n        }\r\n        prevSlide(slides, currentSlide, \"portfolio-item-active\");\r\n        prevSlide(dots, currentSlide, \"dot-active\");\r\n        if (e.target.matches('#arrow-right')) {\r\n            currentSlide++;\r\n        } else if (e.target.matches('#arrow-left')) {\r\n            currentSlide--;\r\n        } else if (e.target.classList.contains('dot')) {\r\n            dots.forEach((dot, index) => {\r\n                if (e.target === dot) {\r\n                    currentSlide = index\r\n                }\r\n            })\r\n        }\r\n        if (currentSlide >= slides.length) {\r\n            currentSlide = 0;\r\n        }\r\n        if (currentSlide < 0) {\r\n            currentSlide = slides.length - 1;\r\n        }\r\n        nextSlide(slides, currentSlide, \"portfolio-item-active\");\r\n        nextSlide(dots, currentSlide, \"dot-active\");\r\n    });\r\n    sliderBlock.addEventListener('mouseenter', (e) => {\r\n        if (e.target.matches('.dot,.portfolio-btn')) {\r\n            stopSlide();\r\n        }\r\n    }, true)\r\n\r\n    sliderBlock.addEventListener('mouseleave', (e) => {\r\n        if (e.target.matches('.dot,.portfolio-btn')) {\r\n            startSlide();\r\n        }\r\n    }, true)\r\n\r\n\r\n\r\n    startSlide();\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\r\n\n\n//# sourceURL=webpack:///./modules/slider.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n  const timerHours = document.getElementById(\"timer-hours\");\r\n  const timerMinutes = document.getElementById(\"timer-minutes\");\r\n  const timerSeconds = document.getElementById(\"timer-seconds\");\r\n\r\n  const  padZero = (elem) => {\r\n    if (elem < 10) {\r\n      return (elem = `0${elem}`);\r\n    } else {\r\n      return elem;\r\n    }\r\n  };\r\n  let dateStop = new Date(deadline).getTime();\r\n  const getTimeRemaining = () => {\r\n    let dateNow = new Date().getTime();\r\n    let timeRemaining = (dateStop - dateNow) / 1000; //кол-во сек. до дедлайна\r\n    let hours = Math.floor(timeRemaining / 60 / 60);\r\n    let minutes = Math.floor((timeRemaining / 60) % 60);\r\n    let seconds = Math.floor(timeRemaining % 60);\r\n    seconds =  padZero(seconds);\r\n    minutes =  padZero(minutes);\r\n    hours =  padZero(hours);\r\n    return { timeRemaining, hours, minutes, seconds };\r\n  };\r\n \r\n  let interval;\r\n  const updateClock = () => {\r\n    let getTime = getTimeRemaining();\r\n    timerHours.textContent = getTime.hours;\r\n    timerMinutes.textContent = getTime.minutes;\r\n    timerSeconds.textContent = getTime.seconds;\r\n    if (getTime.timeRemaining <= 0) {\r\n      clearInterval(interval);\r\n      timerHours.textContent = \"00\";\r\n      timerMinutes.textContent = \"00\";\r\n      timerSeconds.textContent = \"00\";\r\n    }\r\n  };\r\n\r\n  interval = setInterval(updateClock, 1000);\r\n  updateClock();\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\r\n\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ }),

/***/ "./modules/validateForm.js":
/*!*********************************!*\
  !*** ./modules/validateForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validateForm = () => {\r\n    const textInputs = document.querySelectorAll('input[Placeholder=\"Ваше имя\"]');\r\n    const textArea = document.querySelector('input[Placeholder=\"Ваше сообщение\"]');\r\n    const emailInputs = document.querySelectorAll('input[Type=\"email\"]');\r\n    const telInputs = document.querySelectorAll('input[Type=\"tel\"]');\r\n\r\n    textInputs.forEach((item) => {\r\n        item.addEventListener(\"input\", (e) => {\r\n            e.target.value = e.target.value.replace(/[^а-яА-Я -]/g, \"\");\r\n        });\r\n    });\r\n    textArea.addEventListener(\"input\", (e) => {\r\n        e.target.value = e.target.value.replace(/[^а-яА-Я0-9 .,! -]/g, \"\");\r\n    });\r\n    emailInputs.forEach((item) => {\r\n        item.addEventListener(\"input\", (e) => {\r\n            e.target.value = e.target.value.replace(/[^0-9a-zA-Z@-_.!~*']/g, \"\");\r\n        });\r\n    });\r\n    telInputs.forEach((item) => {\r\n        item.addEventListener(\"input\", (e) => {\r\n            e.target.value = e.target.value.replace(/[^0-9()+]/g, \"\");\r\n        });\r\n    });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validateForm);\r\n\n\n//# sourceURL=webpack:///./modules/validateForm.js?");

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