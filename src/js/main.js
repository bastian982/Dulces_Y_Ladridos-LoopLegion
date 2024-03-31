// // Import our custom CSS
import '../scss/styles.scss';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import data from './productos.json' assert { type: 'json' }
const arregloDeProductos = data.data;// este arreglo tendría que venir de la API o del archivo JSON
console.log(arregloDeProductos);
localStorage.setItem("arregloDeProductos", JSON.stringify(arregloDeProductos));
