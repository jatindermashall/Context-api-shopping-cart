import React, { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";

const APIContext = createContext();

export function APIContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [cart, setcart] = useState([]);
  const [carttotal, setcarttotal] = useState([0]);
  function addtocart(product) {
    
    if(cart.find(cartel => cartel.id===product.id))
    {
      product.quantity=product.quantity+1;

    }
    else
    {
      
      product.quantity=1;
      setcart(cart=>[...cart,product]);
    }
    
    setcarttotal((parseInt(carttotal)+parseInt(product.price)).toFixed(2));
    //console.log("cart total"+carttotal);
    
    //console.log(cart);
  }
  
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        `https://fakestoreapi.com/products`
      );
      
      setProducts(data);
      //console.log(products);
    }
    fetchData();
  }, []);
  return (
    <APIContext.Provider
      value={{
        products,
        addtocart,
        cart,
        carttotal
      }}
    >
      {children}
    </APIContext.Provider>
  );
}

export function useAPI() {
  const context = useContext(APIContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
