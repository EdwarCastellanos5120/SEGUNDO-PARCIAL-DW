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

/***/ "./module/passwordGen.js":
/*!*******************************!*\
  !*** ./module/passwordGen.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/*\r\nCrea un módulo que genere contraseñas aleatorias basadas en las preferencias \r\ndel usuario, como longitud y tipos de caracteres (letras, números, símbolos, etc.). \r\nImporta este módulo en una página HTML y permite que los usuarios generen \r\ncontraseñas personalizadas.\r\n*/\r\n\r\nconst generarClave = (longitud, incluirLetras, incluirNumeros, incluirSimbolos) => {\r\n    const letras = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';\r\n    const numeros = '0123456789';\r\n    const simbolos = '!@#$%^&*()_+[]{}|;:,.<>?';\r\n    let caracteresPermitidos = '';\r\n    if (incluirLetras) caracteresPermitidos += letras;\r\n    if (incluirNumeros) caracteresPermitidos += numeros;\r\n    if (incluirSimbolos) caracteresPermitidos += simbolos;\r\n    if (caracteresPermitidos === '') {\r\n      return 'Debes seleccionar al menos un tipo de caracter.';\r\n    }\r\n    let contraseñaGenerada = '';\r\n    for (let i = 0; i < longitud; i++) {\r\n      const caracterAleatorio = caracteresPermitidos[Math.floor(Math.random() * caracteresPermitidos.length)];\r\n      contraseñaGenerada += caracterAleatorio;\r\n    }\r\n    return contraseñaGenerada;\r\n  };\r\n  \r\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generarClave);\n\n//# sourceURL=webpack://segundo-parcial-dw/./module/passwordGen.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./module/passwordGen.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;