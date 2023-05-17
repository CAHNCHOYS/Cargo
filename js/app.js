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

/***/ "./src/js/actions.js":
/*!***************************!*\
  !*** ./src/js/actions.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n//код js для сайта\r\nwindow.onload = () => {\r\n  //Код бургера-----------------------------------------------\r\n  const headerBurgerIcon = document.querySelector(\".header__burger\");\r\n  const burgerMenu = document.querySelector(\".bottom-menu__menu\");\r\n  if (headerBurgerIcon) {\r\n    headerBurgerIcon.addEventListener(\"click\", function () {\r\n      headerBurgerIcon.classList.toggle(\"_active\");\r\n      document.body.classList.toggle(\"_isLocked\");\r\n      burgerMenu.classList.toggle(\"_active\");\r\n    });\r\n  }\r\n  //---------------------------------------------------------\r\n\r\n  if (document.body.classList.contains(\"_mobile\")) {\r\n    const headerTopArrows = document.querySelectorAll(\".top-menu__arrow\");\r\n    for (const arrow of headerTopArrows) {\r\n      arrow.addEventListener(\"click\", function (e) {\r\n        this.classList.toggle(\"_active\");\r\n        this.closest(\"li\").querySelector(\"ul\").classList.toggle(\"_active\");\r\n      });\r\n    }\r\n  }\r\n\r\n  function squareDigits(num){\r\n     let res = +String(num).split('').map(num=>Number(num)**2).join('');\r\n\r\n     console.log(res);\r\n\r\n\r\n  }\r\n\r\n   \r\n\r\n  squareDigits(422);\r\n\r\n};\r\n\n\n//# sourceURL=webpack://gulp-template/./src/js/actions.js?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_mobile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/mobile.js */ \"./src/js/modules/mobile.js\");\n/* harmony import */ var _modules_webp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/webp.js */ \"./src/js/modules/webp.js\");\n/* harmony import */ var _modules_spollers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/spollers.js */ \"./src/js/modules/spollers.js\");\n/* harmony import */ var _dynamic_adapt_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dynamic-adapt.js */ \"./src/js/dynamic-adapt.js\");\n/* harmony import */ var _sliders_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sliders.js */ \"./src/js/sliders.js\");\n/* harmony import */ var _actions_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actions.js */ \"./src/js/actions.js\");\n//Проверка на устройство----------------------------\r\n\r\nif (_modules_mobile_js__WEBPACK_IMPORTED_MODULE_0__.isMobile.any()) {\r\n  document.body.classList.add(\"_mobile\");\r\n} else {\r\n  document.body.classList.add(\"_pc\");\r\n}\r\n//---------------------------------------------------\r\n//---------------------------------------------------\r\n\r\n(0,_modules_webp_js__WEBPACK_IMPORTED_MODULE_1__.testWebP)(function (support) {\r\n  if (support == true) {\r\n    document.querySelector(\"body\").classList.add(\"webp\");\r\n  } else {\r\n    document.querySelector(\"body\").classList.add(\"no-webp\");\r\n  }\r\n});\r\n\r\n//---------------------------------------------------\r\n\r\n\r\n//Подключение файлов\r\n\r\n/*------------------------------------------------------------------------------Спойлеры js ----------------------------------------------------------------------*/   \r\n \r\n/*------------------------------------------------------------------------------------------------------------------------------------------------------*/\r\n\r\n/*------------------------------------------------------------------------------Табы.js ----------------------------------------------------------------------*/   \r\n//import './modules/tabs.js'; \r\n/*------------------------------------------------------------------------------------------------------------------------------------------------------*/\r\n\r\n/*------------------------------------------------------------------------------ popus.js ----------------------------------------------------------------------*/   \r\n//import './modules/popups.js'; \r\n/*------------------------------------------------------------------------------------------------------------------------------------------------------*/\r\n\r\n\r\n\r\n// Динамический адаптив\r\n\r\n \r\n\r\n\r\n\r\n //js код на сайте\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://gulp-template/./src/js/app.js?");

/***/ }),

