import { agregarTarea, completarTarea, mostrarTareas } from  "../../module/aggregator.js";

const formTareas = document.getElementById("form-tareas");
const inputTarea = document.getElementById("input-tarea");
const listaTareas = document.getElementById("lista-tareas");

formTareas.addEventListener("submit", function (e) {
  e.preventDefault();
  const tareaText = inputTarea.value.trim();
  if (tareaText) {
    agregarTarea(tareaText);
    inputTarea.value = "";
    inputTarea.focus();
    mostrarTareas();
  }
});

window.addEventListener("load", function () {
  mostrarTareas();
});

listaTareas.addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON") {
    const index = parseInt(e.target.dataset.index);
    const action = e.target.dataset.action;

    if (action === "completar") {
      completarTarea(index);
    }

    mostrarTareas();
  }
});
