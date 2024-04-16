const user = JSON.parse(localStorage.getItem('login-success')) || false;
if (user){
  document.querySelector('.dropdown').innerHTML = `
      <a href="./src/pages/formulario-login.html" class=" dropdown-toggle"
								type="button" data-bs-toggle="dropdown" aria-expanded="false"><i
									class="fa-regular fa-user" title="Login / Registro"></i></a>
							<ul class="dropdown-menu">
								<li><a class="dropdown-item logout" href="#">Cerrar Sesión</a></li>
							</ul>
							<span class="client-name"></span>
							<a href="./carrito.html"><i class="fa-solid fa-cart-shopping"
									title="Carrito"></i></a>
      `
  document.querySelector('.client-name').innerHTML = `${user.name} ${user.lastName}`
}

const logout = document.querySelector('.logout');
logout.addEventListener('click', () =>{
  alert('Hasta Pronto!');
  localStorage.removeItem('login-success');

  document.querySelector('.dropdown').innerHTML = `
  <a href="./formulario-login.html"><i
              class="fa-regular fa-user" title="Login / Registro"></i></a>
              
          <a href="./carrito.html"><i class="fa-solid fa-cart-shopping"
              title="Carrito"></i></a>
  `
})