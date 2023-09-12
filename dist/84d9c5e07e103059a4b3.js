import {generarClave} from "../../module/aggregator.js";

document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("form-generar-clave");
  const claveGenerada = document.getElementById("clave-generada");

  if (formulario && claveGenerada) {
    formulario.addEventListener("submit", function (e) {
      e.preventDefault();

      const longitud = parseInt(document.getElementById("longitud").value);
      const incluirLetras = document.getElementById("letras").checked;
      const incluirNumeros = document.getElementById("numeros").checked;
      const incluirSimbolos = document.getElementById("simbolos").checked;

      const clave = generarClave(
        longitud,
        incluirLetras,
        incluirNumeros,
        incluirSimbolos
      );
      claveGenerada.textContent = clave;
    });
  }
});
