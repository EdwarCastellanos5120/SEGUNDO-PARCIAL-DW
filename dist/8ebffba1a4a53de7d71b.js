import { agregarTarea, completarTarea, mostrarTareas } from  "../../module/aggregator.js";

document.addEventListener("DOMContentLoaded", function () {
  const formTareas = document.getElementById("form-tareas");
  const inputTarea = document.getElementById("input-tarea");
  const listaTareas = document.getElementById("lista-tareas");

  if (formTareas && inputTarea && listaTareas) {
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

    listaTareas.addEventListener("mousedown", function (e) {
      if (e.target.tagName === "BUTTON") {
        const index = parseInt(e.target.dataset.index);
        const action = e.target.dataset.action;
    
        if (action === "completar") {
          setTimeout(() => {
            completarTarea(index);
            mostrarTareas();
          }, 100); 
        }
      }
    });
  }
});