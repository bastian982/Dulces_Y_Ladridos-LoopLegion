//import { getProducts } from "./localStorage.js";
const url = `http://localhost:8080/api/v1/posts`;
const arregloDePublicacionesName = "arregloDePublicaciones";

   const getData =  (arregloDePublicacionesName)=>{
    return localStorage.getItem(arregloDePublicacionesName)

   }
const setProducts = (nameData, data) => {
  localStorage.setItem(nameData, JSON.stringify(data));
};



const dataPrueba = getData(arregloDePublicacionesName);

const printThisPublication = async (id) => {
  let data = dataPrueba; // await getDataAPI(url);
  let info = data[id - 1];
  let message = `
    <div class="row text-center justify-content-center my-3">
      <h1 class="mb-3">${info.title}</h1>
      <p id="paragraph-content" class="text-start"></p>
      <img src="../img/perrito.jpg" class=" mt-3" alt="..." style="width: 45%"> 
      <h4 class="mb-3 text-end">By: ${info.user.firstName} ${info.user.lastName}</h4>
    </div>
  `;
  printHTML("blog-container", message);
  printText("paragraph-content", `${info.content}`);
  console.log(id);
};

const printInfo = async (id) => {
  let data = await getDataAPI(url);
  let info = data[id - 1];
  let message = `
    <div class="row text-center justify-content-center my-3">
      <h1 class="mb-3">${info.title}</h1>
      <p id="paragraph-content" class="text-start"></p>
      <img src="../img/perrito.jpg" class=" mt-3" alt="..." style="width: 45%">
      <h4 class="mb-3 text-end">By: ${info.user.firstName} ${info.autor.last_name}</h4>
    </div>
  `;
  printHTML("blog-container", message);
  printText("paragraph-content", `${info.content}`);
  console.log(id);
};

const cards = (publicaciones) =>{

  const posts = JSON.parse(publicaciones);
  console.log(posts);
  return posts.map((data)=>    
`
    <article class="card col-3 m-4 p-0 icon-link-hover" style="width: 21rem;" category="Tips" style="width: 27%;" >
          <img src="../img/post_img3.jpg" class="card-img-top mt-3" alt="...">
          <div class="card-body">
            <h5 class="card-title">${data.title}</h5>
            <h6 class="card-title">${data.user.firstName} ${data.user.lastName}</h6>
            <p class="card-text">${data.description}</p>
            <section class="d-flex justify-content-around">
              <button onclick="printThisPublication(${data.id})" class="btn btn-primary my-1" >Ver mas ...</button>
              
            </section>
          </div>
        </article>
    `)
 }

/* <a href="./publicacion_lectura.html" class="btn btn-primary">Ver mas . . .</a> */
const printCards = (container, cards) =>
  (document.getElementById(container).innerHTML = cards.join("")); //id = "user-cards"
const printHTML = (id, message) =>
  (document.getElementById(id).innerHTML = message);
const printText = (id, message) =>
  (document.getElementById(id).innerText = message);

// const getDataAPI = async ( url ) => {
//     const resolve = await fetch( url );
//     const usersData = await resolve.json();
//     const publicaciones = usersData.data;
//     return publicaciones;
// };

const printAll =  () => {
  let data = getData(arregloDePublicacionesName);
  
  printCards("blog-container", cards(data)); /*make and print cards*/
};



const printFiltered = async (filter) => {
  let publicaciones = dataPrueba; //await getDataAPI(url);
  let data = [];
  for (let publicacion of publicaciones) {
    if (publicacion.categories.includes(filter)) data.push(publicacion); //.toLowerCase()
  }
  printCards("blog-container", cards(data));
};

const categoriaTodos = document.getElementById("todas-publicaciones");
categoriaTodos.addEventListener("click", () => {
  printAll(url);
});

const categoriaTips = document.getElementById("tips-publicaciones");
categoriaTips.addEventListener("click", () => {
  printFiltered("tips");
});

const categoriaAlimantacion = document.getElementById(
  "alimentacion-publicaciones"
);
categoriaAlimantacion.addEventListener("click", () => {
  printFiltered("alimentacion");
});

const categoriaCuidado = document.getElementById("cuidado-publicaciones");
categoriaCuidado.addEventListener("click", () => {
  printFiltered("cuidado");
});

const categoriaRecetas = document.getElementById("recetas-publicaciones");
categoriaRecetas.addEventListener("click", () => {
  printFiltered("recetas");
});

/* const user = JSON.parse(localStorage.getItem("login-success")) || false;

if (user) {
  document.querySelector(".dropdown").innerHTML = `
      <a href="./src/pages/formulario-login.html" class=" dropdown-toggle"
								type="button" data-bs-toggle="dropdown" aria-expanded="false"><i
									class="fa-regular fa-user" title="Login / Registro"></i></a>
							<ul class="dropdown-menu">
								<li><a class="dropdown-item logout" href="#">Cerrar Sesión</a></li>
							</ul>
							<span class="client-name"></span>
							<a href="./carrito.html"><i class="fa-solid fa-cart-shopping"
									title="Carrito"></i></a>
      `;
  document.querySelector(
    ".client-name"
  ).innerHTML = `${user.name} ${user.lastName}`;
} */
document.addEventListener("DOMContentLoaded", () => {
  const logout = document.querySelector(".logout");
  if (logout) {
    logout.addEventListener("click", () => {
      alert("Hasta Pronto!");
      localStorage.removeItem("login-success");

      document.querySelector(".dropdown").innerHTML = `
      <a href="../pages/formulario-login.html"><i
                  class="fa-regular fa-user" title="Login / Registro"></i></a>
                  
              <a href="../pages/carrito.html"><i class="fa-solid fa-cart-shopping"
                  title="Carrito"></i></a>
      `;
    });
  }
});

   const getDataAPI = async (nameData, url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Error en la solicitud get');
      }
      const data = await response.json(); // o response.text(), response.blob(), etc. dependiendo del tipo de respuesta esperada
  
      // Hacer algo con la respuesta
      console.log(data);
      setProducts(nameData, data);
  
      // Guardar los datos en localStorage
      localStorage.setItem(nameData, JSON.stringify(data));
  
      // Llamar a la función printAll después de obtener y procesar los datos
      printAll();
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  getDataAPI(arregloDePublicacionesName, url);