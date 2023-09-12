/*
Crea un módulo que maneje una lista de tareas. Debe permitir agregar tareas, 
marcar tareas como completadas y mostrar la lista de tareas. 
Importa y utiliza este módulo en una página HTML para crear una aplicación 
simple de lista de tareas.
*/
const tareas = [];

const agregarTarea = (texto) => {
  tareas.push({ texto, completada: false });
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
    const li = crearElementoTarea(tarea, index);
    listaTareas.appendChild(li);
  });
};

const crearElementoTarea = (tarea, index) => {
  const li = document.createElement("li");
  li.classList.add("list-group-item");

  const textoTarea = document.createElement("span");
  textoTarea.textContent = tarea.texto + "->   ";

  const btnCompletar = document.createElement("button");
  btnCompletar.dataset.index = index;
  btnCompletar.dataset.action = "completar";
  btnCompletar.className = "btn btn-success";
  btnCompletar.innerHTML = '<i class="bi bi-send-check fs-1"></i>';

  btnCompletar.addEventListener("click", () => {
    completarTarea(index);
    mostrarTareas();
  });

  if (tarea.completada) {
    textoTarea.classList.add("text-danger");
    textoTarea.innerHTML = `<s>${tarea.texto}     </s>`;
  }

  li.appendChild(textoTarea);
  li.appendChild(btnCompletar);

  return li;
};

export { agregarTarea, completarTarea, mostrarTareas };