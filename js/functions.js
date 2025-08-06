// Funciones para navegación suave
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// Demo: Funciones y Variables
function saludarPersona() {
  const nombre = document.getElementById("nombreInput").value || "Visitante";
  const saludo = `¡Hola ${nombre}! Bienvenido al mundo de JavaScript 👋`;
  document.getElementById(
    "saludoOutput"
  ).innerHTML = `<strong>Saludo:</strong> ${saludo}`;
}

function mostrarHora() {
  const ahora = new Date();
  const hora = ahora.toLocaleTimeString("es-ES");
  document.getElementById(
    "saludoOutput"
  ).innerHTML = `<strong>Hora actual:</strong> ${hora} ⏰`;
}

// Demo: Manipulación del DOM
let contadorElementos = 0;

function crearElemento() {
  const texto =
    document.getElementById("textoElemento").value ||
    `Elemento ${++contadorElementos}`;
  const contenedor = document.getElementById("contenedorElementos");

  const nuevoDiv = document.createElement("div");
  nuevoDiv.textContent = texto;
  nuevoDiv.classList.add("demo-div");

  // Al hacer clic en el div, se elimina
  // Funcion flecha
  nuevoDiv.onclick = () => nuevoDiv.remove();

  contenedor.appendChild(nuevoDiv);

  // Limpiar el campo de texto
  document.getElementById("textoElemento").value = "";
}

function cambiarColor() {
  // Obtener todos los elementos hijos del contenedor
  const elementos = document.getElementById("contenedorElementos").children;

  // Array de colores pastel
  const colores = ["#fee2e2", "#f0fdf4", "#fef3c7", "#ede9fe", "#ecfdf5"];

  // Recorrer y asignar un color aleatorio a cada elemento
  Array.from(elementos).forEach((elemento) => {
    // Selección aleatoria de color
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    // Asignar el color de fondo
    elemento.style.background = colorAleatorio;
  });
}

// Limpiar todos los elementos creados
function limpiarElementos() {
  document.getElementById("contenedorElementos").innerHTML = "";
  contadorElementos = 0;
}

// Demo: JSON
function mostrarJSON() {
  const persona = {
    nombre: "Ana García",
    edad: 28,
    profesion: "Desarrolladora Web",
    habilidades: ["HTML", "CSS", "JavaScript", "React"],
    activo: true,
  };

  const output = document.getElementById("jsonOutput");
  output.innerHTML = `
                <strong>Objeto JavaScript:</strong><br>
                <pre style="background: #f8fafc; padding: 1rem; border-radius: 4px; margin: 0.5rem 0;">${JSON.stringify(
                  persona,
                  null,
                  2
                )}</pre>
            `;
}

function convertirJSON() {
  const objeto = {
    mensaje: "¡Hola desde JavaScript!",
    timestamp: new Date().toISOString(),
    usuario: "Estudiante",
  };

  const jsonString = JSON.stringify(objeto);
  const objetoParseado = JSON.parse(jsonString);

  const output = document.getElementById("jsonOutput");
  output.innerHTML = `
                <strong>JSON String:</strong><br>
                <code style="word-break: break-all;">${jsonString}</code><br><br>
                <strong>Objeto parseado:</strong><br>
                <pre style="background: #f8fafc; padding: 1rem; border-radius: 4px; margin: 0.5rem 0;">${JSON.stringify(
                  objetoParseado,
                  null,
                  2
                )}</pre>
            `;
}

// Demo: Fetch API
function mostrarEstadoAPI(estado, mensaje) {
  const statusElement = document.getElementById("apiStatus");
  statusElement.style.display = "inline-block";
  statusElement.className = `api-status ${estado}`;
  statusElement.textContent = mensaje;
}

async function obtenerPerrito() {
  mostrarEstadoAPI("loading", "Cargando...");

  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();

    mostrarEstadoAPI("success", "Éxito");
    document.getElementById("fetchOutput").innerHTML = `
                    <img src="${data.message}" alt="Perro Aleatorio" style="max-width: 100%; height: auto;">
                `;
  } catch (error) {
    mostrarEstadoAPI("error", "Error");
    document.getElementById("fetchOutput").innerHTML = `
                    <strong style="color: #dc2626;">Error:</strong> No se pudo obtener la cita. ${error.message}
                `;
  }
}

async function obtenerDatos() {
  mostrarEstadoAPI("loading", "Cargando...");

  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    const usuario = await response.json();

    mostrarEstadoAPI("success", "Éxito");
    document.getElementById("fetchOutput").innerHTML = `
                    <strong>Datos de usuario obtenidos:</strong><br>
                    <div style="background: #f8fafc; padding: 1rem; border-radius: 4px; margin: 0.5rem 0;">
                        <strong>Nombre:</strong> ${usuario.name}<br>
                        <strong>Email:</strong> ${usuario.email}<br>
                        <strong>Ciudad:</strong> ${usuario.address.city}<br>
                        <strong>Empresa:</strong> ${usuario.company.name}
                    </div>
                `;
  } catch (error) {
    mostrarEstadoAPI("error", "Error");
    document.getElementById("fetchOutput").innerHTML = `
                    <strong style="color: #dc2626;">Error:</strong> No se pudieron obtener los datos. ${error.message}
                `;
  }
}
