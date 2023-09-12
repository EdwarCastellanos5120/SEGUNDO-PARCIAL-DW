import {convertir} from "../../module/aggregator.js";

const formulario = document.getElementById("form-convertir");


formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const temperatura = parseFloat(document.getElementById("numero").value);
  const unidadEntrada = document.getElementById("operacion-entrada").value;
  const unidadSalida = document.getElementById("operacion-salida").value;
  const resultado = document.getElementById("resultado");
  console.log(temperatura, unidadEntrada, unidadSalida);
  resultado.classList.remove("d-none");
  resultado.innerHTML = "El resultado de la conversion es: " + convertir(temperatura, unidadEntrada, unidadSalida);
});
