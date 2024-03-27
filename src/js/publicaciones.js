let url = "../json/publicaciones.json";

const cards = (publicaciones) =>
publicaciones.map( data => `
    <article class="card m-3 col-md-12 col-sm-12" category="Tips" style="width: 27%;" ><!--  -->
          <img src="../img/perrito.jpg" class="card-img-top mt-3" alt="...">
          <div class="card-body">
            <h5 class="card-title">${data.title}</h5>
            <h6 class="card-title">${data.autor.first_name} ${data.autor.last_name}</h6>
            <p class="card-text">${data.description}</p>
            <button onclick="printThisPublication(${data.id})" class="btn btn-primary" >Ver mas . . .</button>
          </div>
        </article>
    ` );
/* <a href="./publicacion_lectura.html" class="btn btn-primary">Ver mas . . .</a> */
const printCards = ( container,cards ) => document.getElementById(container).innerHTML = cards.join(""); //id = "user-cards"
const printMessage = (id,message) =>  document.getElementById(id).innerHTML = message ;

const getDataAPI = async ( url ) => {
    const resolve = await fetch( url );
    const usersData = await resolve.json();
    const publicaciones = usersData.data;
    //console.log(publicaciones);
    return publicaciones;
};

const printAll = async(url) => { 
  let data = await getDataAPI(url);
  printCards("blog-container",cards(data)); /*make and print cards*/ 
};

printAll(url);

const printFiltered = async(filter) => {
  let publicaciones = await getDataAPI(url);
  let data = [];
  for(let publicacion of publicaciones){
    if(publicacion.categories.includes(filter)) data.push(publicacion);  //.toLowerCase()
  }
  printCards("blog-container",cards(data));
};

const categoriaTodos = document.getElementById("todas-publicaciones");
categoriaTodos.addEventListener("click", ()=>{
  printAll(url);
});

const categoriaTips = document.getElementById("tips-publicaciones");
categoriaTips.addEventListener("click", ()=>{
  printFiltered("tips");
});

const categoriaAlimantacion = document.getElementById("alimentacion-publicaciones");
categoriaAlimantacion.addEventListener("click", ()=>{
  printFiltered("alimentacion");
});

const categoriaCuidado = document.getElementById("cuidado-publicaciones");
categoriaCuidado.addEventListener("click", ()=>{
  printFiltered("cuidado");
});

const categoriaRecetas = document.getElementById("recetas-publicaciones");
categoriaRecetas.addEventListener("click", ()=>{
  printFiltered("recetas");
});


const printThisPublication = async(id) => { 
  console.log(id);
  let data = await getDataAPI(url);
  let info = data[id-1];
  console.log(info);
  let message = `
    <div class="row text-center justify-content-center my-5">
    <h1>${info.title}</h1>
    <p>${info.content}</p>
    <img src="../img/perrito.jpg" class=" mt-3" alt="..." style="width: 45%">
    
    </div>
  `;
  printMessage("blog-container",message);
};
/* <button onclick="printAll(url)" class="btn btn-primary col-2" >Return</button> */