/***/ "./src/js/dynamic-adapt.js":
/*!*********************************!*\
  !*** ./src/js/dynamic-adapt.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// Dynamic Adapt v.1\r\n// HTML data-da=\"where(uniq class name),when(breakpoint),position(digi)\"\r\n// e.x. data-da=\".item,992,2\"\r\n// Andrikanych Yevhen 2020\r\n// https://www.youtube.com/c/freelancerlifestyle\r\n\r\n\r\n\r\nfunction DynamicAdapt(type) {\r\n\tthis.type = type;\r\n}\r\n\r\nDynamicAdapt.prototype.init = function () {\r\n\tconst _this = this;\r\n\t// массив объектов\r\n\tthis.оbjects = [];\r\n\tthis.daClassname = \"_dynamic_adapt_\";\r\n\t// массив DOM-элементов\r\n\tthis.nodes = document.querySelectorAll(\"[data-da]\");\r\n\r\n\t// наполнение оbjects объктами\r\n\tfor (let i = 0; i < this.nodes.length; i++) {\r\n\t\tconst node = this.nodes[i];\r\n\t\tconst data = node.dataset.da.trim();\r\n\t\tconst dataArray = data.split(\",\");\r\n\t\tconst оbject = {};\r\n\t\tоbject.element = node;\r\n\t\tоbject.parent = node.parentNode;\r\n\t\tоbject.destination = document.querySelector(dataArray[0].trim());\r\n\t\tоbject.breakpoint = dataArray[1] ? dataArray[1].trim() : \"767\";\r\n\t\tоbject.place = dataArray[2] ? dataArray[2].trim() : \"last\";\r\n\t\tоbject.index = this.indexInParent(оbject.parent, оbject.element);\r\n\t\tthis.оbjects.push(оbject);\r\n\t}\r\n\r\n\tthis.arraySort(this.оbjects);\r\n\r\n\t// массив уникальных медиа-запросов\r\n\tthis.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {\r\n\t\treturn '(' + this.type + \"-width: \" + item.breakpoint + \"px),\" + item.breakpoint;\r\n\t}, this);\r\n\tthis.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {\r\n\t\treturn Array.prototype.indexOf.call(self, item) === index;\r\n\t});\r\n\r\n\t// навешивание слушателя на медиа-запрос\r\n\t// и вызов обработчика при первом запуске\r\n\tfor (let i = 0; i < this.mediaQueries.length; i++) {\r\n\t\tconst media = this.mediaQueries[i];\r\n\t\tconst mediaSplit = String.prototype.split.call(media, ',');\r\n\t\tconst matchMedia = window.matchMedia(mediaSplit[0]);\r\n\t\tconst mediaBreakpoint = mediaSplit[1];\r\n\r\n\t\t// массив объектов с подходящим брейкпоинтом\r\n\t\tconst оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {\r\n\t\t\treturn item.breakpoint === mediaBreakpoint;\r\n\t\t});\r\n\t\tmatchMedia.addListener(function () {\r\n\t\t\t_this.mediaHandler(matchMedia, оbjectsFilter);\r\n\t\t});\r\n\t\tthis.mediaHandler(matchMedia, оbjectsFilter);\r\n\t}\r\n};\r\n\r\nDynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {\r\n\tif (matchMedia.matches) {\r\n\t\tfor (let i = 0; i < оbjects.length; i++) {\r\n\t\t\tconst оbject = оbjects[i];\r\n\t\t\tоbject.index = this.indexInParent(оbject.parent, оbject.element);\r\n\t\t\tthis.moveTo(оbject.place, оbject.element, оbject.destination);\r\n\t\t}\r\n\t} else {\r\n\t\tfor (let i = 0; i < оbjects.length; i++) {\r\n\t\t\tconst оbject = оbjects[i];\r\n\t\t\tif (оbject.element.classList.contains(this.daClassname)) {\r\n\t\t\t\tthis.moveBack(оbject.parent, оbject.element, оbject.index);\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n};\r\n\r\n// Функция перемещения\r\nDynamicAdapt.prototype.moveTo = function (place, element, destination) {\r\n\telement.classList.add(this.daClassname);\r\n\tif (place === 'last' || place >= destination.children.length) {\r\n\t\tdestination.insertAdjacentElement('beforeend', element);\r\n\t\treturn;\r\n\t}\r\n\tif (place === 'first') {\r\n\t\tdestination.insertAdjacentElement('afterbegin', element);\r\n\t\treturn;\r\n\t}\r\n\tdestination.children[place].insertAdjacentElement('beforebegin', element);\r\n}\r\n\r\n// Функция возврата\r\nDynamicAdapt.prototype.moveBack = function (parent, element, index) {\r\n\telement.classList.remove(this.daClassname);\r\n\tif (parent.children[index] !== undefined) {\r\n\t\tparent.children[index].insertAdjacentElement('beforebegin', element);\r\n\t} else {\r\n\t\tparent.insertAdjacentElement('beforeend', element);\r\n\t}\r\n}\r\n\r\n// Функция получения индекса внутри родителя\r\nDynamicAdapt.prototype.indexInParent = function (parent, element) {\r\n\tconst array = Array.prototype.slice.call(parent.children);\r\n\treturn Array.prototype.indexOf.call(array, element);\r\n};\r\n\r\n// Функция сортировки массива по breakpoint и place \r\n// по возрастанию для this.type = min\r\n// по убыванию для this.type = max\r\nDynamicAdapt.prototype.arraySort = function (arr) {\r\n\tif (this.type === \"min\") {\r\n\t\tArray.prototype.sort.call(arr, function (a, b) {\r\n\t\t\tif (a.breakpoint === b.breakpoint) {\r\n\t\t\t\tif (a.place === b.place) {\r\n\t\t\t\t\treturn 0;\r\n\t\t\t\t}\r\n\r\n\t\t\t\tif (a.place === \"first\" || b.place === \"last\") {\r\n\t\t\t\t\treturn -1;\r\n\t\t\t\t}\r\n\r\n\t\t\t\tif (a.place === \"last\" || b.place === \"first\") {\r\n\t\t\t\t\treturn 1;\r\n\t\t\t\t}\r\n\r\n\t\t\t\treturn a.place - b.place;\r\n\t\t\t}\r\n\r\n\t\t\treturn a.breakpoint - b.breakpoint;\r\n\t\t});\r\n\t} else {\r\n\t\tArray.prototype.sort.call(arr, function (a, b) {\r\n\t\t\tif (a.breakpoint === b.breakpoint) {\r\n\t\t\t\tif (a.place === b.place) {\r\n\t\t\t\t\treturn 0;\r\n\t\t\t\t}\r\n\r\n\t\t\t\tif (a.place === \"first\" || b.place === \"last\") {\r\n\t\t\t\t\treturn 1;\r\n\t\t\t\t}\r\n\r\n\t\t\t\tif (a.place === \"last\" || b.place === \"first\") {\r\n\t\t\t\t\treturn -1;\r\n\t\t\t\t}\r\n\r\n\t\t\t\treturn b.place - a.place;\r\n\t\t\t}\r\n\r\n\t\t\treturn b.breakpoint - a.breakpoint;\r\n\t\t});\r\n\t\treturn;\r\n\t}\r\n};\r\n\r\nconst da = new DynamicAdapt(\"max\");\r\nda.init();\n\n//# sourceURL=webpack://gulp-template/./src/js/dynamic-adapt.js?");

/***/ }),

