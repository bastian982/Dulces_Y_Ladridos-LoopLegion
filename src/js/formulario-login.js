/* Tomamos el boton de inicio de sesion y se activa la función si la información es valida */
const buttonLogIn = document.querySelector('#formulario-login');
buttonLogIn.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.querySelector("#user-input").value;
  const password = document.querySelector("#password-input").value;
  const users = JSON.parse(localStorage.getItem("users")) || []; //obtienen información de usuarios

  const validateEmail = users.find(user => user.email === email);

  if(!validateEmail){
    alert('Usuario no registrado, crea una cuenta')
  }
  else{
    const validateUser = users.find(
        (user) => user.email === email && user.password === password
      );
      if (!validateUser) {
        alert("Usuario y/o contraseña incorrectos");

      }
    
      alert(`Bienvenido ${validateUser.name} ${validateUser.lastName}`);
      window.location.href = "../../index.html";
  }
 /*  const validateUser = users.find(
    (user) => user.email === email && user.password === password
  );
  if (!validateUser) {
    alert("Usuario y/o contraseña incorrectos");
    console.log(validateUser.name);
  }

  alert(`Bienvenido ${validateUser.name} ${validateUser.lastName}`);
  window.location.href = "../../index.html"; */
});
