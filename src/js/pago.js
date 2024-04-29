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

  /* // Manejar el envío del formulario de pago
  document.getElementById('payment-form').addEventListener('submit', function(event) {
      event.preventDefault();
      // Aquí puedes agregar la lógica para procesar el pago
      alert('Pago procesado exitosamente!');
  }); */


    const paymentForm = document.getElementById('payment-form');

    function validarFormularioPago() {
        return new Promise((resolve, reject) => {
            const cardNumber = document.getElementById('card-number').value.trim();
            const cardHolder = document.getElementById('card-holder').value.trim();
            const expiryDate = document.getElementById('expiry-date').value.trim();
            const cvv = document.getElementById('cvv').value.trim();
            const address = document.getElementById('address').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const email = document.getElementById('email').value.trim();

            // Validación del número de tarjeta
            const cardNumberRegExp = /^\d{16}$/; // Ajusta según el formato requerido
            if (!cardNumberRegExp.test(cardNumber)) {
                reject('El número de tarjeta es inválido.');
            }

            // Validación del nombre del titular de la tarjeta
            const nameRegExp = /^[A-Za-zÁ-ÿ\s']+$/;
            if (!nameRegExp.test(cardHolder)) {
                reject('El nombre del titular de la tarjeta debe contener solo letras.');
            }

            // Validación de la fecha de vencimiento
            const expiryDateRegExp = /^(0[1-9]|1[0-2])\/\d{2}$/; // Ajusta según el formato requerido
            if (!expiryDateRegExp.test(expiryDate)) {
                reject('La fecha de vencimiento es inválida.');
            }

            // Validación del CVV
            const cvvRegExp = /^\d{3}$/; // Ajusta según el formato requerido
            if (!cvvRegExp.test(cvv)) {
                reject('El CVV es inválido.');
            }

            // Validación de la dirección
            if (address == "") {
                reject('Por favor, ingrese su dirección.');
            }

            // Validación del teléfono
            const phoneRegExp = /^\d{10}$/; // Ajusta según el formato requerido
            if (!phoneRegExp.test(phone)) {
                reject('El número de teléfono es inválido.');
            }

            // Validación del correo electrónico
            const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const serverAllow = ['gmail.com', 'outlook.com']; // Ajusta según los servidores permitidos
            const dominioCorreo = email.split('@')[1];
            if (!emailRegExp.test(email) || !serverAllow.includes(dominioCorreo)) {
                reject('El correo electrónico debe ser válido y utilizar un servidor permitido.');
            }

            // Si todas las validaciones pasan, resuelve la promesa
            resolve({
                cardNumber,
                cardHolder,
                expiryDate,
                cvv,
                address,
                phone,
                email
            });
        });
    }

    paymentForm.addEventListener('submit', (e) => {
        e.preventDefault();

        validarFormularioPago()
            .then((datos) => {
                console.log('Datos del formulario de pago:', datos);
                document.getElementById("error-message").innerHTML = ("");
                alert('Formulario de pago enviado correctamente.');
                document.getElementById("payment-form").reset();
                
            })
            .catch((error) => {
                console.log(error);
                document.getElementById("error-message").innerHTML = (`<li>${error}</li>`);
            });
    });


});

