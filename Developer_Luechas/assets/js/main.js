// ===============================
//  Selección de elementos
// ===============================
const tituloPrincipalEl = document.getElementById("titulo-principal");
const botonesContenedor = document.getElementById("botones-contenedor");

const tituloEl = document.querySelector(".card-title");
const descripcionEl = document.querySelector(".card-text");
const iconoEl = document.getElementById("energia-icono");
const subtituloEl = document.querySelector(".card-subtitle");
const estrellasEl = document.getElementById("estrellas");

// Listas dinámicas
const beneficiosList = document.getElementById("beneficios-list");
const datosList = document.getElementById("datos-list");
const colombiaList = document.getElementById("colombia-list");


// ===============================
//  TÍTULO PRINCIPAL
// ===============================
tituloPrincipalEl.textContent = tituloPrincipal;


// ===============================
//  GENERAR BOTONES DINÁMICOS
// ===============================
Object.keys(energias).forEach(tipo => {
  const btn = document.createElement("button");
  btn.classList.add("energia-btn");
  btn.dataset.energia = tipo;
  btn.textContent = energias[tipo].nombre;

  // Estilo base
  btn.style.backgroundColor = "#ffffff";
  btn.style.color = "#000";

  botonesContenedor.appendChild(btn);
});

// Botones ya generados
const botones = document.querySelectorAll(".energia-btn");


// ===============================
//  FUNCIÓN — Cargar Energía
// ===============================
function cargarEnergia(tipo) {
  const data = energias[tipo];

  tituloEl.textContent = data.titulo;
  subtituloEl.textContent = data.subtitulo;
  descripcionEl.textContent = data.descripcion;

  iconoEl.src = data.icono || "";
  iconoEl.alt = data.titulo || "";

  // Estrellas
  estrellasEl.innerHTML = "";
  for (let i = 0; i < data.estrellas; i++) {
    const star = document.createElement("span");
    star.textContent = "★";
    star.style.color = data.color;
    star.style.fontSize = "22px";
    star.style.marginRight = "3px";
    estrellasEl.appendChild(star);
  }

  // Listas dinámicas
  cargarLista(beneficiosList, data.beneficios);
  cargarLista(datosList, data.datos);
  cargarLista(colombiaList, data.colombia);
}


// ===============================
//  FUNCIÓN — Llenar listas
// ===============================
function cargarLista(contenedor, items) {
  contenedor.innerHTML = "";
  items.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    contenedor.appendChild(li);
  });
}


// ===============================
//  EVENTOS DE BOTONES
// ===============================
botones.forEach(btn => {
  btn.addEventListener("click", () => {
    const tipo = btn.dataset.energia;

    // Reset visual
    botones.forEach(b => {
      b.style.backgroundColor = "#ffffff";
      b.style.color = "#000";
      b.classList.remove("active");
    });

    // Botón activo
    btn.style.backgroundColor = energias[tipo].color;
    btn.style.color = "#000";
    btn.classList.add("active");

    // Variable CSS para color principal
    document.documentElement.style.setProperty(
      "--energia-color",
      energias[tipo].color
    );

    cargarEnergia(tipo);
  });
});


// ===============================
//  Energía por defecto
// ===============================
cargarEnergia("solar");
