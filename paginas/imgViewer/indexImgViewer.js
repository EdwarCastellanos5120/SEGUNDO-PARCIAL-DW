import { cargarImagen } from "../../module/aggregator.js";

const formulario = document.getElementById("form-cargar-imagen");
const imagen = document.getElementById("imagen");
const galeria = document.getElementById("galeria");

formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  cargarImagen(imagen, galeria);
});
