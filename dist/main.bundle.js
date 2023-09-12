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

/***/ "./module/aggregator.js":
/*!******************************!*\
  !*** ./module/aggregator.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   agregarTarea: () => (/* reexport safe */ _taskList_js__WEBPACK_IMPORTED_MODULE_1__.agregarTarea),\n/* harmony export */   cargarImagen: () => (/* reexport safe */ _imgViewer_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n/* harmony export */   completarTarea: () => (/* reexport safe */ _taskList_js__WEBPACK_IMPORTED_MODULE_1__.completarTarea),\n/* harmony export */   convertir: () => (/* reexport safe */ _unitConvert_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n/* harmony export */   dividir: () => (/* reexport safe */ _calculos_js__WEBPACK_IMPORTED_MODULE_0__.dividir),\n/* harmony export */   generarClave: () => (/* reexport safe */ _passwordGen_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n/* harmony export */   mostrarTareas: () => (/* reexport safe */ _taskList_js__WEBPACK_IMPORTED_MODULE_1__.mostrarTareas),\n/* harmony export */   multiplicar: () => (/* reexport safe */ _calculos_js__WEBPACK_IMPORTED_MODULE_0__.multiplicar),\n/* harmony export */   restar: () => (/* reexport safe */ _calculos_js__WEBPACK_IMPORTED_MODULE_0__.restar),\n/* harmony export */   sumar: () => (/* reexport safe */ _calculos_js__WEBPACK_IMPORTED_MODULE_0__.sumar)\n/* harmony export */ });\n/* harmony import */ var _calculos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculos.js */ \"./module/calculos.js\");\n/* harmony import */ var _taskList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskList.js */ \"./module/taskList.js\");\n/* harmony import */ var _unitConvert_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unitConvert.js */ \"./module/unitConvert.js\");\n/* harmony import */ var _passwordGen_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./passwordGen.js */ \"./module/passwordGen.js\");\n/* harmony import */ var _imgViewer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./imgViewer.js */ \"./module/imgViewer.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://segundo-parcial-dw/./module/aggregator.js?");

/***/ }),

/***/ "./module/calculos.js":
/*!****************************!*\
  !*** ./module/calculos.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   dividir: () => (/* binding */ dividir),\n/* harmony export */   multiplicar: () => (/* binding */ multiplicar),\n/* harmony export */   restar: () => (/* binding */ restar),\n/* harmony export */   sumar: () => (/* binding */ sumar)\n/* harmony export */ });\n/*\r\nCrea un módulo que contenga funciones para sumar, restar, multiplicar y dividir \r\ndos números. Luego, en un archivo HTML, importa este módulo y utiliza estas \r\nfunciones para realizar operaciones matemáticas básicas con dos números \r\ningresados por el usuario.\r\n*/\r\n\r\nconst sumar = (a, b) =>  a + b;\r\n\r\nconst restar = (a, b) => a - b;\r\n\r\nconst multiplicar = (a, b) => a * b;\r\n\r\nconst dividir = (a, b) => a / b;\r\n\r\n\r\n\n\n//# sourceURL=webpack://segundo-parcial-dw/./module/calculos.js?");

/***/ }),

/***/ "./module/imgViewer.js":
/*!*****************************!*\
  !*** ./module/imgViewer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/*\r\nCrea un módulo que administre una galería de imágenes. \r\nEl módulo debe permitir cargar y mostrar imágenes en una página HTML. \r\nImporta este módulo y crea una galería de imágenes simple donde los usuarios \r\npuedan cargar y ver imágenes.\r\n*/\r\n\r\nconst cargarImagen = (inputElement, galeriaElement) => {\r\n  const archivo = inputElement.files[0];\r\n\r\n  if (archivo) {\r\n    const imagen = document.createElement(\"img\");\r\n    imagen.src = URL.createObjectURL(archivo);\r\n    imagen.classList.add(\"img-predefinida\");\r\n    galeriaElement.appendChild(imagen);\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cargarImagen);\r\n\n\n//# sourceURL=webpack://segundo-parcial-dw/./module/imgViewer.js?");

/***/ }),

