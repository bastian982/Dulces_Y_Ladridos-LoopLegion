document.addEventListener('DOMContentLoaded', function() {
  // Llamar a la función que deseas ejecutar cuando la página se carga
  actualizarTabla();
});

let total=0;
const productosCarrito =
  JSON.parse(localStorage.getItem("productosCarrito")) || [];
// Añadir el atributo 'cantidad' con valor 0 a cada producto
productosCarrito.forEach((producto) => {
  producto.cantidad = 1;
});

// Guardar los cambios en el localStorage
localStorage.setItem("productosCarrito", JSON.stringify(productosCarrito));

function sumar(cantidad, id) {
  const productosCarrito =
  JSON.parse(localStorage.getItem("productosCarrito")) || [];
  console.log(cantidad);
  console.log(id);
  const producto = productosCarrito.find(objeto => objeto.id === id);
  console.log(producto);
  if (producto) {
      // Si se encuentra el objeto, cambiar el atributo deseado
      producto.cantidad = parseInt(cantidad)+1;
      console.log(producto.cantidad);
      
      // Si necesitas guardar los cambios en el localStorage, hazlo aquí
      localStorage.setItem("productosCarrito", JSON.stringify(productosCarrito));

      actualizarTabla();
  } else {
      console.log("Objeto no encontrado con el ID especificado.");
  }
  
}

function restar(cantidad, id) {
  const productosCarrito =
  JSON.parse(localStorage.getItem("productosCarrito")) || [];
  console.log(cantidad);
  console.log(id);
  const producto = productosCarrito.find(objeto => objeto.id === id);
  console.log(producto);
  if(producto.cantidad <= 1){
    eliminarProducto(id);
  }else{
    if (producto) {
      // Si se encuentra el objeto, cambiar el atributo deseado
      producto.cantidad = parseInt(cantidad)-1;
      console.log(producto.cantidad);
      
      // Si necesitas guardar los cambios en el localStorage, hazlo aquí
      localStorage.setItem("productosCarrito", JSON.stringify(productosCarrito));

      actualizarTabla();
  } else {
      console.log("Objeto no encontrado con el ID especificado.");
  }
  }
  
}

function actualizarTabla(){
  console.log("Actualizar tabla");
  const productosCarrito =
  JSON.parse(localStorage.getItem("productosCarrito")) || [];
  console.log(productosCarrito);

  // Obtener el cuerpo de la tabla donde se insertarán las filas
const cuerpoTabla = document.getElementById("table-carrito");

// Limpiar el contenido actual de la tabla
cuerpoTabla.innerHTML = "";

// Generar las filas de la tabla con los productos del carrito
productosCarrito.forEach((producto) => {
  const fila = `
  <tr >
      <th  scope="row" rowspan = "2"><img src="${producto.imagen}"  class=" card-img-top mt-2 imgProduct " alt="..."></th>
      <td>${producto.name}</td>
      <td>
      <button id="${producto.id}cartBtn" class="btnProduct btn btn-primary btn-sm" onclick="restar('${producto.cantidad}' ,'${producto.id}')" > -</button>
      ${producto.cantidad}
      <button id="${producto.id}cartBtn" class="btnProduct btn btn-primary btn-sm" onclick="sumar('${producto.cantidad}' ,'${producto.id}')" > +</button>
      </td>
      <td>Precio Unitario:${producto.price}</td>
  </tr>
    <tr>
      <td>${producto.description}</td>
      <td></td>
      <td>Precio Total: ${producto.price * producto.cantidad}</td>
    </tr>
  `;
  
  cuerpoTabla.innerHTML += fila ;
});

  let total= 0;
  let numProductos= 0;
  productosCarrito.forEach((producto) =>{
    total += (producto.price * producto.cantidad);
    numProductos += (producto.cantidad);
  });
  
  document.getElementById("footer-total").innerHTML = total
  document.getElementById("total").innerHTML = total
  document.getElementById("numProductos").innerHTML = numProductos
}

function eliminarProducto(id){
  const productosCarrito =
  JSON.parse(localStorage.getItem("productosCarrito")) || [];
  console.log("eliminar producto");
  console.log(id);
  // Buscar el índice del objeto por su ID
const indice = productosCarrito.findIndex(objeto => objeto.id === id);

if (indice !== -1) {
    // Si se encuentra el objeto, eliminarlo del arreglo utilizando splice
    productosCarrito.splice(indice, 1);
    
    // Guardar los cambios en el localStorage
    localStorage.setItem("productosCarrito", JSON.stringify(productosCarrito));
    
    console.log(`Objeto con ID ${id} eliminado.`);
    actualizarTabla();
} else {
    console.log(`Objeto no encontrado con el ID especificado.`);
}
}

/* <input type="number" id="${producto.name}Pieces" name="${producto.name}Pieces" value="1" min="1" max="${producto.pieces}" /> */
