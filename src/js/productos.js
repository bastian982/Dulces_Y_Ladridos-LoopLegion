let url = "../json/productos.json";

const getProducts = async (url) => {
  const resolve = await fetch(url);
  const usersData = await resolve.json();
  const productos = usersData.data;
  console.log(productos);
  return productos;
};

const cards = (productos) =>
  productos.map(
    (data) => `
<div class="card col-md-4 m-4" >
<img src="../img/default.png" class="card-img-top mt-2" alt="...">
<div class="card-body">
  <h6 class="card-title">${data.name}</h6>
  <p class="card-text">$ ${data.price}</p>
  <div class="text-end">
    <button class="btnProduct"> <img src="../img/carrito.png" alt=""> </button>
  </div> 
</div>
</div>
    `
  );
/* <a href="./publicacion_lectura.html" class="btn btn-primary">Ver mas . . .</a> */
const printCards = (container, cards) =>
  (document.getElementById(container).innerHTML = cards.join(""));

const printAll = async (url) => {
  let data = await getProducts(url);
  printCards("cards", cards(data));
};

printAll(url);
