import { cargarImagen } from "../../module/aggregator.js";

document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("form-cargar-imagen");
  const imagen = document.getElementById("imagen");
  const galeria = document.getElementById("galeria");

  if (formulario && imagen && galeria) {
    formulario.addEventListener("submit", function (e) {
      e.preventDefault();
      cargarImagen(imagen, galeria);
    });
  }
});
