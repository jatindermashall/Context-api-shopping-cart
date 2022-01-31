import React from 'react';
import { useAPI } from "../context/cartContext";
function ShoppingCart() {
  const { cart } = useAPI();
  console.log(cart);
  return <div>sss</div>;
}

export default ShoppingCart;
