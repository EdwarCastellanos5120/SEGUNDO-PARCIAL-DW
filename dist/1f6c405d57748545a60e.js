import { convertir } from "../../module/aggregator.js";

document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("form-convertir");

  if (formulario) {
    formulario.addEventListener("submit", (e) => {
      e.preventDefault();
      const temperatura = parseFloat(document.getElementById("numero").value);
      const unidadEntrada = document.getElementById("operacion-entrada").value;
      const unidadSalida = document.getElementById("operacion-salida").value;
      const resultado = document.getElementById("resultado");
      resultado.classList.remove("d-none");
      resultado.innerHTML =
        "El resultado de la conversión es: " +
        convertir(temperatura, unidadEntrada, unidadSalida);
    });
  }
});
