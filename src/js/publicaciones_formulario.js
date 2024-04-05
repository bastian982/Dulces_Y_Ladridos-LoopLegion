import { createTable } from './tablePublicaciones';

let url = "../json/publicaciones.json";

const getDataAPI = async ( url ) => {
    const resolve = await fetch( url );
    const usersData = await resolve.json();
    const publicaciones = usersData.data;
    return publicaciones;
};

const getInputValueID = (id) => document.getElementById(id).value;

const buttonCreate = document.getElementById("boton-agregar");
buttonCreate.addEventListener( "click", ()=>{
    
    let info = getNewElement();
    if(isInfoValid(info)) addNewElement(info);
});


const isInfoValid = (info) => {
    let message = "";
    let isValid = false;

    if(info.title.length < 6) message = "* El titulo debe tener al menos 5 letras";
    if(info.content.length < 6) message = "* El contenido debe tener al menos 5 letras";
    if(info.autorFirstName.length < 6) message = "* El nombre del autor debe tener al menos 5 letras";
    if(info.autorLastName.length < 6) message = "* El apellido del autor debe tener al menos 5 letras";
    if(info.description.length < 6) message = "* La descripción debe tener al menos 5 letras";

    if(message === "") isValid = true;
    document.getElementById("error-message").innerHTML = message;
    return isValid;
};

const getNewElement = () => {
    let newElement = {
        title : getInputValueID("title-input"),
        content : getInputValueID("content-input"),
        autorFirstName : getInputValueID("first-name-input"),
        autorLastName : getInputValueID("last-name-input"),
        description : getInputValueID("decription-input"),
        categories : getCheckbox()
    };
    return newElement;
};

const getCheckbox = () => {
    const checkbox = document.getElementsByName("checkbox-input");
    let list = [];
    checkbox.forEach(element => {
        if(element.checked) list.push(element.value);
    });
    return list;
};

const addNewElement = async(element) => {
    let data = await getDataAPI(url);
    let id = lastId(data);
    let date = new Date();
    data.push({
        id: id,
        title : element.title,
        description: element.description,
        content: element.content,
        autor: {
            first_name: element.autorFirstName,
            last_name: element.autorLastName
        },
        image: "url",
        date: date,
        categories: element.categories
    });
    console.log(data); //_____________________________________________________
    //reescribir json
};

const lastId = (data) => {
    let newId = data[ data.length - 1 ].id + 1;
    return newId;
};

