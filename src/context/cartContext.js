import React, { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";

const APIContext = createContext();

export function APIContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [cart, setcart] = useState([]);
  const [carttotal, setcarttotal] = useState([0]);
  function removefromcart(product) {
         const cart_temp=[...cart];
    const cartindex=cart.findIndex(obj => obj.id === product.id);
    console.log(cart[cartindex].quantity);
    cart[cartindex].quantity>1 ? cart_temp[cartindex].quantity--:cart_temp.splice(cartindex,1);
    console.log(cart[cartindex].quantity);
    //console.log(cart_temp);
    setcart(cart_temp);
    //console.log(cart);
    setcarttotal((parseInt(carttotal)-parseInt(product.price)).toFixed(2));
  }
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
        carttotal,
        removefromcart
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
