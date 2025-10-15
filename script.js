
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
  