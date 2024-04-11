

const productosCarrito = JSON.parse(localStorage.getItem("productosCarrito")) || [];

// Obtener el cuerpo de la tabla donde se insertarán las filas
const cuerpoTabla = document.getElementById("table-carrito");

// Limpiar el contenido actual de la tabla
cuerpoTabla.innerHTML = "";

// Generar las filas de la tabla con los productos del carrito
productosCarrito.forEach(producto => {
  const fila = `
  <tr >
      <th  scope="row" rowspan = "2">${producto.imagen}</th>
      <td>${producto.name}</td>
      <td>${producto.pieces}</td>
      <td>${producto.price}</td>
  </tr>
    <tr>
      <td>${producto}</td>
      <td>Descuento</td>
      <td>Precio Total</td>
    </tr>
  `;
  cuerpoTabla.innerHTML += fila;
});
