let url = "../json/publicaciones.json";

const getDataAPI = async ( url ) => {
    const resolve = await fetch( url );
    const usersData = await resolve.json();
    const publicaciones = usersData.data;
    //console.log(publicaciones);
    return publicaciones;
};


const addNewElement = async() => {
    let data = await getDataAPI(url);
    let title = getInputValueID("title-input");
    let content = getInputValueID("content-input");
    let autorFirstName = getInputValueID("first-name-input");
    let autorLastName = getInputValueID("last-name-input");
    let description = getInputValueID("decription-input"); 
    let categoria1 = getInputValueID("catego1-input");
    let id = data.length + 1;
    let date = new Date();
    data.push({
        id: id,
        title : `${title}`,
        description: `${description}`,
        content: `${content}`,
        autor: {
            first_name: `${autorFirstName}`,
            last_name: `${autorLastName}`
        },
        image: "url",
        date: date,
        categories: ["alimentacion","tips","recetas"]
    });
    //console.log(typeof(categoria1)); 
    //console.log(categoria1); 
    //console.log(title);
    //console.log(content);
    //console.log(autorFirstName);
    //console.log(autorLastName);
    //console.log(description);
    console.log(data);

    //reescribir json
};

const buttonCreate = document.getElementById("boton-agregar");
buttonCreate.addEventListener( "click", ()=>{
    //console.log("boton de agregar");
    addNewElement();
});

const getInputValueID = (id) => document.getElementById(id).value;

const printFiltered = async(filter) => {
  let publicaciones = await getDataAPI(url);
  let data = [];
  for(let publicacion of publicaciones){
    if(publicacion.categories.includes(filter)) data.push(publicacion);  //.toLowerCase()
  }
  printCards("blog-container",cards(data));
};

