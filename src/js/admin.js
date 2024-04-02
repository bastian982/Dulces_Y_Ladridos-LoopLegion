
const arregloDeProductosName = "arregloDeProductos";

export const getProducts = (nameData) => {
    return JSON.parse(
      localStorage.getItem(nameData)
    );  
  }
  export const setProducts = (nameData,data) => {
     localStorage.setItem(nameData, JSON.stringify(data));  
  }
  function deleteProduct(event) {

    console.log("delete");
    let id = event.target.id.slice(0,-9);
    const products  = getProducts(arregloDeProductosName);
    let index =  products.indexOf(products.filter(product => product.id ==id)[0] );
    products.splice(index,1)
     setProducts(arregloDeProductosName,products)   
     createTable();
  }

function createTable() {
    const updateTable = document.getElementById("updateTable");
    updateTable.innerHTML =`
    <div class="container pt-5">
      <table class="table table-info table-striped ">
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
  </table></div>`
  ;
  createBodyTable()
  }
  
  function createBodyTable() {
    let data = getProducts(arregloDeProductosName);
    const tBody = document.getElementById("tbody")
      console.log(data);
    data.map(({ id, name, dogoName, description, price, pieces,imagen }) => {
      console.log(id, name, dogoName, description, price, pieces);
      tBody.innerHTML += `<tr>
                  <th scope="row">${id}</th>
                  <td>${name}</td>
                  <td>${dogoName}</td>
                  <td>${ description}</td>
                  <td>${ price}</td>
                  <td>${ pieces}</td>
               <td><img src=${imagen} class="rounded-circle" alt="${name}"></td>
               <td><button type="button" id="${id}buttonDel" class="btn" ><ion-icon name="trash-outline"></ion-icon>Borrar</button></td>
               <td><button type="button" id="${id}buttonUpd" class="btn" ><ion-icon name="sync"></ion-icon>Modificar</button></td>
              </tr>`;

    });
    data.map(({id})=> document.getElementById(`${id}buttonDel`).addEventListener('click', deleteProduct))

  }
  createTable();

