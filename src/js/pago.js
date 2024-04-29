document.addEventListener('DOMContentLoaded', function() {
  // Función para actualizar el resumen
  function actualizarResumenCheckout(productos) {
      let total = 0;
      let numProductos = 0;
      const tbody = document.getElementById("checkout-product-list").querySelector("tbody");
      tbody.innerHTML = ''; // Limpiar la lista de productos

      productos.forEach(producto => {
          total += producto.price * producto.cantidad;
          numProductos += producto.cantidad;
          // Agregar cada producto y su cantidad a la lista
          const tr = document.createElement('tr');
          tr.innerHTML = `<td>${producto.name}</td><td>${producto.cantidad}</td>`;
          tbody.appendChild(tr);
      });

      // Actualizar el resumen en la página de checkout
      document.getElementById("checkout-num-products").textContent = numProductos;
      document.getElementById("checkout-total-mxn").textContent = `$${total}.00`;
  }

  // Cargar los productos del carrito desde el localStorage y actualizar el resumen
  function cargarYActualizarResumen() {
      const productosCarrito = JSON.parse(localStorage.getItem("productosCarrito")) || [];
      actualizarResumenCheckout(productosCarrito);
  }

  // Escuchar cambios en el localStorage
  window.addEventListener('storage', function(event) {
      if (event.key === 'productosCarrito') {
          cargarYActualizarResumen();
      }
  });

  // Cargar y actualizar el resumen al cargar la página
  cargarYActualizarResumen();

  // Manejar el envío del formulario de pago
  document.getElementById('payment-form').addEventListener('submit', function(event) {
      event.preventDefault();
      // Aquí puedes agregar la lógica para procesar el pago
      alert('Pago procesado exitosamente!');
  });
});
