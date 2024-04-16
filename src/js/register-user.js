document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    function validarFormulario() {
        return new Promise((resolve, reject) => {
            const name = document.getElementById('inputName').value.trim();
            const lastName = document.getElementById('inputLastName').value.trim();
            const number = document.getElementById('inputNumber').value.trim();
            const email = document.getElementById('inputEmail').value.trim();
            const password = document.getElementById('inputPassword').value.trim();
            const confirmPassword = document.getElementById('inputConfirmPassword').value.trim();
            const tyc = document.getElementById('gridCheck').checked;
    
            let errores = []; // Array para almacenar todas las alertas
    
            // Validación del nombre y apellido
            const nameRegExp = /^[A-Za-zÁ-ÿ\s']+$/;
            if (!nameRegExp.test(name) || !nameRegExp.test(lastName)) {
                errores.push('El nombre y el apellido deben contener solo letras.');
            }
    
            // Validación del numero telefonico
            const NumberRegExp = /^[0-9\s']+$/;
            if (!NumberRegExp.test(number) || number.length != 10) {
                errores.push('El numero telefonico debe contener 10 digitos.');
            }
    
            // Validación del correo
            const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const serverAllow = ['gmail.com', 'outlook.com','hotmail.com'];
            const dominioCorreo = email.split('@')[1];
            if (!emailRegExp.test(email) || !serverAllow.includes(dominioCorreo)) {
                errores.push('El correo electrónico debe ser válido y utilizar un servidor permitido.');
            }
    
            if(password.length < 8 ){
                errores.push('La contraseña debe tener al menos 8 caracteres.');
            }
    
            if(password !== confirmPassword){
                errores.push('Las contraseñas no coinciden.');
            }
    
            // Validación de términos y condiciones
            if (!tyc) {
                errores.push('Debes aceptar los términos y condiciones.');
            }
    
            // Si hay errores, los devolvemos
            if (errores.length > 0) {
                reject(errores.join('<br><br>')); // Devolvemos todas las alertas juntas con saltos de línea
            } else {
                // Si no hay errores, resolvemos con los datos del formulario
                resolve({
                    name,
                    lastName,
                    number,
                    email,
                    password,
                    confirmPassword
                });
            }
        });
    }
   
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

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
  
    async function validarFormulario() {
      return new Promise((resolve, reject) => {
        // ... (el resto del código de validación es el mismo)
  
        // Si no hay errores, resolvemos con los datos del formulario
        if (errores.length === 0) {
          resolve({ name, lastName, number, email, password, confirmPassword });
        } else {
          reject(errores.join('<br><br>'));
        }
      });
    }
  
    async function guardarEnJSON(datos) {
      try {
        const dirHandle = await window.showDirectoryPicker();
        const fileHandle = await dirHandle.getFileHandle('datos_formulario.json', { create: true });
        const writable = await fileHandle.createWritable();
        await writable.write(JSON.stringify(datos));
        await writable.close();
        return true;
      } catch (error) {
        console.error('Error al guardar el archivo JSON:', error);
        return false;
      }
    }
  
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
  
      try {
        const datos = await validarFormulario();
        const guardadoExitoso = await guardarEnJSON(datos);
  
        if (guardadoExitoso) {
          document.getElementById("error-message").innerHTML = "";
          alert('Formulario enviado correctamente. Los datos se han guardado en un archivo JSON.');
          document.getElementById("contactForm").reset();
        } else {
          throw new Error('Error al guardar los datos del formulario.');
        }
      } catch (error) {
        console.log(error);
        document.getElementById("error-message").innerHTML = `<li>${error}</li>`;
      }
    });
  });