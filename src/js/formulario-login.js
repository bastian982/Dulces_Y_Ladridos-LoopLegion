
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
fakeUser();  //crear el usuario falso


const buttonLogIn = document.getElementById("boton-login");
buttonLogIn.addEventListener( "click", ()=>{
    if(isInfoValid()) console.log("si es valido"); //si la informacion es valida se inicia sesion
});

const getInputValueID = (id) => document.getElementById(id).value;

const isInfoValid = () => {
    let message = "Usuario o contraseña incorrectos"; //mensaje de error
    let isValid = false; //returno de la funcion
    const userInput = getInputValueID("user-input").toLowerCase(); //entrada de email
    const password = getInputValueID("password-input"); //entrada de password
    const data = JSON.parse( localStorage.getItem("fakeUser") );  //obtienen informacion de usuarios

    for(let user of data){
        if( userInput === user.userName.toLowerCase() || userInput === user.email.toLowerCase() ){
            if( password === user.password ){
                isValid = true;
                message = "";
            }
        }
    }

    document.getElementById("error-message").innerHTML = message;   //imprime el mensaje de error o "" 
    return isValid; // true o false
};
