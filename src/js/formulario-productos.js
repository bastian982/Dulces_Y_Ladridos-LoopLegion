
import {
  Postre,
  Galleta,
  Pasteles,
  Brownie,
} from "../../Productos/product-class.js";
import { createTable } from './tableProducts.js';
import { setProducts as setData, getProducts as getData, getProducts } from "./localStorage.js";

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
  let product = {
    name:nameAddInput,
    dogoName: dogoNameAddInput,
    description: descriptionAddInput,
    price: priceAddInput,
    quantity: piecesAddInput,
    imageUrl: imageAddInput,
    productCategory: {
      id:typeProduct,
    }
  }
  postProduct(product);
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


const postProduct = async(productData)=>{
  let data = JSON.stringify(productData);
console.log("postProduct iniciado" +data);
  // URL a la que enviar la solicitud
  const url = 'http://localhost:8080/api/v1/products';
  const token = localStorage.getItem("token");
  try {
    const response = await fetch(url, {
      method: "POST",
      body: data,
      headers: { 
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
        },
    });
    console.log(response);
    if (!response.ok) {
      throw new Error(`HTTP error status: ${response.status}`);
    }else{
      createTable();
      getProducts(arregloDeProductosName,url);
      createTable();
    }
  
} 
  catch (error) {
 console.error("Error al obtener el token:", error);
  }
  
}