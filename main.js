
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

document.addEventListener('DOMContentLoaded', () => {
  const user = JSON.parse(localStorage.getItem('login-success')) || false;
  if (user) {
      const dropdown = document.querySelector('.dropdown');
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
  
          const dropdown = document.querySelector('.dropdown');
          if (dropdown) {
              dropdown.innerHTML = `
                  <a href="./formulario-login.html"><i class="fa-regular fa-user" title="Login / Registro"></i></a>
                  <a href="./carrito.html"><i class="fa-solid fa-cart-shopping" title="Carrito"></i></a>
              `;
          }
      });
  }
});