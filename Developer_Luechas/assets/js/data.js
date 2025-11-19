
const tituloPrincipal = "Fuentes de Energía Renovable";

const energias = {
  solar:  {
  nombre: "Solar",
  color: "#f7b543",
  icono: "assets/icons/solar.svg",
  titulo: "Energía Solar",
  estrellas: 4,
  subtitulo: "Crecimiento anual: +22%",
  descripcion:
    "La energía solar convierte la luz del sol en electricidad mediante paneles o sistemas térmicos. Es limpia, abundante y una de las tecnologías renovables más adoptadas a nivel mundial.",
  beneficios: [
    "Es una fuente de energía limpia y sostenible",
    "Reduce la huella de carbono",
    "Disminuye costos en la factura eléctrica",
    "Los paneles tienen una vida útil de más de 25 años"
  ],
  datos: [
    "La energía solar es la renovable de más rápido crecimiento",
    "China es el país con más capacidad solar instalada",
    "La energía solar ya es más barata que los combustibles fósiles en muchos países"
  ],
  colombia: [
    "Colombia recibe en promedio 4,5 a 6 kWh/m2 de radiación solar diaria",
    "Guajira y Cesar son zonas ideales para proyectos fotovoltaicos",
    "El país tiene incentivos tributarios para proyectos solares"
  ]
},

  eolica: {
     nombre: "Eólica",
    color: "#4a8cff",
    icono: "",
    titulo: "",
    estrellas: 0,
    subtitulo: "",
    descripcion: "",
    beneficios: [],
    datos: [],
    colombia: []
  },

  hidroelectrica: {
    nombre: "Hidroeléctrica",
    color: "#37c788",
    icono: "",
    titulo: "",
    estrellas: 0,
    subtitulo: "",
    descripcion: "",
    beneficios: [],
    datos: [],
    colombia: []
  },

  bioenergia: {
    nombre: "Bioenergía",
    color: "#7ac44b",
    icono: "assets/icons/leaf.png",
    titulo: "",
    estrellas: 0,
    subtitulo: "",
    descripcion: "",
    beneficios: [],
    datos: [],
    colombia: []
  }
};

console.log(energias);

botones.forEach(btn => {
  const tipo = btn.dataset.energia;
  btn.style.backgroundColor = energias[tipo].color;
});

