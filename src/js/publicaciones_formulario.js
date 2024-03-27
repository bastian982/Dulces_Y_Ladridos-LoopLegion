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
    console.log(data);
};

const buttonCreate = document.getElementById("boton-agregar");
buttonCreate.addEventListener( "click", ()=>{
    //console.log("boton de agregar");
    addNewElement();
});

const printFiltered = async(filter) => {
  let publicaciones = await getDataAPI(url);
  let data = [];
  for(let publicacion of publicaciones){
    if(publicacion.categories.includes(filter)) data.push(publicacion);  //.toLowerCase()
  }
  printCards("blog-container",cards(data));
};

