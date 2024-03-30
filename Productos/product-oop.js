import { Galletas } from "./product-class.js";
const galletaChocolate = new Galletas("Galleta de Chocolate");

galletaChocolate.dogoName = "Terrier de Chocolate";
galletaChocolate.description = "Deliciosa galleta hecha con harina de trigo y chocolate";
console.table(galletaChocolate);

const galletaAvena = new Galletas ("Galleta de Avena"); 
galletaAvena.dogoName= "Poodle Oat Puffs";
galletaAvena.description="";
console.table(galletaAvena);


const galletaMantequilla = new Galletas ("Galleta de Mantequilla"); 
galletaMantequilla.dogoName= "Corgi Cookies";
galletaMantequilla.description="";
console.table(galletaMantequilla);

const galletaChispas= new Galletas ("Galleta de Chispas de Chocolate"); 
galletaChispas.dogoName= "Dalmata Delight";

