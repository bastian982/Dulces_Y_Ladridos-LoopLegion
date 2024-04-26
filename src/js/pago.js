// Función para llenar la tabla con la información de los productos
function fillProductTable() {
    const products = JSON.parse(localStorage.getItem("productosCarrito")) || [];
    const tableBody = document.getElementById("product-info");
    let html = "";
    let total = 0;
    products.forEach(product => {
      const subtotal = product.price * product.quantity;
      total += subtotal;
      html += `
        <tr>
          <td>${product.name}</td>
          <td>$${product.price.toFixed(2)}</td>
          <td>
            <input type="number" min="1" value="${product.quantity}" data-product-id="${product.id}" class="quantity-input">
          </td>
          <td>$${subtotal.toFixed(2)}</td>
        </tr>
      `;
    });
    tableBody.innerHTML = html;
  
    // Mostrar el total
    const totalInfo = document.getElementById("total-info");
    totalInfo.innerHTML = `<strong>Total a Pagar:</strong> $${total.toFixed(2)}`;
  
    // Event listener para actualizar la cantidad y el subtotal al cambiar la cantidad
    const quantityInputs = document.querySelectorAll(".quantity-input");
    quantityInputs.forEach(input => {
      input.addEventListener("change", function() {
        const productId = this.getAttribute("data-product-id");
        const newQuantity = parseInt(this.value);
        updateProductQuantity(productId, newQuantity);
      });
    });
  }
  
  // Función para actualizar la cantidad de un producto en el carrito
  function updateProductQuantity(productId, newQuantity) {
    const products = JSON.parse(localStorage.getItem("productosCarrito")) || [];
    const updatedProducts = products.map(product => {
      if (product.id === productId) {
        product.quantity = newQuantity;
      }
      return product;
    });
    localStorage.setItem("productosCarrito", JSON.stringify(updatedProducts));
    fillProductTable(); // Llenar la tabla nuevamente después de actualizar
  }
  
  // Llenar la tabla con los productos al cargar la página
  fillProductTable();
  
  // Función para manejar el envío del formulario
  function handleFormSubmit(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente
  
    // Obtener los valores del formulario
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const correo = document.getElementById("correo").value;
    const telefono = document.getElementById("telefono").value;
    const tarjeta = document.getElementById("tarjeta").value;
    const fechaVencimiento = document.getElementById("fecha-vencimiento").value;
    const ccv = document.getElementById("ccv").value;
    const direccion = document.getElementById("direccion").value;
  
    // Crear un objeto con los datos del formulario
    const formData = {
      nombre,
      apellido,
      correo,
      telefono,
      tarjeta,
      fechaVencimiento,
      ccv,
      direccion
    };
  
    // Aquí puedes enviar los datos del formulario a tu backend para procesar el pago
    console.log("Datos del formulario:", formData);
  }
  
  // Event listener para el envío del formulario
  const paymentForm = document.getElementById("payment-form");
  paymentForm.addEventListener("submit", handleFormSubmit);
  