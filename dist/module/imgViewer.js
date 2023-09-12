/*
Crea un módulo que administre una galería de imágenes. 
El módulo debe permitir cargar y mostrar imágenes en una página HTML. 
Importa este módulo y crea una galería de imágenes simple donde los usuarios 
puedan cargar y ver imágenes.
*/

const cargarImagen = (inputElement, galeriaElement) => {
  const archivo = inputElement.files[0];

  if (archivo) {
    const imagen = document.createElement("img");
    imagen.src = URL.createObjectURL(archivo);
    imagen.classList.add("img-predefinida");
    galeriaElement.appendChild(imagen);
  }
};

export default cargarImagen;
