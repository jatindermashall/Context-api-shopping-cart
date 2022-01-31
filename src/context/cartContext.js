import React, { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";

const APIContext = createContext();

export function APIContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [cart, setcart] = useState([]);
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
   
    //console.log(product);
    
    console.log(cart);
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
        cart
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
