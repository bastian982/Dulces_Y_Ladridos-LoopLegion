
import {
  Postre,
  Galleta,
  Pasteles,
  Brownie,
} from "../../Productos/product-class.js";
import { createTable } from './tableProducts.js';
import { setProducts as setData, getProducts as getData } from "./localStorage.js";

const arregloDeProductosName = "arregloDeProductos";
const addForm = document.getElementById("addForm");

/**
 * Función que recupera los valores del formualario para crear el producto
 * @param {*} event 
 */
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
  const arregloDeProductos = getData(arregloDeProductosName);
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
  setData("arregloDeProductos", arregloDeProductos);
  createTable();
  resetForm();  
}
/**
 * Función que resetea el formulario de productos
 */
function resetForm() {

  const nameAddInput = document.getElementById("nameAddInput").value = "";
  const dogoNameAddInput = document.getElementById("dogoNameAddInput").value = "";
  const descriptionAddInput = document.getElementById(
    "descriptionAddInput"
  ).value = "";
  const priceAddInput = document.getElementById("priceAddInput").value="";
  const piecesAddInput = document.getElementById("piecesAddInput").value=0;
  const imageAddInput = document.getElementById("imageAddInput").value ="";
}
/**
 * Funcion que crea el nuevo producto de acuerdo a la información recibida en el formulario
 */
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
