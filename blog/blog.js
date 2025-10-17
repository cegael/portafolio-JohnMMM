// === blog.js ===
// Cargar y mostrar artículos del blog dinámicamente

document.addEventListener("DOMContentLoaded", () => {
    const postsContainer = document.getElementById("posts-container");
  
    // Función para cargar los posts desde el archivo JSON
    const cargarPosts = async () => {
      try {
        const respuesta = await fetch("posts.json");
        const posts = await respuesta.json();
  
        mostrarPosts(posts);
      } catch (error) {
        console.error("Error al cargar los artículos:", error);
        postsContainer.innerHTML = `<p style="text-align:center; color:#ffb400;">No se pudieron cargar los artículos 😢</p>`;
      }
    };
  
    // Función para crear las tarjetas de post
    const mostrarPosts = (posts) => {
      postsContainer.innerHTML = ""; // Limpiar el contenedor
  
      posts.forEach((post) => {
        const card = document.createElement("article");
        card.classList.add("post-card");
  
        card.innerHTML = `
          <img src="${post.imagen}" alt="${post.titulo}">
          <div class="post-content">
            <h3>${post.titulo}</h3>
            <p>${post.descripcion}</p>
            <a href="${post.link}" class="btn-leer">Leer más</a>
          </div>
        `;
  
        postsContainer.appendChild(card);
      });
    };
  
    // Inicializar carga
    cargarPosts();
  });
  