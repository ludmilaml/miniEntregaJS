// Array que simula la base de datos
let usuarios = [
  { id: 1, nombre: "Juan", edad: 25, email: "juan@mail.com" },
  { id: 2, nombre: "Ana", edad: 30, email: "ana@mail.com" }
];

// Función para mostrar los usuarios en pantalla
function mostrarUsuarios() {
  const contenedor = document.getElementById('usuarios');
  contenedor.innerHTML = ''; // Limpiar antes de mostrar, asi no me repite la lista de usuarios
  const ul = document.createElement('ul');
  usuarios.forEach(usuario => {
    const li = document.createElement('li');
    li.textContent = `ID: ${usuario.id} - Nombre: ${usuario.nombre} - Edad: ${usuario.edad} - Email: ${usuario.email}`;
    ul.appendChild(li);
  });
  contenedor.appendChild(ul);
}

// gregar un nuevo usuario
document.getElementById('formUsuario').addEventListener('submit', function(e) {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const edad = parseInt(document.getElementById('edad').value);
  const email = document.getElementById('email').value;
  
  const nuevoId = usuarios.length ? usuarios[usuarios.length - 1].id + 1 : 1;
  const nuevoUsuario = { id: nuevoId, nombre, edad, email };
  usuarios.push(nuevoUsuario);
  
  mostrarUsuarios();
  
  // Limpio formulario para que no me quede el dato de la persona anterior
  this.reset();
});

// Cuando cargo la página
window.onload = function() {
  mostrarUsuarios();
  };