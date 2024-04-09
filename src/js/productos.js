let url = "../json/productos.json";

// const getProducts = async (url) => {
//   const resolve = await fetch(url);
//   const usersData = await resolve.json();
//   const productos = usersData.data;
//   console.log(productos);
//   return productos;
// };
//Función exclusiva para simular el funcionamiento
const getProducts = () => {
  return JSON.parse(
    localStorage.getItem("arregloDeProductos")
  );  
}

const cards = (productos) => {
  return productos.map((producto, index) => `
    <div class="card col-md-4 col-6 m-4 ${index % 2 === 0 ? 'cardNaranja' : 'cardCafe'}" >
      <img src="${producto.imagen}"  class=" card-img-top mt-2" alt="...">
      <div class="card-body">
        <h6 class="card-title">${producto.name}</h6>
        <p class="card-text">$ ${producto.price}</p>
        <div class="text-end">
          <button class="btnProduct"> <img src="../img/carrito.png" alt=""> </button>
        </div> 
      </div>
    </div>
  `);
};

/* <a href="./publicacion_lectura.html" class="btn btn-primary">Ver mas . . .</a> */
const printCards = (container, cards) =>
  (document.getElementById(container).innerHTML = cards.join(""));

const printAll = /*async*/ () => {
  let data = getProducts() //await getProducts(url);
  console.log(data);
  printCards("cards", cards(data));
};

printAll();
