import { sumar, restar, multiplicar, dividir } from "../../module/aggregator.js";

document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("form-calculos");

  if (formulario) {
    formulario.addEventListener("submit", function (e) {
      e.preventDefault();
      const num1 = parseFloat(document.getElementById("num1").value);
      const num2 = parseFloat(document.getElementById("num2").value);
      const operacion = document.getElementById("operacion").value;
      const mostrarResultado = document.getElementById("resultado");
      let resultado = 0;

      switch (operacion) {
        case "suma":
          resultado = sumar(num1, num2);
          break;
        case "resta":
          resultado = restar(num1, num2);
          break;
        case "multiplicacion":
          resultado = multiplicar(num1, num2);
          break;
        case "division":
          if (num2 !== 0) {
            resultado = dividir(num1, num2);
          } else {
            resultado = "No se puede dividir por cero";
          }
          break;
        default:
          resultado = "No se ha seleccionado una operación";
          break;
      }
      mostrarResultado.classList.remove("d-none");
      mostrarResultado.innerHTML = "El Resultado es: " + resultado;
    });
  }
});
