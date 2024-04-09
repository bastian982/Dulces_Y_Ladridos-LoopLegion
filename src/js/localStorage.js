export const getProducts = (nameData) => {
    return JSON.parse(
      localStorage.getItem(nameData)
    );  
  }
export const setProducts = (nameData,data) => {
     localStorage.setItem(nameData, JSON.stringify(data));  
  }