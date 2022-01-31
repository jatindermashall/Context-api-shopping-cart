import React from 'react';
import { useAPI } from "../context/cartContext";

function ShoppingCart() {
  const { cart } = useAPI();
  console.log(cart);
  const cartcontent= cart.map((cartitem) =>
  <div className="flex m-auto w-full text-center">
    <div className="w-1/4 p-0.5 text-sm">
    <img src={cartitem.image} className="object-contain h-16 w-full"/>
    {cartitem.title}
    </div>
    <div className="w-1/4 p-0.5 text-lg">
    ${cartitem.price}
    </div>
    <div className="w-1/4 p-0.5 text-lg">
    - {cartitem.quantity} +
    </div>
    <div className="w-1/4 p-0.5 text-lg">
    Delete
    </div>
    </div>
);
  



  return <div  className="w-3/4 m-auto">
    <div className="flex flex-row p-1 text-center bg-red-400">
    
 {cartcontent}
      </div>

  </div>;
}

export default ShoppingCart;
