/**
 * Crea algunos usuarios falsos en el local storage para pruebas temporales
 */
const fakeUser = () => {
    data = [{
        name : "Daniel Gomez",
        userName : "dani_gomez",
        email : "dg@gmail.com",
        password : "87654321"
    },
    {
        name : "Rafael Guitierritos",
        userName : "rafa_guitos",
        email : "rafa@gmail.com",
        password : "12345678"
    }]
    localStorage.setItem("fakeUser", JSON.stringify(data));
};
fakeUser();  //crear el usuarios falsos

/* Tomamos el boton de inicio de sesion y se activa la función si la información es valida */
const buttonLogIn = document.getElementById("boton-login");
buttonLogIn.addEventListener( "click", ()=>{
    if(isInfoValid()) console.log("si es valido"); //si la informacion es valida se inicia sesion
});

/**
 * lee el valor del elemento con el id indicado
 * @param {string} id  el id del elemento 
 * @returns valor que lee del elemento
 */
const getInputValueID = (id) => document.getElementById(id).value;

/**
 * verifica si el usuario y contraseña que lee del formulario existe en los usuarios del localstorage
 * @returns true (si la información es correcta) o false (si la información no es correcta)
 */
const isInfoValid = () => {
    let message = "Usuario o contraseña incorrectos"; //mensaje de error
    let isValid = false; //returno de la funcion
    const userInput = getInputValueID("user-input").toLowerCase(); //entrada de email
    const password = getInputValueID("password-input"); //entrada de password
    const data = JSON.parse( localStorage.getItem("fakeUser") );  //obtienen informacion de usuarios

    for(let user of data){
        if( userInput === user.userName.toLowerCase() || userInput === user.email.toLowerCase() ){ //busca que el usuario exista
            if( password === user.password ){ //si la contraseña coincide con el usuario
                isValid = true;
                message = "";
            }
        }
    }

    document.getElementById("error-message").innerHTML = message;   //imprime el mensaje de error o "" 
    return isValid;
};