/***/ "./src/js/modules/mobile.js":
/*!**********************************!*\
  !*** ./src/js/modules/mobile.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isMobile\": () => (/* binding */ isMobile)\n/* harmony export */ });\nconst  isMobile = {\r\n    Android: function () {\r\n      return navigator.userAgent.match(/Android/i);\r\n    },\r\n    BlackBerry: function () {\r\n      return navigator.userAgent.match(/BlackBerry/i);\r\n    },\r\n    iOS: function () {\r\n      return navigator.userAgent.match(/iPhone|iPad|iPod/i);\r\n    },\r\n    Opera: function () {\r\n      return navigator.userAgent.match(/Opera Mini/i);\r\n    },\r\n    Windows: function () {\r\n      return navigator.userAgent.match(/IEMobile/i);\r\n    },\r\n    any: function () {\r\n      return (\r\n        isMobile.Android() ||\r\n        isMobile.BlackBerry() ||\r\n        isMobile.iOS() ||\r\n        isMobile.Opera() ||\r\n        isMobile.Windows()\r\n      );\r\n    },\r\n  };\n\n//# sourceURL=webpack://gulp-template/./src/js/modules/mobile.js?");

/***/ }),

/***/ "./src/js/modules/slideDown.js":
/*!*************************************!*\
  !*** ./src/js/modules/slideDown.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"_slideDown\": () => (/* binding */ _slideDown),\n/* harmony export */   \"_slideToggle\": () => (/* binding */ _slideToggle),\n/* harmony export */   \"_slideUp\": () => (/* binding */ _slideUp)\n/* harmony export */ });\nlet _slideUp = (target, duration) => {\r\n   if (!target.classList.contains(\"_slide\")) {\r\n     target.classList.add(\"_slide\");\r\n     target.style.transitionProperty = \"height, margin, padding\"; /* [1.1] */\r\n     target.style.transitionDuration = duration + \"ms\"; /* [1.2] */\r\n \r\n     target.style.height = target.offsetHeight + \"px\"; /* [3] */\r\n     target.offsetHeight;\r\n     target.style.overflow = \"hidden\"; /* [7] */\r\n     target.style.height = 0; /* [4] */\r\n     target.style.paddingTop = 0; /* [5.1] */\r\n     target.style.paddingBottom = 0; /* [5.2] */\r\n     target.style.marginTop = 0; /* [6.1] */\r\n     target.style.marginBottom = 0; /* [7.2] */\r\n \r\n     window.setTimeout(() => {\r\n       target.style.display = \"none\"; /* [8] */\r\n       target.style.removeProperty(\"height\"); /* [9] */\r\n       target.style.removeProperty(\"padding-top\"); /* [10.1] */\r\n       target.style.removeProperty(\"padding-bottom\"); /* [10.2] */\r\n       target.style.removeProperty(\"margin-top\"); /* [11.1] */\r\n       target.style.removeProperty(\"margin-bottom\"); /* [11.2] */\r\n       target.style.removeProperty(\"overflow\"); /* [12] */\r\n       target.style.removeProperty(\"transition-duration\"); /* [13.1] */\r\n       target.style.removeProperty(\"transition-property\"); /* [13.2] */\r\n       target.classList.remove(\"_slide\");\r\n     }, duration);\r\n   }\r\n };\r\n \r\n let _slideDown = (target, duration) => {\r\n   if (!target.classList.contains(\"_slide\")) {\r\n     target.classList.add(\"_slide\");\r\n     target.style.removeProperty(\"display\"); /* [1] */\r\n     let display = window.getComputedStyle(target).display;\r\n     if (display === \"none\") {\r\n       /* [2] */\r\n       display = \"block\";\r\n     }\r\n     target.style.display = display;\r\n     let height = target.offsetHeight; /* [3] */\r\n     target.style.overflow = \"hidden\"; /* [7] */\r\n     target.style.height = 0; /* [4] */\r\n     target.style.paddingTop = 0; /* [5.1] */\r\n     target.style.paddingBottom = 0; /* [5.2] */\r\n     target.style.marginTop = 0; /* [6.1] */\r\n     target.style.marginBottom = 0; /* [6.2] */\r\n     target.offsetHeight;\r\n \r\n     target.style.transitionProperty = \"height, margin, padding\"; /* [9.1] */\r\n     target.style.transitionDuration = duration + \"ms\"; /* [9.2] */\r\n     target.style.height = height + \"px\"; /* [10] */\r\n     target.style.removeProperty(\"padding-top\"); /* [11.1] */\r\n     target.style.removeProperty(\"padding-bottom\"); /* [11.2] */\r\n     target.style.removeProperty(\"margin-top\"); /* [12.1] */\r\n     target.style.removeProperty(\"margin-bottom\"); /* [12.2] */\r\n     window.setTimeout(() => {\r\n       target.style.removeProperty(\"height\"); /* [13] */\r\n       target.style.removeProperty(\"overflow\"); /* [14] */\r\n       target.style.removeProperty(\"transition-duration\"); /* [15.1] */\r\n       target.style.removeProperty(\"transition-property\"); /* [15.2] */\r\n       target.classList.remove(\"_slide\");\r\n     }, duration);\r\n   }\r\n };\r\n \r\n let _slideToggle = (target, duration = 500) => {\r\n   if (window.getComputedStyle(target).display === \"none\") {\r\n     return _slideDown(target, duration);\r\n   } else {\r\n     return _slideUp(target, duration);\r\n   }\r\n };\n\n//# sourceURL=webpack://gulp-template/./src/js/modules/slideDown.js?");

