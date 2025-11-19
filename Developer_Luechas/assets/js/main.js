// Selección de elementos
const tituloPrincipalEl = document.getElementById("titulo-principal");
const botonesContenedor = document.getElementById("botones-contenedor");
const tituloEl = document.querySelector(".card-title");
const descripcionEl = document.querySelector(".card-text");
const iconoEl = document.getElementById("energia-icono");
const subtituloEl = document.querySelector(".card-subtitle");
const estrellasEl = document.getElementById("estrellas");
const cardEl = document.querySelector(".solar-card");

// Pintar título principal
tituloPrincipalEl.textContent = tituloPrincipal;

// 👉 Generar botones dinámicos
Object.keys(energias).forEach(tipo => {
  const btn = document.createElement("button");
  btn.classList.add("energia-btn");
  btn.dataset.energia = tipo;
  btn.textContent = energias[tipo].nombre;

  // Color inicial
  btn.style.backgroundColor = "#ffffff";
  btn.style.color = "#000";

  botonesContenedor.appendChild(btn);
});

// Seleccionar botones ya generados
const botones = document.querySelectorAll(".energia-btn");


// 👉 Función cargar energías
function cargarEnergia(tipo) {
  const data = energias[tipo];

  tituloEl.textContent = data.titulo;
  descripcionEl.textContent = data.descripcion;
  subtituloEl.textContent = data.subtitulo;

  iconoEl.src = data.icono;
  iconoEl.alt = data.titulo;

  // Borde dinámico
  

  // Estrellas dinámicas
  estrellasEl.innerHTML = "";
  for (let i = 0; i < data.estrellas; i++) {
    const star = document.createElement("span");
    star.textContent = "★";
    star.style.color = data.color;
    star.style.fontSize = "22px";
    star.style.marginRight = "3px";
    estrellasEl.appendChild(star);
  }
}


// 👉 Eventos para botones
botones.forEach(btn => {
  btn.addEventListener("click", () => {

    // reset botones
    botones.forEach(b => {
      b.style.backgroundColor = "#ffffff";
      b.style.color = "#000";
    });

    // activar botón
    let tipo = btn.dataset.energia;
    btn.style.backgroundColor = energias[tipo].color;
    btn.style.color = "#000";

    cargarEnergia(tipo);
  });
});


// 👉 Cargar solar por defecto
cargarEnergia("solar");
