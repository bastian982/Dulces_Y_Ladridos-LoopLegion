
import dataProductos from './src/json/productos.json' with { type: 'json' }
import dataPublicaciones from './src/json/publicaciones.json' with { type: 'json' }

const arregloDeProductosName = "arregloDeProductos";
const arregloDePublicacionesName = "arregloDePublicaciones";
const arregloDeProductos = dataProductos.data;// este arreglo tendría que venir de la API 
const arregloDePublicaciones =dataPublicaciones.data;

function checkDataInLocalStorage (arrayName){
    const storageData = localStorage.getItem(arrayName);
    return (storageData === null)
}
function setDataLocalStorage(name,data) {
    if(checkDataInLocalStorage(name)){localStorage.setItem(name, JSON.stringify(data))}
    else{
      console.log("");    
    };     
}
console.log(checkDataInLocalStorage(arregloDeProductosName));
setDataLocalStorage(arregloDeProductosName,arregloDeProductos);
console.log(checkDataInLocalStorage(arregloDeProductosName));
setDataLocalStorage(arregloDePublicacionesName,arregloDePublicaciones);

export {setDataLocalStorage}

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
							<a href="./src/pages/carrito.html"><i class="fa-solid fa-cart-shopping"
									title="Carrito"></i></a>
      `
  document.querySelector('.client-name').innerHTML = `${user.name} ${user.lastName}`
}

const logout = document.querySelector('.logout');
logout.addEventListener('click', () =>{
  alert('Hasta Pronto!');
  localStorage.removeItem('login-success');

  document.querySelector('.dropdown').innerHTML = `
  <a href="./src/pages/formulario-login.html"><i
              class="fa-regular fa-user" title="Login / Registro"></i></a>
              
          <a href="./src/pages/carrito.html"><i class="fa-solid fa-cart-shopping"
              title="Carrito"></i></a>
  `
})