/***/ }),

/***/ "./src/js/modules/spollers.js":
/*!************************************!*\
  !*** ./src/js/modules/spollers.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _slideDown_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slideDown.js */ \"./src/js/modules/slideDown.js\");\n//Работа со спойлерами\r\n//У родителей спойлеров добавляем атрибут data-spollers \r\n//Если хотим чтобы работал на экранах ниже или больше опр. значения то пишем в атрибуте число и ,min max соответсвтенно \r\n// data-spollers=\"800,max\" - работает на экранах меньше 800 px\r\n//Если должен работать всегда то оставляем пустым : data-spollers\r\n//Если должен открываться одновременно только один спойлер то добавляем атрибут data-one-spoller\r\n//Перед элементов который должен что-то открывать или закрвать добавляем элемент:\r\n//  <button tabindex=\"-1\" class=\"spollers__spoller\" data-spoller>Max spoller</button>\r\n// И после него само тело спойлера \r\n\r\n\r\n\r\n\r\n\r\nconst spollersArray = document.querySelectorAll(\"[data-spollers]\");\r\nif (spollersArray.length > 0) {\r\n  const regularSpollers = Array.from(spollersArray).filter((spoller) => {\r\n    return !spoller.dataset.spollers.split(\",\")[0];\r\n  });\r\n\r\n  if (regularSpollers.length > 0) {\r\n    initSpollers(regularSpollers);\r\n  }\r\n\r\n  const mediaSpollers = Array.from(spollersArray).filter((spoller) => {\r\n    return spoller.dataset.spollers.split(\",\")[0];\r\n  });\r\n\r\n  if (mediaSpollers.length > 0) {\r\n    const breakPoints = [];\r\n    mediaSpollers.forEach((spoller) => {\r\n      const params = spoller.dataset.spollers;\r\n    \r\n      const breakpoint = {};\r\n      const paramsArray = params.split(\",\");\r\n      breakpoint.value = paramsArray[0];\r\n      breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : \"max\";\r\n      breakpoint.item = spoller;\r\n      breakPoints.push(breakpoint);\r\n    });\r\n\r\n    let mediaQueries = breakPoints.map(function (item) {\r\n      return (\r\n        \"(\" +\r\n        item.type +\r\n        \"-width: \" +\r\n        item.value +\r\n        \"px),\" +\r\n        item.value +\r\n        \",\" +\r\n        item.type\r\n      );\r\n    });\r\n\r\n    mediaQueries = mediaQueries.filter((item, index, self) => {\r\n      return self.indexOf(item) === index;\r\n    });\r\n\r\n    mediaQueries.forEach((breakpoint) => {\r\n      const paramsArray = breakpoint.split(\",\");\r\n      const mediaBreakpoint = paramsArray[1];\r\n      const mediaType = paramsArray[2];\r\n      const matchMedia = window.matchMedia(paramsArray[0]);\r\n\r\n      const spollersArray = breakPoints.filter((item) => {\r\n        if(item.value === mediaBreakpoint && item.type === mediaType)\r\n         return true;\r\n      });\r\n       \r\n      matchMedia.addListener(function () {\r\n        initSpollers(spollersArray, matchMedia);\r\n      });\r\n\r\n      initSpollers(spollersArray, matchMedia);\r\n    });\r\n\r\n  }\r\n\r\n  function initSpollers(spollersArray, matchMedia = false) {\r\n    spollersArray.forEach((spollersBlock) => {\r\n    \r\n      spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;\r\n      if (matchMedia.matches || !matchMedia) {\r\n        spollersBlock.classList.add(\"_init\");\r\n        initSpollersBody(spollersBlock);\r\n        spollersBlock.addEventListener(\"click\", setSpollerAction);\r\n      } else {\r\n       \r\n        spollersBlock.classList.remove(\"_init\");\r\n        initSpollersBody(spollersBlock, false);\r\n        spollersBlock.removeEventListener(\"click\", setSpollerAction);\r\n      }\r\n    });\r\n  }\r\n\r\n  function initSpollersBody(spollersBlock, hideSpollerBody = true) {\r\n    const blockSpollers = spollersBlock.querySelectorAll(\"[data-spoller]\");\r\n    if (blockSpollers.length > 0) {\r\n      blockSpollers.forEach((spoller) => {\r\n        if (hideSpollerBody) {\r\n          spoller.removeAttribute(\"tabindex\");\r\n          if (!spoller.classList.contains(\"_active\")) {\r\n            spoller.nextElementSibling.hidden = true;\r\n          }\r\n        } else {\r\n          spoller.setAttribute(\"tabindex\", \"-1\");\r\n          spoller.nextElementSibling.hidden = false;\r\n        }\r\n      });\r\n    }\r\n  }\r\n\r\n  function setSpollerAction(e) {\r\n    const el = e.target;\r\n\r\n    if (el.hasAttribute(\"data-spoller\") || el.closest(\"[data-spoller]\")) {\r\n      const spollerTitle = el.hasAttribute(\"data-spoller\")\r\n        ? el\r\n        : el.closest(\"[data-spoller]\");\r\n      const spollersBlock = spollerTitle.closest(\"[data-spollers]\");\r\n      const oneSpoller = spollersBlock.hasAttribute(\"data-one-spoller\")\r\n        ? true\r\n        : false;\r\n\r\n      if (!spollersBlock.querySelectorAll(\"._slide\").length) {\r\n        if (oneSpoller && !spollerTitle.classList.contains(\"_active\")) {\r\n          hideSpollerBody(spollersBlock);\r\n\r\n        }\r\n        spollerTitle.classList.toggle('_active');\r\n        (0,_slideDown_js__WEBPACK_IMPORTED_MODULE_0__._slideToggle)(spollerTitle.nextElementSibling,800);\r\n      }\r\n      e.preventDefault();\r\n    }\r\n  }\r\n\r\n  function hideSpollerBody(spollerBlock) {\r\n    const spollerActiveTitle = spollerBlock.querySelector('[data-spoller]._active');\r\n    if(spollerActiveTitle) {\r\n      spollerActiveTitle.classList.remove('_active');\r\n      (0,_slideDown_js__WEBPACK_IMPORTED_MODULE_0__._slideUp)(spollerActiveTitle.nextElementSibling,800);\r\n    }\r\n\r\n  }\r\n\r\n\r\n}\r\n\n\n//# sourceURL=webpack://gulp-template/./src/js/modules/spollers.js?");

