import React, { useState, useEffect } from 'react';



function Products() {
    const [products,SetProducts]=useState([]);
      
  return <div className="container mx-auto .p-3">
    <div className="flex flex-wrap -mx-2 mb-6 .p-2">

    {products.map(product=>{
      return <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4 .p-2" key={product.id}>
        <div><img src={product.image} className="object-contain h-48 w-full"/></div>
        <div>{product.title}</div>
        <div>${product.price}</div>
        <div><button type="button" className="text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900">Add to Cart</button>
</div>
        
        </div>

    })}
 </div>
  </div>;
}

export default Products;
