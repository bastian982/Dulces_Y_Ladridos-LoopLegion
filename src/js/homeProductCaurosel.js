
import { getProducts } from './localStorage.js';
const homeProductCarousel = document.getElementById("productsCarouselInner");
const homeProductCarouselButtons = document.getElementById("carouselIndicators");
const arregloDeProductosName = "arregloDeProductos";


function createCarouselItems(){
    const products = getProducts(arregloDeProductosName);
    products.map(producto =>homeProductCarouselButtons.innerHTML  += createButton(products.indexOf(producto)));
    products.map(producto =>{homeProductCarousel.innerHTML += createSlide(producto, products.indexOf(producto))});
}

function createSlide(producto, index){
    return `<div class="carousel-item productCarousel-item ${ index == 0 ? "active":""} ">
    <div class="carousel-slide">
    <!-- Información producto inicio -->
    <div class="card productCard">
      <img src="${producto.imagen}" class="card-img-top productImage" alt="...">
      <div class="card-body prductsCarouselCardBody">
        <h5 class="card-title">${producto.dogoName}</h5>
        <p class="card-text">$${producto.price}.00</p>
      </div>
    </div>
    <!-- Información producto fin  -->
      </div>
    </div>`
}
function createButton (productIndex){
    return ` <button type="button" data-bs-target="#productsCarouselIndicators" data-bs-slide-to="${productIndex}" ${productIndex == 0 ? 'class="active" aria-current="true"':""}  aria-label="Slide ${productIndex +1}"></button>`
}

function carruselFuncion ()  {
  let grupoDeElementos = document.querySelectorAll( "#productsCarouselIndicators .productCarousel-item" );
    // console.log("items", grupoDeElementos);
    grupoDeElementos.forEach((el) => {
      const minPerSlide = 4;
      console.log(el);
      let next = el.nextElementSibling;
      console.log("next", next);
      for (let i = 1; i < minPerSlide; i++) {
        console.log(!next);
        if (!next) {
          //
          next = grupoDeElementos[0];
        }
        let cloneChild = next.cloneNode(true);
        el.appendChild(cloneChild.children[0]);
        next = next.nextElementSibling;
      }
    });
  };


 function createCarousel(){
  const leftArrow = document.getElementById("leftArrow" );
  const rightArrow = document.getElementById("rightArrow");
    createCarouselItems();
    carruselFuncion ();
    
  }
  createCarousel();
  


