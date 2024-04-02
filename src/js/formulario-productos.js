// // Import our custom CSS
import '../scss/styles.scss';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import {
  Postre,
  Galleta,
  Pasteles,
  Brownie,
} from "../../Productos/product-class.js";
import { createTable, getProducts } from './admin.js';


const arregloDeProductosName = "arregloDeProductos";
const addForm = document.getElementById("addForm");


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
  const arregloDeProductos = JSON.parse(
    localStorage.getItem("arregloDeProductos")
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
  arregloDeProductos.push(productToAdd);
  console.log(arregloDeProductos);
  localStorage.setItem("arregloDeProductos", JSON.stringify(arregloDeProductos));
  
}

function createProduct(
  option,
  nameAddInput,
  dogoNameAddInput,
  descriptionAddInput,
  priceAddInput,
  piecesAddInput
) {
  switch (option) {
    case "Galleta":
      return new Galleta(
        nameAddInput,
        dogoNameAddInput,
        descriptionAddInput,
        priceAddInput,
        piecesAddInput
      );
      break;
    case "Pastel":
      return new Pasteles(
        nameAddInput,
        dogoNameAddInput,
        descriptionAddInput,
        priceAddInput,
        piecesAddInput
      );
      break;
    case "Brownie":
      return new Brownie(
        nameAddInput,
        dogoNameAddInput,
        descriptionAddInput,
        priceAddInput,
        piecesAddInput
      );

    default:
      break;
  }
  createTable();
}

addForm.onsubmit = addData;
