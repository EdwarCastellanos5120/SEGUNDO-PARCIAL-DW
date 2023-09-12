/*
Crea un módulo que contenga funciones para convertir unidades de medida, por 
ejemplo, de Celsius a Fahrenheit y viceversa. Importa este módulo en un archivo 
HTML y crea una interfaz donde los usuarios puedan ingresar una temperatura y 
seleccionar la unidad de entrada y salida para realizar la conversión.
*/

const convertir = (temperatura, unidadEntrada, unidadSalida) => {
  let resultado;

  if (unidadEntrada === "celsius" && unidadSalida === "fahrenheit") {
    resultado = (temperatura * 9) / 5 + 32;
  } else if (unidadEntrada === "fahrenheit" && unidadSalida === "celsius") {
    resultado = ((temperatura - 32) * 5) / 9;
  } else {
    resultado = temperatura;
  }

  return resultado;
};

export default convertir;
