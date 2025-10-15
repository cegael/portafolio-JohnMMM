
  document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    header.style.opacity = 0;
    header.style.transition = "opacity 1s ease";
  
    setTimeout(() => {
      header.style.opacity = 1;
    }, 300);
  
    console.log("✨ Portafolio visual de Flaco cargado con estilo");
  });
  