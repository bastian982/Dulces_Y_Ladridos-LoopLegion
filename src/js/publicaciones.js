//import { getProducts } from "./localStorage.js";
const getData = (nameData) => {
  return JSON.parse(localStorage.getItem(nameData));
};
const setProducts = (nameData, data) => {
  localStorage.setItem(nameData, JSON.stringify(data));
};

const arregloDePublicacionesName = "arregloDePublicaciones";
let url = "../json/publicaciones.json";
const dataPrueba = getData(arregloDePublicacionesName);
console.log(dataPrueba);

const printThisPublication = async (id) => {
  let data = dataPrueba; // await getDataAPI(url);
  let info = data[id - 1];
  let message = `
    <div class="row text-center justify-content-center my-3">
      <h1 class="mb-3">${info.title}</h1>
      <p id="paragraph-content" class="text-start"></p>
      <img src="../img/perrito.jpg" class=" mt-3" alt="..." style="width: 45%"> 
      <h4 class="mb-3 text-end">By: ${info.autor.first_name} ${info.autor.last_name}</h4>
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
      <h4 class="mb-3 text-end">By: ${info.autor.first_name} ${info.autor.last_name}</h4>
    </div>
  `;
  printHTML("blog-container", message);
  printText("paragraph-content", `${info.content}`);
  console.log(id);
};

const cards = (publicaciones) =>
  publicaciones.map(
    (data) => `
    <article class="card col-3 m-4 p-0 icon-link-hover" style="width: 21rem;" category="Tips" style="width: 27%;" >
          <img src="../img/perrito.jpg" class="card-img-top mt-3" alt="...">
          <div class="card-body">
            <h5 class="card-title">${data.title}</h5>
            <h6 class="card-title">${data.autor.first_name} ${data.autor.last_name}</h6>
            <p class="card-text">${data.description}</p>
            <section class="d-flex justify-content-around">
              <button onclick="printThisPublication(${data.id})" class="btn btn-primary my-1" >Ver mas ...</button>
              
            </section>
          </div>
        </article>
    `
  );
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

const printAll = async (url) => {
  let data = dataPrueba; //await getDataAPI(url);
  printCards("blog-container", cards(data)); /*make and print cards*/
};

printAll(url);

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