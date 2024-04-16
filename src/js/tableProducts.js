
import { getProducts, setProducts } from './localStorage.js'; //Usamos las funciones para manipular la información en el local Storage
const arregloDeProductosName = "arregloDeProductos";
/**
 * Función que elimina el producto del arreglo como así como actualizar la información en la tabla
 */
  function deleteProduct(event) {
    console.log("delete");
    let id = event.target.id.slice(0,-9);
    const products  = getProducts(arregloDeProductosName);
    let index =  products.indexOf(products.filter(product => product.id ==id)[0] );
    products.splice(index,1)
     setProducts(arregloDeProductosName,products)   
     createTable();
  }
  /**
   * Funcion que habilita los campos para editar la información de los productos
   */
  function updateProduct(event) {
    event.preventDefault();
    const idElement =event.target.id.slice(0,-9);
    document.getElementById(`${idElement}buttonUpd`).style.visibility = "collapse";
    document.getElementById(`${idElement}buttonSav`).style.visibility = "visible";
    const elements = document.getElementsByClassName(`${idElement}inputAdmin`)
    console.log(elements);
   for (const e of elements) {
     e.disabled  =false;   
    }
    // const products  = getProducts(arregloDeProductosName);
  }
  /**
   * Función que cambia los valores del producto así, y actualiza el local storage junto con la tabla
   */
  function changeCell (idElement,key,value){
    const products  = getProducts(arregloDeProductosName);
    let index =  products.indexOf(products.filter(product => product.id ==idElement)[0] );
    let product = products[index];
    switch (key) {
        case 0:
           product.name = value;  
           console.log(products);        
            break;
            case 1:
            product.dogoName= value; 
            break;
            case 2:
            product.description = value;
            break;
            case 3:
            product.price = value;
            break;
            case 4:
            product.pieces = value;
            break;
        default:
            break;
    }
    setProducts(arregloDeProductosName,products);
    createTable();

  }
  /**
   * Función que captura la informacion colocada en los campos editados
   */
function  saveChanges (event) {
    console.log("save");
    const idElement =event.target.id.slice(0,-9);
    const elements = document.getElementsByClassName(`${idElement}inputAdmin`);
    let count = 0;
    for (const e of elements) {
        if( e.value !== ""){
            changeCell(idElement,count++,e.value);
        } 
        count++;   
    };
    document.getElementById(`${idElement}buttonUpd`).style.visibility = "visible";
    document.getElementById(`${idElement}buttonSav`).style.visibility = "collapse";

}
/**
 * Funcion que crea las columnas o atributos de la tabla
 */
export function createTable() {
    const updateTable = document.getElementById("updateTable");
    updateTable.innerHTML =`
    <div class="container-fluid p-0">
      <table class="table productTable">
    <thead>
      <tr>
        <th scope="col">id</th>
        <th scope="col">name</th>
        <th scope="col">dogoName</th>
        <th scope="col">description</th>
        <th scope="col">price</th>
        <th scope="col">pieces</th>
        <th scope="col">imagen</th>
        <th scope="col" colspan="2">Acciones</th>
      </tr>
    </thead>
    <tbody id="tbody">
    </tbody>
  </table>
</div>`
  ;
  createBodyTable();
  }
  /**
   * Función que añade los datos a la tabla tomados desde el localstorage y añade las funciones a los botones para editar.
   */
  function createBodyTable() {
    let data = getProducts(arregloDeProductosName);
    const tBody = document.getElementById("tbody")
    data.map(({ id, name, dogoName, description, price, pieces,imagen }) => {
      tBody.innerHTML += `<tr>
                  <th class="productsRow" scope="row">${id}</th>
                  <td class="productsRow"><input class="${id}inputAdmin " style="width: 7.5rem;"  type="text" placeholder="${name}" disabled></td>
                  <td class="productsRow"><input class="${id}inputAdmin" style="width: 7.5rem;" type="text" placeholder="${dogoName}" disabled></td>
                  <td class="productsRow"><input class="${id}inputAdmin" style="width: 8rem;" type="text" placeholder="${ description}" disabled ></td>
                  <td class="productsRow"><input class="${id}inputAdmin" style="width: 3rem;" type="text" placeholder="${ price}" disabled></td>
                  <td class="productsRow"><input class="${id}inputAdmin" style="width: 3rem;" type="number" min="0" placeholder="${ pieces}" disabled></td>
                  <td class="productsRow" style="width: 7rem;"><img src=${imagen}  class="rounded img-fluid" alt="${name}"></td>
                  <td class="productsRow" style="width: 4rem;"><button type="button" id="${id}buttonDel" class="btn ${id}Row btn-danger-subtle" >Borrar</button></td>
                  <td class="productsRow" style="width: 4rem;"><button type="button" id="${id}buttonUpd" class="btn ${id}Row btn-info" >Modificar</button><button type="button" id="${id}buttonSav" class="btn ${id}Row btn-success" style="visibility:collapse;">Guardar</button></td>
              </tr>`;

    });
    data.map(({id})=> document.getElementById(`${id}buttonDel`).addEventListener('click', deleteProduct));
    data.map(({id})=> document.getElementById(`${id}buttonUpd`).onclick =updateProduct);
    data.map(({id})=> document.getElementById(`${id}buttonSav`).onclick =saveChanges);
  }
  createTable();

