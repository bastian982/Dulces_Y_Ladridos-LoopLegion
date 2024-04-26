document.addEventListener('DOMContentLoaded', () => {
  const user = JSON.parse(localStorage.getItem('login-success')) || false;
  if (user) {
      const dropdown = document.querySelector('.dropdown');
      const clientName = document.querySelector('.client-name');

      if (dropdown && clientName) {
          dropdown.innerHTML = `
              <a href="./src/pages/formulario-login.html" class=" dropdown-toggle"
                  type="button" data-bs-toggle="dropdown" aria-expanded="false"><i
                      class="fa-regular fa-user" title="Login / Registro"></i></a>
              <ul class="dropdown-menu">
                  <li><a class="dropdown-item logout" href="#">Cerrar Sesión</a></li>
              </ul>
              <span class="client-name">${user.name} ${user.lastName}</span>
              <a href="./carrito.html"><i class="fa-solid fa-cart-shopping"
                      title="Carrito"></i></a>
          `;
      }
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const logout = document.querySelector('.logout');
  if (logout) {
      logout.addEventListener('click', () => {
          alert('Hasta Pronto!');
          localStorage.removeItem('login-success');
  
          const dropdown = document.querySelector('.dropdown');
          if (dropdown) {
              dropdown.innerHTML = `
                  <a href="./formulario-login.html"><i class="fa-regular fa-user" title="Login / Registro"></i></a>
                  <a href="./carrito.html"><i class="fa-solid fa-cart-shopping" title="Carrito"></i></a>
              `;
          }
      });
  }
});