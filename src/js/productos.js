let url = "../json/productos.json";
document.addEventListener('DOMContentLoaded', function() {
  // Llamar a la función que deseas ejecutar cuando la página se carga
  printAll();
});
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




const addToCart = (productoId) => {
  const productosCarrito = JSON.parse(localStorage.getItem("productosCarrito")) || [];
  const productosIndex = productosCarrito.reduce((acc, tarjeta, index) => {
    acc[tarjeta.id] = index;
    return acc;
  }, {});

  if (productosIndex[productoId] !== undefined) {
    alert("Este producto ya está en el carrito");
    return;
  }

  const producto = getProducts().find(producto => producto.id === productoId);
  productosCarrito.push(producto);
  localStorage.setItem("productosCarrito", JSON.stringify(productosCarrito));
  alert("Producto agregado al carrito");
}



const cards = (productos) => {
  return productos.map((producto, index) => `
    <div class="card col-3 m-2 p-0 ${index % 2 === 0 ? 'cardNaranja' : 'cardCafe'}  style="width: 21rem;">
      <img src="${producto.imagen}"  class="card-img-top mt-2 img-card" alt="...">
      <div class="card-body">
        <h6 class="card-title">${producto.name}</h6>
        <p class="card-text">$ ${producto.price}</p>
        <div class="text-end">
          <button id="${producto.id}cartBtn" class="btnProduct" > <img src="../img/carrito.png" alt=""> </button>
        </div> 
      </div>
    </div>
  `);
};

/* <a href="./publicacion_lectura.html" class="btn btn-primary">Ver mas . . .</a> */
const printCards = (container, cards) =>{
  (document.getElementById(container).innerHTML = cards.join(""));


document.querySelectorAll('.btnProduct').forEach(btn => {
  btn.addEventListener('click', () => {
    const productoId = btn.id.replace('cartBtn', ''); // Obtener el ID del producto
    addToCart(productoId);
  });
});
}

const printAll = /*async*/ () => {
  let data = getProducts(); //await getProducts(url);
  console.log(data);
  printCards("cards", cards(data));
}

// Función para imprimir las publicaciones filtradas por categoría
const printFiltered = async (filter) => {
  let data = getProducts();
  console.log(data)
  let dataFiltered = data.filter(producto => {
    // Verifica que producto.classification existe antes de usarlo
    return producto.classification && producto.classification.includes(filter);
  });
  console.log(dataFiltered)
  printCards("cards", cards(dataFiltered));
};

// Event listeners para los botones de filtro por categoría
const categoriaTodas = document.getElementById("categoria-todas");
categoriaTodas.addEventListener("click", () => {
  printAll();
});

const categoriaPasteles = document.getElementById("categoria-pasteles");
categoriaPasteles.addEventListener("click", () => {
  console.log("hola");
  printFiltered("Pasteles");
});

const categoriaGalletas = document.getElementById("categoria-galletas");
categoriaGalletas.addEventListener("click", () => {
  console.log("hola");
  printFiltered("Galleta");
});

const categoriaBrownies = document.getElementById("categoria-brownies");
categoriaBrownies.addEventListener("click", () => {
  console.log("hola");
  printFiltered("Brownie");
});

document.addEventListener('DOMContentLoaded', () => {
  const user = JSON.parse(localStorage.getItem('login-success')) || false;
  if (user) {
      const dropdown = document.querySelector('.dropdown-login');
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
  
          const dropdown = document.querySelector('.dropdown-login');
          if (dropdown) {
              dropdown.innerHTML = `
                  <a href="./formulario-login.html"><i class="fa-regular fa-user" title="Login / Registro"></i></a>
                  <a href="./carrito.html"><i class="fa-solid fa-cart-shopping" title="Carrito"></i></a>
              `;
          }
      });
  }
});



