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

/***/ "./module/taskList.js":
/*!****************************!*\
  !*** ./module/taskList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   agregarTarea: () => (/* binding */ agregarTarea),\n/* harmony export */   completarTarea: () => (/* binding */ completarTarea),\n/* harmony export */   mostrarTareas: () => (/* binding */ mostrarTareas)\n/* harmony export */ });\n/*\r\nCrea un módulo que maneje una lista de tareas. Debe permitir agregar tareas, \r\nmarcar tareas como completadas y mostrar la lista de tareas. \r\nImporta y utiliza este módulo en una página HTML para crear una aplicación \r\nsimple de lista de tareas.\r\n*/\r\nconst tareas = [];\r\n\r\nconst agregarTarea = (texto) => {\r\n  tareas.push({ texto, completada: false });\r\n};\r\n\r\nconst completarTarea = (index) => {\r\n  if (index >= 0 && index < tareas.length) {\r\n    tareas[index].completada = true;\r\n  }\r\n};\r\n\r\nconst mostrarTareas = () => {\r\n  const listaTareas = document.getElementById(\"lista-tareas\");\r\n  listaTareas.innerHTML = \"\";\r\n\r\n  tareas.forEach((tarea, index) => {\r\n    const li = crearElementoTarea(tarea, index);\r\n    listaTareas.appendChild(li);\r\n  });\r\n};\r\n\r\nconst crearElementoTarea = (tarea, index) => {\r\n  const li = document.createElement(\"li\");\r\n  li.classList.add(\"list-group-item\");\r\n\r\n  const textoTarea = document.createElement(\"span\");\r\n  textoTarea.textContent = tarea.texto + \"->   \";\r\n\r\n  const btnCompletar = document.createElement(\"button\");\r\n  btnCompletar.dataset.index = index;\r\n  btnCompletar.dataset.action = \"completar\";\r\n  btnCompletar.className = \"btn btn-success\";\r\n  btnCompletar.innerHTML = '<i class=\"bi bi-send-check fs-1\"></i>';\r\n\r\n  btnCompletar.addEventListener(\"click\", () => {\r\n    completarTarea(index);\r\n    mostrarTareas();\r\n  });\r\n\r\n  if (tarea.completada) {\r\n    textoTarea.classList.add(\"text-danger\");\r\n    textoTarea.innerHTML = `<s>${tarea.texto}     </s>`;\r\n  }\r\n\r\n  li.appendChild(textoTarea);\r\n  li.appendChild(btnCompletar);\r\n\r\n  return li;\r\n};\r\n\r\n\n\n//# sourceURL=webpack://segundo-parcial-dw/./module/taskList.js?");

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
/******/ 	__webpack_modules__["./module/taskList.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;