/***/ }),

/***/ "./src/js/modules/webp.js":
/*!********************************!*\
  !*** ./src/js/modules/webp.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"testWebP\": () => (/* binding */ testWebP)\n/* harmony export */ });\nfunction testWebP(callback) {\r\n    var webP = new Image();\r\n    webP.onload = webP.onerror = function () {\r\n      callback(webP.height == 2);\r\n    };\r\n    webP.src =\r\n      \"data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA\";\r\n  }\r\n  \n\n//# sourceURL=webpack://gulp-template/./src/js/modules/webp.js?");

/***/ }),

/***/ "./src/js/sliders.js":
/*!***************************!*\
  !*** ./src/js/sliders.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n//заготавка под свайпер и объявление и адаптация слайдеров ==============\r\nlet sliders = document.querySelectorAll(\"._swiper\");\r\nif (sliders.length > 0) {\r\n  for (let index = 0; index < sliders.length; index++) {\r\n    let slider = sliders[index];\r\n    if (!slider.classList.contains(\"swiper-bild\")) {\r\n      let sliderItems = slider.children;\r\n\r\n      if (sliderItems.length > 0) {\r\n        for (const child of sliderItems) {\r\n          child.classList.add(\"swiper-slide\");\r\n        }\r\n      }\r\n\r\n      let slider_content = slider.innerHTML;\r\n      let SwiperWrapper = document.createElement(\"div\");\r\n      SwiperWrapper.classList.add(\"swiper-wrapper\");\r\n      SwiperWrapper.innerHTML = slider_content;\r\n      slider.innerHTML = \"\";\r\n      slider.appendChild(SwiperWrapper);\r\n      slider.classList.add(\"swiper-bild\");\r\n\r\n      let btnPrev = document.createElement(\"div\");\r\n      btnPrev.className = \"swiper-button-prev\";\r\n      slider.appendChild(btnPrev);\r\n      let btnNext = document.createElement(\"div\");\r\n      btnNext.className = \"swiper-button-next\";\r\n      slider.appendChild(btnNext);\r\n\r\n      if (slider.classList.contains(\"_swiper_scroll\")) {\r\n        let sliderScroll = document.createElement(\"div\");\r\n        sliderScroll.classList.add(\"swiper-scrollbar\");\r\n        slider.appendChild(sliderScroll);\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\nif (document.querySelector(\".fullscreen__body\")) {\r\n  new Swiper(\".fullscreen__body\", {\r\n    //Отстутпы между слайдами\r\n    spaceBetween: 0,\r\n    //Слайды на пролисьывание (сколько будет листаться)\r\n    slidesPerGroup: 1,\r\n    //Сколько слайдов будет видно\r\n    slidesPerView: 1,\r\n\r\n    // centeredSlides:true\r\n    speed: 600,\r\n    //Возможные варианты:flip slide cube coverflow fade\r\n    effect: \"slide\",\r\n    loop: false,\r\n    navigation: {\r\n      nextEl: \".swiper-button-next\",\r\n      prevEl: \".swiper-button-prev\",\r\n    },\r\n    //Точки буллиты\r\n    pagination: {\r\n      el: \".fullscreen__slider-bullets\",\r\n      clickable: true,\r\n    },\r\n    grabCursor: false,\r\n    keyboard: {\r\n      // Включаем управление клавиатурой\r\n      enabled: true,\r\n      //Только при поле зрения\r\n      onlyInViewport: true,\r\n      pageUpDown: true,\r\n    },\r\n    autoHeight: true,\r\n    breakpoints: {\r\n      0: {},\r\n      1370: {},\r\n    },\r\n\r\n    observer: true,\r\n  });\r\n}\r\n\r\n\r\nif (document.querySelector(\".gallery__slider\")) {\r\n  new Swiper(\".gallery__slider\", {\r\n    //Отстутпы между слайдами\r\n    spaceBetween: 30,\r\n    //Слайды на пролисьывание (сколько будет листаться)\r\n    slidesPerGroup: 1,\r\n    //Сколько слайдов будет видно\r\n    slidesPerView: 3,\r\n\r\n    // centeredSlides:true\r\n    speed: 600,\r\n    //Возможные варианты:flip slide cube coverflow fade\r\n    effect: \"slide\",\r\n    loop: true,\r\n    navigation: {\r\n      nextEl: \".gallery__slider-control.icon-arrow-right\",\r\n      prevEl: \".gallery__slider-control.icon-arrow-left\",\r\n    },\r\n    //Точки буллиты\r\n    // pagination: {\r\n    //   el: \".fullscreen__slider-bullets\",\r\n    //   clickable: true,\r\n    // },\r\n    grabCursor: false,\r\n    keyboard: {\r\n      // Включаем управление клавиатурой\r\n      enabled: true,\r\n      //Только при поле зрения\r\n      onlyInViewport: true,\r\n      pageUpDown: true,\r\n    },\r\n    autoHeight: true,\r\n    breakpoints: {\r\n      0: {\r\n        slidesPerView: 1,\r\n      },\r\n      479.98: {\r\n        slidesPerView: 2,\r\n        spaceBetween: 20,\r\n      },\r\n      767.98: {\r\n        slidesPerView: 3,\r\n        spaceBetween: 30,\r\n      },\r\n     \r\n    },\r\n\r\n    observer: true,\r\n  });\r\n}\r\nfunction slide_Bind_content(params) {}\r\n\r\n//=============================================================\r\n\n\n//# sourceURL=webpack://gulp-template/./src/js/sliders.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;