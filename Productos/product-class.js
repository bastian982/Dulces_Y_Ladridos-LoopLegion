/* Creación de clases 
 
 */
export class Galletas {
    #stock;
constructor(name){
    this.name = name;
    this.dogoName= "Galleta perro";
    this.description= "Default";
    this.price= 50;
    this.pieces= 10; 
    this.#stock = true;
    this.imagen= 1; 
    
    /* idea función para las interfaces objetos tarjetas */
    console.log(`Me llamo ${this.name}`);
}
}


