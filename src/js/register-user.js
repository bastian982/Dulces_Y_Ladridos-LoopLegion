document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.getElementById("registerForm");

    registerForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("inputName").value.trim();
        const lastName = document.getElementById("inputLastName").value.trim();
        const number = document.getElementById("inputNumber").value.trim();
        const email = document.getElementById("inputEmail").value.trim();
        const password = document.getElementById("inputPassword").value.trim();
        const confirmPassword = document
            .getElementById("inputConfirmPassword")
            .value.trim();
        const tyc = document.getElementById("gridCheck").checked;

        let errores = []; // Array para almacenar todas las alertas

        function validarFormulario() {
            return new Promise((resolve, reject) => {
                // Validación del nombre y apellido
                const nameRegExp = /^[A-Za-zÁ-ÿ\s']+$/;
                if (!nameRegExp.test(name) || !nameRegExp.test(lastName)) {
                    errores.push("El nombre y el apellido deben contener solo letras.");
                }

                // Validación del numero telefónico
                const NumberRegExp = /^[0-9\s']+$/;
                if (!NumberRegExp.test(number) || number.length != 10) {
                    errores.push("El numero telefónico debe contener 10 dígitos.");
                }

                // Validación del correo
                const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                const serverAllow = ["gmail.com", "outlook.com", "hotmail.com"];
                const dominioCorreo = email.split("@")[1];
                if (!emailRegExp.test(email) || !serverAllow.includes(dominioCorreo)) {
                    errores.push(
                        "El correo electrónico debe ser válido y utilizar un servidor permitido."
                    );
                }

                if (password.length < 8) {
                    errores.push("La contraseña debe tener al menos 8 caracteres.");
                }

                if (password !== confirmPassword) {
                    errores.push("Las contraseñas no coinciden.");
                }

                // Validación de términos y condiciones
                if (!tyc) {
                    errores.push("Debes aceptar los términos y condiciones.");
                }

                // Si hay errores, los devolvemos
                if (errores.length > 0) {
                    reject(errores.join("<br><br>")); // Devolvemos todas las alertas juntas con saltos de línea
                } else {
                    // Si no hay errores, resolvemos con los datos del formulario
                    resolve({
                        name,
                        lastName,
                        number,
                        email,
                        password,
                        confirmPassword,
                    });
                }
            });
        }

        validarFormulario()
            .then((datos) => {
                //recibe resolve

                const users = JSON.parse(localStorage.getItem("users")) || [];
                const isUserRegistered = users.find((user) => user.email === email);
                if (isUserRegistered) {
                    document.getElementById("error-message").innerHTML = "";
                    return alert("El usuario ya esta registrado!");
                }

                postUser({
                    firstName: name,
                    lastName: lastName,
                    telephoneNumber: number,
                    email: email,
                    password: password,
                    privilege: {
                        "id": "3"
                    }
                });
                // localStorage.setItem("users", JSON.stringify(users));
                alert("Registro Exitoso!");

                console.log("Datos del formulario:", datos);
                document.getElementById("error-message").innerHTML = "";
                document.getElementById("registerForm").reset();
                window.location.href = "../pages/formulario-login.html";
            })

            .catch((error) => {
                //recibe reject
                console.log(error);
                document.getElementById(
                    "error-message"
                ).innerHTML = `<li>${error}</li>`;
            });
    });
});

const postUser = async(userData)=>{
    let data = JSON.stringify(userData);

    // URL a la que enviar la solicitud
    const url = 'http://localhost:8080/api/v1/users';
    try {
      const response = await fetch(url, {
        method: "POST",
        body: data,
        headers: { "Content-Type": "application/json"  },
      });
      console.log(response);
      if (!response.ok) {
        throw new Error(`HTTP error status: ${response.status}`);
      }
    //   const jwt = await response.json(); // Asegúrate de que el servidor devuelva un objeto con una propiedad 'token'
    //   console.log(jwt);
    //   if (jwt && jwt.token) {
    //     localStorage.setItem("token", jwt.token); // Guarda el token en localStorage
    //   } else {
    //     console.error("No se recibió un token válido");
    //   }
 } 
    catch (error) {
   console.error("Error al obtener el token:", error);
    }
    
}
