// Importa las funciones getProducts y setProducts desde el archivo localStorage.js
import { getProducts, setProducts } from './localStorage.js';
import { getProducts, setProducts } from './localStorage.js'; 

// Nombre del arreglo de publicaciones en el localStorage
const arregloDePublicacionesName = "arregloDePublicaciones";

// Función para eliminar una publicación
  function deletePublicacion(event) {
    console.log("delete");
    // Obtiene el id de la publicación a partir del evento
    let id = event.target.id.slice(0,-9);
    // Obtiene todas las publicaciones
    const products  = getProducts(arregloDePublicacionesName);
    // Busca la publicación a eliminar por su id
    let index =  products.indexOf(products.filter(product => product.id ==id)[0] );
    // Elimina la publicación del arreglo
    products.splice(index,1)
    // Guarda los cambios en el localStorage
     setProducts(arregloDePublicacionesName,products) 
    // Vuelve a crear la tabla de publicaciones  
     createTablePublicacion();
  }

  // Función para actualizar una publicación
  function updatePublicacion(event) {
    event.preventDefault();
    console.log(event)
    // Obtiene el id de la publicación a partir del evento
    const idElement =event.target.id.slice(0,-9);
    // Oculta el botón de actualizar y muestra el botón de guardar
    document.getElementById(`${idElement}buttonUpd`).style.visibility = "hidden";
    document.getElementById(`${idElement}buttonSav`).style.visibility = "visible";
    // Habilita la edición de los campos de la publicación
    const elements = document.getElementsByClassName(`${idElement}inputAdmin`)
    console.log(elements);
   for (const e of elements) {
     e.disabled  =false;   
    }
    // const products  = getProducts(arregloDePublicacionesName);
  }

  // Función para cambiar el contenido de una celda de la tabla de publicaciones
  function changeCellPublicacion (idElement,key,value){
    const products  = getProducts(arregloDePublicacionesName);
    // Busca la publicación por su id en el arreglo
    let index =  products.indexOf(products.filter(product => product.id ==idElement)[0] );
    let product = products[index];
    // Actualiza el valor del campo correspondiente
    switch (key) {
        case 0:
           product.title = value;  
           console.log(products);        
            break;
            case 1:
            product.description= value; 
            break;
            case 2:
            product.content = value;
            break;
            case 3:
            product.categories = value;
            break;
            case 4:
            product.autor.first_name = value;
            break;
        default:
            break;
    }
    // Guarda los cambios en el localStorage
    setProducts(arregloDePublicacionesName,products);
    // Vuelve a crear la tabla de publicaciones
    createTablePublicacion();

  }

// Función para guardar los cambios realizados en la edición de una publicación
function  saveChanges (event) {
    console.log("save");
    // Obtiene el id de la publicación a partir del evento
    const idElement =event.target.id.slice(0,-9);
    // Obtiene todos los elementos de edición de la publicación
    const elements = document.getElementsByClassName(`${idElement}inputAdmin`);
    let count = 0;
    for (const e of elements) {
      // Si el valor del campo no está vacío, actualiza la celda correspondiente
        if( e.value !== ""){
            console.log(count);
            changeCellPublicacion(idElement,count++,e.value);
        } 
        count++;
    console.log();   
    };
    // Muestra el botón de actualizar y oculta el botón de guardar
    document.getElementById(`${idElement}buttonUpd`).style.visibility = "visible";
    document.getElementById(`${idElement}buttonSav`).style.visibility = "hidden";
    // for (const e of elements) {
    //     e.disabled  =true;   
    //    }
    console.log(idElement);
}
// Función para crear la tabla de publicaciones en el documento HTML
export function createTablePublicacion() {
  // Selecciona el elemento donde se insertará la tabla de publicaciones
    const updateTable = document.getElementById("tablePublicaciones");
    // Crea la estructura de la tabla
    updateTable.innerHTML =`
    <div class="container-fluid pt-5">
      <table class="table table-info table-striped ">
    <thead>
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Título</th>
        <th scope="col">Descripción</th>
        <th scope="col">Contenido</th>
        <th scope="col">Categorías</th>
        <th scope="col">Autor</th>
        <th scope="col">Imagen</th>
        <th scope="col" colspan="2">Acciones</th>
      </tr>
    </thead>
    <tbody id="tbodyPublicaciones">
    </tbody>
  </table>
</div>`
  ;
  // Llama a la función para crear el cuerpo de la tabla
  createBodyTablePublicacion();
  }
  // Función para crear el cuerpo de la tabla de publicaciones
  function createBodyTablePublicacion() {
    // Obtiene todas las publicaciones
    let data = getProducts(arregloDePublicacionesName);
    // Selecciona el cuerpo de la tabla
    const tBody = document.getElementById("tbodyPublicaciones")
    // Itera sobre cada publicación y la agrega a la tabla
    data.map(({ id, title, description, content, image, autor,categories }) => {
      tBody.innerHTML += `<tr>
                  <th class="${id}Row" scope="row">${id}</th>
                  <td class="${id}Row"><input class="${id}inputAdmin " style="width: 7.5rem;"  type="text" placeholder="${title}" disabled></td>
                  <td class="${id}Row"><input class="${id}inputAdmin" style="width: 7.5rem;" type="text" placeholder="${description}" disabled></td>
                  <td class="${id}Row"><input class="${id}inputAdmin" style="width: 8rem;" type="text" placeholder="${ content}" disabled ></td>
                  <td class="${id}Row"><input class="${id}inputAdmin" style="width: 3rem;" type="text" placeholder="${ categories}" disabled></td>
                  <td class="${id}Row"><input class="${id}inputAdmin" style="width: 3rem;" type="number" min="1" placeholder="${autor.first_name}" disabled></td>
                  <td class="${id}Row"><img src=${image} class="rounded-circle" alt="${title}"></td>
                  <td class="${id}Row"><button type="button" id="${id}buttonDel" class="btn ${id}Row btn-danger-subtle" >Borrar</button></td>
                  <td class="${id}Row"><button type="button" id="${id}buttonUpd" class="btn ${id}Row btn-info" >Modificar</button>
                  <button type="button" id="${id}buttonSav" class="btn ${id}Row btn-success" style="visibility:hidden;">Guardar</button></td>
              </tr>`;

    });
    // Agrega eventos a los botones de borrar, modificar y guardar
    data.map(({id})=> document.getElementById(`${id}buttonDel`).addEventListener('click', deletePublicacion));
    data.map(({id})=> document.getElementById(`${id}buttonUpd`).onclick =updatePublicacion);
    data.map(({id})=> document.getElementById(`${id}buttonSav`).onclick =saveChanges);

  }
  // Crea la tabla de publicaciones al cargar la página
  createTablePublicacion();

