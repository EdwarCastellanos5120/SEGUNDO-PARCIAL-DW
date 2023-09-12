/*
Crea un módulo que maneje una lista de tareas. Debe permitir agregar tareas, 
marcar tareas como completadas y mostrar la lista de tareas. 
Importa y utiliza este módulo en una página HTML para crear una aplicación 
simple de lista de tareas.
*/

const tareas = [];

const agregarTarea = (tarea) => {
  tareas.push({ texto: tarea, completada: false });
};

const completarTarea = (index) => {
  if (index >= 0 && index < tareas.length) {
    tareas[index].completada = true;
  }
};

const mostrarTareas = () => {
  const listaTareas = document.getElementById("lista-tareas");
  listaTareas.innerHTML = "";

  tareas.forEach((tarea, index) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.innerHTML = `
        ${tarea.completada ? `<s class="text-danger">` + tarea.texto  + "</s>" : tarea.texto}
        <button data-index="${index}" data-action="completar" class="btn btn-success" ><i class="bi bi-send-check"></i></button>
        <br><br>
      `;
    listaTareas.appendChild(li);
  });
};

export { agregarTarea, completarTarea, mostrarTareas };
