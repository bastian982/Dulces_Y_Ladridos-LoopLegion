export const getProducts =(nameData, url) => {
 fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Error en la solicitud get');
    }
    return response.json(); // o response.text(), response.blob(), etc. dependiendo del tipo de respuesta esperada
  })
  .then(data => {
    // Hacer algo con la respuesta

    console.log(data);
    setProducts(nameData,data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
    return JSON.parse(
      localStorage.getItem(nameData)
    );  
  }
export const setProducts = (nameData,data) => {
     localStorage.setItem(nameData, JSON.stringify(data));  
  }