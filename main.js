
import dataProductos from './src/json/productos.json' with { type: 'json' }
import dataPublicaciones from './src/json/publicaciones.json' with { type: 'json' }

const arregloDeProductosName = "arregloDeProductos";
const arregloDePublicacionesName = "arregloDePublicaciones";
const arregloDeProductos = dataProductos.data;// este arreglo tendría que venir de la API 
const arregloDePublicaciones =dataPublicaciones.data;

function checkDataInLocalStorage (arrayName){
    const storageData = localStorage.getItem(arrayName);
    return (storageData === null)
}
function setDataLocalStorage(name,data) {
    if(checkDataInLocalStorage(name)){localStorage.setItem(name, JSON.stringify(data))}
    else{
      console.log("");    
    };     
}
console.log(checkDataInLocalStorage(arregloDeProductosName));
setDataLocalStorage(arregloDeProductosName,arregloDeProductos);
console.log(checkDataInLocalStorage(arregloDeProductosName));
setDataLocalStorage(arregloDePublicacionesName,arregloDePublicaciones);

export {setDataLocalStorage}
