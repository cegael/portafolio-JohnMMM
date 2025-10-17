
  document.addEventListener("DOMContentLoaded", () => {
    // Efecto de chispa en el botón al pasar el mouse
const btnHero = document.querySelector('.btn-hero');

btnHero.addEventListener('mouseenter', () => {
  btnHero.style.transform = 'scale(1.05)';
});

btnHero.addEventListener('mouseleave', () => {
  btnHero.style.transform = 'scale(1)';
});

    const header = document.querySelector("header");
    header.style.opacity = 0;
    header.style.transition = "opacity 1s ease";
  
    setTimeout(() => {
      header.style.opacity = 1;
    }, 300);
  
    console.log("✨ Portafolio visual de Flaco cargado con estilo");
  });

  // ==== Datos de proyectos ====
const proyectos = [
  {
    titulo: "Portafolio Taller de Chispas y Engranajes",
    descripcion: "Mi propio portafolio web creado desde cero con HTML, CSS y JavaScript. Muestra mi experiencia en soldadura y desarrollo web.",
    imagen: "assets/imgs/proyecto1.jpeg", // puedes cambiar por tu propia imagen
    enlace: "https://github.com/flaco17/portafolio",
  },
  {
    titulo: "Simulador de Soldadura",
    descripcion: "Una app interactiva donde los usuarios pueden practicar conceptos básicos de soldadura con efectos visuales y sonidos realistas.",
    imagen: "assets/imgs/proyecto2.jpg",
    enlace: "#",
  },
  {
    titulo: "Gestor de Turnos de Lavadoras",
    descripcion: "Sistema para alquilar y asignar turnos de lavado, desarrollado en HTML, CSS y JS con almacenamiento local.",
    imagen: "assets/imgs/proyecto3.png",
    enlace: "#",
  }
];

// ==== Renderizado dinámico ====
const contenedor = document.querySelector(".proyectos-container");

proyectos.forEach(proyecto => {
  const card = document.createElement("article");
  card.classList.add("proyecto");

  card.innerHTML = `
    <img src="${proyecto.imagen}" alt="${proyecto.titulo}" class="img-proyecto">
    <h3>${proyecto.titulo}</h3>
    <p>${proyecto.descripcion}</p>
    <a href="${proyecto.enlace}" target="_blank" class="btn-ver">Ver proyecto</a>
  `;

  contenedor.appendChild(card);
});

// ==== Animación simple al cargar ====
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".proyecto");
  cards.forEach((card, i) => {
    card.style.opacity = "0";
    setTimeout(() => {
      card.style.transition = "opacity 0.6s ease";
      card.style.opacity = "1";
    }, i * 200);
  });
});

  