import {
    Galleta,
    Pasteles,
    Brownie
  } from "./product-class.js";

import  fs  from 'node:fs'

const arregloDeProductos = [
  new Galleta(
    "Galleta de Chocolate",
    "Terrier de Chocolate",
    "Galleta de chocolate con relleno de chocolate",
    35,
    1,
  ),
    new Galleta(
     "Galleta de Mantequilla",
     "Corgi Cookies",
     "Galleta de mantequilla suave con forma de Corgi",
     120,
     6,
    ), 

    new Galleta(
        "Galleta de Avena",
        "Poodle Oat Puffs",
        "Galleta de avena bañadas en azucar glass",
        35,
        1,
    ), 
   
    new Galleta(
        "Galleta de Chispas",
        "Dalmata Delight",
        "Galleta de mantequilla con chispas de chocolate",
        35,
        1,
    ), 


  new Brownie(
    "Brownie de Chocolate",
    "Labrabownie",
    "Pastelillo de chocolate con relleno de chocolate",
    50,
    1,
  ),
  new Brownie(
    "Brownie de Frambuesa",
    "Pastorcito de Frambuesa",
    "Pastelillo de chocolate con decoracion de frambuesa",
    50,
    1,
  ),
  new Pasteles(
    "Pastel de Tres Leches",
    "Husky de 3 Leches",
    "Pastel de Tres Leches",
    50,
    1,
  ),

  new Pasteles(
    "Pastel de Chocolate",
    "Chocolate Retriever",
    "Pastel de chocolate con cubierta de chocolate",
    50,
    1,
  ),

  new Pasteles(
    "Pastel de Zanahoria",
    "Pug de zanahoria /carrot bite",
    "Pastel de zanahoria con betún de queso crema ",
    50,
    1,
  ),

  new Pasteles(
    "Pastel Cheesecake",
    "Cheehuhua Dream",
    "Pastel de cheesecake con decoracion de chocolate",
    50,
    1,
  ),

];
console.log(arregloDeProductos);

const addDataToJson = (objectToSave) => {
  const data = `{"data":${JSON.stringify(objectToSave)}}`
// getItem traer el arreglo para crear el archivo json
  fs.writeFile("./src/js/productos.json", data, "utf8", (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
};
addDataToJson(arregloDeProductos);

