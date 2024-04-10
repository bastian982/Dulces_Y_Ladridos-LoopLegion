const arregloCarrito = "arregloCarrito";


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