/***/ "./module/passwordGen.js":
/*!*******************************!*\
  !*** ./module/passwordGen.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/*\r\nCrea un módulo que genere contraseñas aleatorias basadas en las preferencias \r\ndel usuario, como longitud y tipos de caracteres (letras, números, símbolos, etc.). \r\nImporta este módulo en una página HTML y permite que los usuarios generen \r\ncontraseñas personalizadas.\r\n*/\r\n\r\nconst generarClave = (longitud, incluirLetras, incluirNumeros, incluirSimbolos) => {\r\n    const letras = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';\r\n    const numeros = '0123456789';\r\n    const simbolos = '!@#$%^&*()_+[]{}|;:,.<>?';\r\n    let caracteresPermitidos = '';\r\n    if (incluirLetras) caracteresPermitidos += letras;\r\n    if (incluirNumeros) caracteresPermitidos += numeros;\r\n    if (incluirSimbolos) caracteresPermitidos += simbolos;\r\n    if (caracteresPermitidos === '') {\r\n      return 'Debes seleccionar al menos un tipo de caracter.';\r\n    }\r\n    let contraseñaGenerada = '';\r\n    for (let i = 0; i < longitud; i++) {\r\n      const caracterAleatorio = caracteresPermitidos[Math.floor(Math.random() * caracteresPermitidos.length)];\r\n      contraseñaGenerada += caracterAleatorio;\r\n    }\r\n    return contraseñaGenerada;\r\n  };\r\n  \r\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generarClave);\n\n//# sourceURL=webpack://segundo-parcial-dw/./module/passwordGen.js?");

/***/ }),

/***/ "./module/taskList.js":
/*!****************************!*\
  !*** ./module/taskList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   agregarTarea: () => (/* binding */ agregarTarea),\n/* harmony export */   completarTarea: () => (/* binding */ completarTarea),\n/* harmony export */   mostrarTareas: () => (/* binding */ mostrarTareas)\n/* harmony export */ });\n/*\r\nCrea un módulo que maneje una lista de tareas. Debe permitir agregar tareas, \r\nmarcar tareas como completadas y mostrar la lista de tareas. \r\nImporta y utiliza este módulo en una página HTML para crear una aplicación \r\nsimple de lista de tareas.\r\n*/\r\nconst tareas = [];\r\n\r\nconst agregarTarea = (texto) => {\r\n  tareas.push({ texto, completada: false });\r\n};\r\n\r\nconst completarTarea = (index) => {\r\n  if (index >= 0 && index < tareas.length) {\r\n    tareas[index].completada = true;\r\n  }\r\n};\r\n\r\nconst mostrarTareas = () => {\r\n  const listaTareas = document.getElementById(\"lista-tareas\");\r\n  listaTareas.innerHTML = \"\";\r\n\r\n  tareas.forEach((tarea, index) => {\r\n    const li = crearElementoTarea(tarea, index);\r\n    listaTareas.appendChild(li);\r\n  });\r\n};\r\n\r\nconst crearElementoTarea = (tarea, index) => {\r\n  const li = document.createElement(\"li\");\r\n  li.classList.add(\"list-group-item\");\r\n\r\n  const textoTarea = document.createElement(\"span\");\r\n  textoTarea.textContent = tarea.texto + \"->   \";\r\n\r\n  const btnCompletar = document.createElement(\"button\");\r\n  btnCompletar.dataset.index = index;\r\n  btnCompletar.dataset.action = \"completar\";\r\n  btnCompletar.className = \"btn btn-success\";\r\n  btnCompletar.innerHTML = '<i class=\"bi bi-send-check fs-1\"></i>';\r\n\r\n  btnCompletar.addEventListener(\"click\", () => {\r\n    completarTarea(index);\r\n    mostrarTareas();\r\n  });\r\n\r\n  if (tarea.completada) {\r\n    textoTarea.classList.add(\"text-danger\");\r\n    textoTarea.innerHTML = `<s>${tarea.texto}     </s>`;\r\n  }\r\n\r\n  li.appendChild(textoTarea);\r\n  li.appendChild(btnCompletar);\r\n\r\n  return li;\r\n};\r\n\r\n\n\n//# sourceURL=webpack://segundo-parcial-dw/./module/taskList.js?");

/***/ }),

/***/ "./module/unitConvert.js":
/*!*******************************!*\
  !*** ./module/unitConvert.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/*\r\nCrea un módulo que contenga funciones para convertir unidades de medida, por \r\nejemplo, de Celsius a Fahrenheit y viceversa. Importa este módulo en un archivo \r\nHTML y crea una interfaz donde los usuarios puedan ingresar una temperatura y \r\nseleccionar la unidad de entrada y salida para realizar la conversión.\r\n*/\r\n\r\nconst convertir = (temperatura, unidadEntrada, unidadSalida) => {\r\n  let resultado;\r\n\r\n  if (unidadEntrada === \"celsius\" && unidadSalida === \"fahrenheit\") {\r\n    resultado = (temperatura * 9) / 5 + 32;\r\n  } else if (unidadEntrada === \"fahrenheit\" && unidadSalida === \"celsius\") {\r\n    resultado = ((temperatura - 32) * 5) / 9;\r\n  } else {\r\n    resultado = temperatura;\r\n  }\r\n\r\n  return resultado;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (convertir);\r\n\n\n//# sourceURL=webpack://segundo-parcial-dw/./module/unitConvert.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./module/aggregator.js");
/******/ 	
/******/ })()
;