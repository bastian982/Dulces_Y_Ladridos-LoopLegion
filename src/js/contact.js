document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    function validarFormulario() {
        return new Promise((resolve, reject) => {
            const name = document.getElementById('inputName').value.trim();
            const lastName = document.getElementById('inputLastName').value.trim();
            const email = document.getElementById('inputEmail').value.trim();
            const message = document.getElementById('inputComment').value.trim();
            const tyc = document.getElementById('gridCheck').checked;

            // Validación del nombre y apellido
            
            const nameRegExp = /^[A-Za-zÁ-ÿ\s']+$/; //expresion regular que valida que solo se ingresen letras en los input
            if (!nameRegExp.test(name) || !nameRegExp.test(lastName)) { // Compara si nombre y apellido cumplen con la exp regular
                reject('El nombre y el apellido deben contener solo letras.');//si es diferente la promesa devuelve reject.
            }

            // Validación del correo
            const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;//busca que antes y despues del @ y del . no hay espacios u otro @ 
            const serverAllow = ['gmail.com', 'outlook.com']; // Aqui podemos agregar todos los servidores que permitiremos
            const dominioCorreo = email.split('@')[1]; //identifica el 1er @ idicando que luego va el serverAllow
            if (!emailRegExp.test(email) || !serverAllow.includes(dominioCorreo)) { //valida el patron y que se incluya serverAllow
                reject('El correo electrónico debe ser válido y utilizar un servidor permitido.'); //si es diferente devuelve reject
            }

            //Validacion mensaje
            if(message == ""){
                reject('Escribe un mensaje o comentario');
            }


            // Validación de términos y condiciones
            if (!tyc) { //valida si es difernte a checked
                reject('Debes aceptar los términos y condiciones.'); //si es diferente devuelve reject
            }

            //en caso que las validaciones cumplan se resuelven cada una de las promesas en name, lastname, email, message
            resolve({
                name,
                lastName,
                email,
                message
            });
        });
    }

    //Se añade un escuchador de evento de tipo submit donde se estable el parametro e para que al hacer clic en enviar primero se valide la info y no solo se recargue el navegador a como lo hace por defecto. 
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        validarFormulario() 
            .then((datos) => {//recibe resolve
                
                console.log('Datos del formulario:', datos);
                document.getElementById("error-message").innerHTML =  ("");
                alert('Formulario enviado correctamente.');
                document.getElementById("contactForm").reset();
                
                })

            .catch((error) => { //recibe reject
                console.log(error)
                document.getElementById("error-message").innerHTML =  (`<li>${error}</li>`);
            });
    });
});

const user = JSON.parse(localStorage.getItem('login-success')) || false;
if (user){
  document.querySelector('.dropdown').innerHTML = `
      <a href="./src/pages/formulario-login.html" class=" dropdown-toggle"
								type="button" data-bs-toggle="dropdown" aria-expanded="false"><i
									class="fa-regular fa-user" title="Login / Registro"></i></a>
							<ul class="dropdown-menu">
								<li><a class="dropdown-item" href="#">Cerrar Sesión</a></li>
							</ul>
							<span class="client-name"></span>
							<a href="./src/pages/carrito.html"><i class="fa-solid fa-cart-shopping"
									title="Carrito"></i></a>
      `
  document.querySelector('.client-name').innerHTML = `${user.name} ${user.lastName}`
}

/* localStorage.removeItem('login-success'); */