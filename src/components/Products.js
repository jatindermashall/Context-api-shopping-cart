import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Products() {
    const [products,SetProducts]=useState(null);
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
    .then(response => {
  
        console.log(response.data);
      
        SetProducts(response.data);
        //console.log(products);
  
    }).catch(error => {
      
      console.log(error);
    })
      });
      console.log(products);
      const listproducts = this.products.map(product => (
        <div key={product.id} className="flex">
          <div className="flex-none">
         
          </div>
          <div className="flex-1">
            {product.title}
          </div>
          <div className="flex-1">
            <img src='{product.image}'  alt='{product.title}' width="150px"/>
          </div>
          <div className="flex-1">
          Amazon
         </div>

         
        </div>
      ));
      
      
      
  return <div>

    {listproducts}

  </div>;
}

export default Products;
