
/* <script src="/src/js/headerYFooter.js"></script> */

/*            ------------------- Header -------------------

    <header id="main-header" class="container-sm-fluid ps-0 pe-0 pt-0">

    </header>
*/

document.getElementById("main-header").innerHTML = `
<nav class="container-sm-fluid ps-0 pe-0 pt-0">
			<div class="navbar navbar-expand-lg  justify-content-between navbarSuperior" id="navbarSuperior"><!-- div color azul -->
				<a id="logoDulcesYLadridos" class="navbar-brand"><img src="../img/logo_y_nombre.png" alt="Logo y nombre de la empresa" /></a>
				<div class="navbar" id="client">
					<a href="./formulario-login.html"><i class="fa-regular fa-user" title="Login / Registro"></i></a>
					<span class="client-name "></span>
					<a href="./carrito.html"><i class="fa-solid fa-cart-shopping" title="Carrito"></i></a>
				</div>
				<button class="navbar-toggler m-2" type="button" data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
					aria-expanded="false" aria-label="Toggle navigation" id="#iconoNavBar">
					<span class="navbar-toggler-icon"></span>
				</button>
			</div>

		</nav>

		<nav class="navbar navbar-expand-lg bg-header2">
			<div class="container-fluid">
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav me-auto mb-2 mb-lg-0">
						<li class="nav-item ">
							<a class="nav-link active text-white " aria-current="page" href="/index.html">Inicio</a>
						</li>
						<li class="nav-item">
							<a class="nav-link text-white " href="./productos.html">Productos</a>
						</li>
						<li class="nav-item">
							<a class="nav-link text-white" href="./publicaciones.html">Publicaciones</a>
						</li>
						<li class="nav-item">
							<a class="nav-link text-white" href="./nosotros.html">Nosotros</a>
						</li>
						<li class="nav-item">
							<a class="nav-link text-white" href="./contacto.html">Contáctanos</a>
						</li>
					</ul>
					</form>
				</div>
			</div>
		</nav>
`;

const user = JSON.parse(localStorage.getItem('login-success')) || false;
if (user){
  document.querySelector('#client').innerHTML = `
      <a href="./src/pages/formulario-login.html" class=" dropdown-toggle"
								type="button" data-bs-toggle="dropdown" aria-expanded="false"><i
									class="fa-regular fa-user" title="Login / Registro"></i></a>
							<ul class="dropdown-menu">
								<li><a class="dropdown-item logout" href="#">Cerrar Sesión</a></li>
							</ul>
							<span class="client-name"></span>
							<a href="./src/pages/carrito.html"><i class="fa-solid fa-cart-shopping"
									title="Carrito"></i></a>
      `
  document.querySelector('.client-name').innerHTML = `${user.name} ${user.lastName}`
}

/*            ------------------- Footer -------------------

    <footer id="main-footer" class="text-center bg-body-tertiary">
    
    </footer>
*/

document.getElementById("main-footer").innerHTML = `
<!-- Grid container -->
<div class="container pt-4">
    <!-- Section: Social media -->
    <section class="mb-4">
        <!-- Facebook -->
        <a data-mdb-ripple-init class="btn btn-link btn-floating btn-lg text-body m-1" href="#!" role="button"
            data-mdb-ripple-color="dark"><i class="fab fa-facebook-f" title="Facebook"></i></a>

        <!-- Twitter -->
        <a data-mdb-ripple-init class="btn btn-link btn-floating btn-lg text-body m-1" href="#!" role="button"
            data-mdb-ripple-color="dark"><i class="fab fa-twitter" title="Twitter"></i></a>

        <!-- Google -->
        <a data-mdb-ripple-init class="btn btn-link btn-floating btn-lg text-body m-1" href="#!" role="button"
            data-mdb-ripple-color="dark"><i class="fab fa-google" title="Google"></i></a>

        <!-- Instagram -->
        <a data-mdb-ripple-init class="btn btn-link btn-floating btn-lg text-body m-1" href="#!" role="button"
            data-mdb-ripple-color="dark"><i class="fab fa-instagram" title="Instagram"></i></a>

        <!-- Linkedin -->
        <a data-mdb-ripple-init class="btn btn-link btn-floating btn-lg text-body m-1" href="#!" role="button"
            data-mdb-ripple-color="dark"><i class="fab fa-linkedin" title="LinkedIn"></i></a>
        <!-- Github -->
        <a data-mdb-ripple-init class="btn btn-link btn-floating btn-lg text-body m-1" href="#!" role="button"
            data-mdb-ripple-color="dark"><i class="fab fa-github" title="GitHub"></i></a>
    </section>
    <!-- Section: Social media -->
</div>
    <!-- Grid container -->
    <!-- Copyright -->
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.05);">
      Politicas de privacidad / Terminos y condiciones
      <a class="text-body" href="https://mdbootstrap.com/"></a>
    </div>
    <!-- Copyright -->
`;