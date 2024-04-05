import { getProducts, setProducts } from './localStorage';
const arregloDePublicacionesName = "arregloDePublicaciones";


  function deletePublicacion(event) {
    console.log("delete");
    let id = event.target.id.slice(0,-9);
    const products  = getProducts(arregloDePublicacionesName);
    let index =  products.indexOf(products.filter(product => product.id ==id)[0] );
    products.splice(index,1)
     setProducts(arregloDePublicacionesName,products)   
     createTablePublicacion();
  }
  function updatePublicacion(event) {
    event.preventDefault();
    console.log(event)
    const idElement =event.target.id.slice(0,-9);
    document.getElementById(`${idElement}buttonUpd`).style.visibility = "hidden";
    document.getElementById(`${idElement}buttonSav`).style.visibility = "visible";
    const elements = document.getElementsByClassName(`${idElement}inputAdmin`)
    console.log(elements);
   for (const e of elements) {
     e.disabled  =false;   
    }
    // const products  = getProducts(arregloDePublicacionesName);
  }
  function changeCellPublicacion (idElement,key,value){
    const products  = getProducts(arregloDePublicacionesName);
    let index =  products.indexOf(products.filter(product => product.id ==idElement)[0] );
    let product = products[index];
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
    setProducts(arregloDePublicacionesName,products);
    createTablePublicacion();

  }
function  saveChanges (event) {
    console.log("save");
    const idElement =event.target.id.slice(0,-9);
    const elements = document.getElementsByClassName(`${idElement}inputAdmin`);
    let count = 0;
    for (const e of elements) {
        if( e.value !== ""){
            console.log(count);
            changeCellPublicacion(idElement,count++,e.value);
        } 
        count++;
    console.log();   
    };
    document.getElementById(`${idElement}buttonUpd`).style.visibility = "visible";
    document.getElementById(`${idElement}buttonSav`).style.visibility = "hidden";
    // for (const e of elements) {
    //     e.disabled  =true;   
    //    }
    console.log(idElement);
}
export function createTablePublicacion() {
    const updateTable = document.getElementById("tablePublicaciones");
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
  createBodyTablePublicacion();
  }
  
  function createBodyTablePublicacion() {
    let data = getProducts(arregloDePublicacionesName);
    const tBody = document.getElementById("tbodyPublicaciones")
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
    data.map(({id})=> document.getElementById(`${id}buttonDel`).addEventListener('click', deletePublicacion));
    data.map(({id})=> document.getElementById(`${id}buttonUpd`).onclick =updatePublicacion);
    data.map(({id})=> document.getElementById(`${id}buttonSav`).onclick =saveChanges);

  }
  createTablePublicacion();

