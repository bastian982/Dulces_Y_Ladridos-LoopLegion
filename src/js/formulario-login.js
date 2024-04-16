/* Tomamos el boton de inicio de sesion y se activa la función si la información es valida */
const buttonLogIn = document.querySelector('#formulario-login');
buttonLogIn.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.querySelector("#user-input").value;
  const password = document.querySelector("#password-input").value;
  const users = JSON.parse(localStorage.getItem("users")) || []; //obtienen información de usuarios

  const validateEmail = users.find(user => user.email === email);

  if(!validateEmail){
    alert('Usuario no registrado, crea una cuenta')
  }
  else{
    const validateUser = users.find(
        (user) => user.email === email && user.password === password
      );
      if (!validateUser) {
        alert("Usuario y/o contraseña incorrectos");

      }
    
      alert(`Bienvenido ${validateUser.name} ${validateUser.lastName}`);
      //localStorage.setItem('login-success', JSON.stringify(validateUser));
      localStorage.setItem('login-success', JSON.stringify(validateUser))

      document.querySelector('.dropdown').innerHTML = `
      <a href="./src/pages/formulario-login.html" class=" dropdown-toggle"
								type="button" data-bs-toggle="dropdown" aria-expanded="false"><i
									class="fa-regular fa-user" title="Login / Registro"></i></a>
							<ul class="dropdown-menu">
								<li><a class="dropdown-item" href="#">Cerrar Sesión</a></li>
							</ul>
							<span class="client-name"></span>
							<a href="./src/pages/carrito.html"><i class="fa-solid fa-cart-shopping"
									title="Carrito"></i></a>
      `

      document.querySelector('.client-name').innerHTML = `${validateUser.name} ${validateUser.lastName}`
      window.location.href = "../../index.html";
     
  }

});
