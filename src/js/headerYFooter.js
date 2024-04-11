
/* <script src="/src/js/headerYFooter.js"></script> */

/*            ------------------- Header -------------------

    <header id="main-header" class="container-sm-fluid ps-0 pe-0 pt-0">

    </header>
*/

document.getElementById("main-header").innerHTML = `
<nav class="container-sm-fluid ps-0 pe-0 pt-0">
<div class="navbar navbar-expand-lg  justify-content-between navbarSuperior" id="navbarSuperior">
  <a id="botonBusqueda" class="btn nav-link navbar-toggler" role="button" data-bs-toggle="collapse"
    data-bs-target="#searchContent" aria-controls="searchContent" aria-expanded="false"
    aria-label="Toggle navigation">
    <i class="fa-solid fa-magnifying-glass"></i>
  </a>
  <a class="navbar-brand"><img src="../img/logo_y_nombre.png" alt="Logo y nombre de la empresa" /></a> <!-- ../img/logo_y_nombre.png -->
  <div class="navbar">
    <div class="collapse navbar-collapse" id="searchContent">
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Buscar..." aria-label="Search" />
        <button class="btn-search text-white" type="submit">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
      <div>
        <a href="./formulario-login.html"><i class="fa-regular fa-user" title="Login / Registro"></i></a>
        <a href="#"><i class="fa-solid fa-cart-shopping" title="Carrito"></i></a>
      </div>
    </div>

    <button class="navbar-toggler m-2" type="button" data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>


  </div>

</div>

</nav>

<nav class="navbar navbar-expand-lg bg-header2">
<div class="container-fluid">

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item ">
        <a class="nav-link active text-white" aria-current="page" href="../../index.html">Inicio</a> <!-- ../../index.html -->
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" href="./productos.html">Productos</a> <!-- ./productos.html -->
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" href="./publicaciones.html">Publicaciones</a> <!-- ./publicaciones.html -->
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" href="./experiencia.html">Experiencia</a> <!-- ./experiencia.html -->
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" href="./nosotros.html">Nosotros</a> <!-- ./nosotros.html -->
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" href="./contacto.html">Contáctanos</a> <!-- ./contacto.html -->
      </li>
    </ul>
    </form>
  </div>
</div>
</nav>
`;

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