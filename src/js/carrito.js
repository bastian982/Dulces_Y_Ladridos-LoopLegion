const arregloCarrito = "arregloCarrito";

function addToCart(){

  const table = document.getElementById("table-carrito");
  //const total = parseFloat(quantity) * parseFloat(price);
  table.innerHTML += `
        <tr >
          <tr >
              <th  scope="row" rowspan = "2">Imagen</th>
              <td>Nombre</td>
              <td>Cantidad</td>
              <td>Precio unitario</td>
          </tr>
          <tr>
              <td>Ingredientes</td>
              <td>Descuento</td>
              <td>Precio Total</td>
          </tr>
        </tr>
  `
}




function addData(event) {
  event.preventDefault();
  const typeProduct = document.getElementById("typeProduct").value;
  const nameAddInput = document.getElementById("nameAddInput").value;
  const dogoNameAddInput = document.getElementById("dogoNameAddInput").value;
  const descriptionAddInput = document.getElementById(
    "descriptionAddInput"
  ).value;
  const priceAddInput = document.getElementById("priceAddInput").value;
  const piecesAddInput = document.getElementById("piecesAddInput").value;
  const imageAddInput = document.getElementById("imageAddInput").value;
  const arregloCarrito = JSON.parse(
    localStorage.getItem("arregloCarrito")
  );
  let productToAdd = createProduct(
    typeProduct,
    nameAddInput,
    dogoNameAddInput,
    descriptionAddInput,
    priceAddInput,
    piecesAddInput
  );
  productToAdd.id = productToAdd.id +5;//Borrar linea cuando ya este funcionando el backend
  arregloCarrito.push(productToAdd);
  console.log(arregloCarrito);
  localStorage.setItem("arregloCarrito", JSON.stringify(arregloCarrito));
  
}