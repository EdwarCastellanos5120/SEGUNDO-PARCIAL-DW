/*
Crea un módulo que genere contraseñas aleatorias basadas en las preferencias 
del usuario, como longitud y tipos de caracteres (letras, números, símbolos, etc.). 
Importa este módulo en una página HTML y permite que los usuarios generen 
contraseñas personalizadas.
*/

const generarClave = (longitud, incluirLetras, incluirNumeros, incluirSimbolos) => {
    const letras = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numeros = '0123456789';
    const simbolos = '!@#$%^&*()_+[]{}|;:,.<>?';
    let caracteresPermitidos = '';
    if (incluirLetras) caracteresPermitidos += letras;
    if (incluirNumeros) caracteresPermitidos += numeros;
    if (incluirSimbolos) caracteresPermitidos += simbolos;
    if (caracteresPermitidos === '') {
      return 'Debes seleccionar al menos un tipo de caracter.';
    }
    let contraseñaGenerada = '';
    for (let i = 0; i < longitud; i++) {
      const caracterAleatorio = caracteresPermitidos[Math.floor(Math.random() * caracteresPermitidos.length)];
      contraseñaGenerada += caracterAleatorio;
    }
    return contraseñaGenerada;
  };
  
  export default generarClave;