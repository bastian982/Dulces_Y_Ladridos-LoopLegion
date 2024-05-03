
import dataProductos from './src/json/productos.json' with { type: 'json' }
import dataPublicaciones from './src/json/publicaciones.json' with { type: 'json' }

const arregloDeProductosName = "arregloDeProductos";
const arregloDePublicacionesName = "arregloDePublicaciones";
const arregloDeProductos = dataProductos.data;// este arreglo tendría que venir de la API 
const arregloDePublicaciones =dataPublicaciones.data;
const url = `http://localhost:8080/api/v1/products`
fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Error en la solicitud get');
    }
    return response.json(); // o response.text(), response.blob(), etc. dependiendo del tipo de respuesta esperada
  })
  .then(data => {
    // Hacer algo con la respuesta

    console.log(data);
    setDataLocalStorage(arregloDeProductosName,data);
  })
  .catch(error => {
    console.error('Error:', error);
  });


function checkDataInLocalStorage (arrayName){
    const storageData = localStorage.getItem(arrayName);
    return (storageData === null)
}
function setDataLocalStorage(name,data) {
    localStorage.setItem(name, JSON.stringify(data))
  }
     

console.log(checkDataInLocalStorage(arregloDeProductosName));

console.log(checkDataInLocalStorage(arregloDeProductosName));
setDataLocalStorage(arregloDePublicacionesName,arregloDePublicaciones);

export {setDataLocalStorage}


const getInfoUser = async (id) => {
    const url = `http://localhost:8080/api/v1/users/${id}`
    const token = localStorage.getItem("token");
    try{
const response = await fetch(url, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });
  const user = await response.json();
  console.log(typeof user);
  localStorage.setItem("user", JSON.stringify(user));
  console.log("USER" +usuario);
    } catch(err){
      console.log(err);
    }
  // console.log(response.status);
  //  usuario = response.json();
  //  console.log(usuario);
  // return usuario;
  
};

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
};
     


  const user = JSON.parse(localStorage.getItem('idUser')) || false;
  if (user ){
    console.log("funcion");
    getInfoUser(user);
    const usuario =JSON.parse(localStorage.getItem("user"));
    console.log(usuario); 
    
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
 
    document.querySelector('.client-name').innerHTML = `${usuario.firstName} ${usuario.lastName}`
  }


document.addEventListener('DOMContentLoaded', () => {
  const logout = document.querySelector('.logout');
  if (logout) {
      logout.addEventListener('click', () => {
          alert('Hasta Pronto!');
          localStorage.removeItem('idUser');
  
          const dropdown = document.querySelector('.dropdown');
          if (dropdown) {
              dropdown.innerHTML = `
                  <a href="./src/pages/formulario-login.html"><i class="fa-regular fa-user" title="Login / Registro"></i></a>
                  <a href="./src/pages/carrito.html"><i class="fa-solid fa-cart-shopping" title="Carrito"></i></a>
              `;
          }
      });
  }
});