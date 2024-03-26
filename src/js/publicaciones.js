const cards = (publicaciones) =>
publicaciones.map( data => `
    <article class="card m-3 col-md-12 col-sm-12" category="Tips" style="width: 27%;" ><!--  -->
          <img src="../img/perrito.jpg" class="card-img-top mt-3" alt="...">
          <div class="card-body">
            <h5 class="card-title">${data.title}</h5>
            <h6 class="card-title">${data.autor.first_name} ${data.autor.last_name}</h6>
            <p class="card-text">${data.description}</p>
            <a href="#" class="btn btn-primary">Ver mas . . .</a>
          </div>
        </article>
    ` );

const printCards = ( container,cards ) => document.getElementById(container).innerHTML = cards.join(""); //id = "user-cards"

const getUsersAPI = async ( url ) => {
    const resolve = await fetch( url );
    const usersData = await resolve.json();
    const publicaciones = usersData.data;
    printCards("blog-container",cards(publicaciones)); //make and print cards
}

let url = "../pages/publicaciones.json";
getUsersAPI(url);
console.log("hi");