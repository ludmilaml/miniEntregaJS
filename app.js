// Array que simula la base de datos
let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [
  { id: 1, nombre: "Juan", edad: 25, email: "juan@mail.com" },
  { id: 2, nombre: "Ana", edad: 30, email: "ana@mail.com" }
];

// Función para guardar usuarios en localStorage
function guardarUsuarios() {
  localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

// Función para mostrar los usuarios en pantalla
function mostrarUsuarios() {
  const contenedor = document.getElementById('usuarios');
  contenedor.innerHTML = '';
  
  if (usuarios.length === 0) {
    contenedor.textContent = 'No hay usuarios registrados.';
    return;
  }
  
  const ul = document.createElement('ul');
  usuarios.forEach(usuario => {
    const li = document.createElement('li');
     li.innerHTML = `
      <strong>ID:</strong> ${usuario.id} |
      <strong>Nombre:</strong> ${usuario.nombre} |
      <strong>Edad:</strong> ${usuario.edad} |
      <strong>Email:</strong> ${usuario.email} |
      <strong>Color Favorito:</strong> ${usuario.colorFavorito || 'No especificado'}
    `;
    ul.appendChild(li);
  });
  contenedor.appendChild(ul);
}

// Agregar un nuevo usuario
document.getElementById('formUsuario').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const nombre = document.getElementById('nombre').value.trim();
  const edad = parseInt(document.getElementById('edad').value);
  const email = document.getElementById('email').value.trim();
  const colorFavorito = document.getElementById('colorFavorito').value.trim();
  
  localStorage.setItem('colorFavorito', colorFavorito);
 
  // Agregar nuevo usuario
  const nuevoId = usuarios.length ? usuarios[usuarios.length - 1].id + 1 : 1;
  const nuevoUsuario = { id: nuevoId, nombre, edad, email, colorFavorito };
  usuarios.push(nuevoUsuario);
  
  // Guardar en localStorage y mostrar
  guardarUsuarios();
  mostrarUsuarios();
  
  // Mostrar mensaje y limpiar formulario
  alert(`Hola ${nombre} se guardo tu usuario con éxito!`);
  this.reset();
});

// Mostrar saludo personalizado al cargar
window.onload = function() {
  const colorFavorito = localStorage.getItem('colorFavorito');
  if (colorFavorito) {
    const saludo = document.createElement('p');
    saludo.textContent = `Tu color favorito es: ${colorFavorito}`;
    saludo.style.color = colorFavorito;
    document.body.insertBefore(saludo, document.body.firstChild);
  }
  
  mostrarUsuarios();
};