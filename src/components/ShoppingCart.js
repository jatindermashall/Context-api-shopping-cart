import React from 'react';
import { useAPI } from "../context/cartContext";
import {
  
  Link,useNavigate 
} from "react-router-dom";
import GooglePayButton from '@google-pay/button-react';

function ShoppingCart() {
  let navigate = useNavigate();
  
  const { cart,addtocart,carttotal,removefromcart } = useAPI();
  

  //console.log(cart);
  const cartcontent= cart.map((cartitem) =>
     <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5" key={cartitem.id}>
   <div className="flex w-2/5"> 
     <div className="w-20">
     <img src={cartitem.image} className="object-contain h-16 w-full"/>
     </div>
     <div className="flex flex-col justify-between ml-4 flex-grow">
       <span className="font-bold text-sm"> {cartitem.title}</span>
      
       
     </div>
   </div>
   <div className="flex justify-center w-1/5">
   <button onClick={(e) => removefromcart(cartitem)} >-  </button> &nbsp;  {cartitem.quantity}   &nbsp;<button onClick={(e) => addtocart(cartitem)} >+</button>

     

     
   </div>
   <span className="text-center w-1/5 font-semibold text-sm"> ${cartitem.price}</span>
   <span className="text-center w-1/5 font-semibold text-sm"> ${cartitem.price*cartitem.quantity}</span>
 </div>
);
  



  return <div  className="w-3/4 m-auto">
    <div className="flex flex-row p-1 text-center ">
    
    <div className="container mx-auto mt-10">
    <div className="flex shadow-md my-10">
      <div className="w-3/4 bg-white px-10 py-10">
        <div className="flex justify-between border-b pb-8">
          <h1 className="font-semibold text-2xl">Shopping Cart</h1>
          <h2 className="font-semibold text-2xl">{(cart.reduce((a,v) =>  a = a + v.quantity , 0 ))} Items</h2>
        </div>
        <div className="flex mt-10 mb-5">
          <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
        </div>
        

        {cartcontent}

        

        <Link to="/"  className="flex font-semibold text-indigo-600 text-sm mt-10">
      
          <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
          Continue Shopping
        </Link>
      </div>

      <div id="summary" className="w-1/4 px-8 py-10">
        <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
        <div className="flex justify-between mt-10 mb-5">
          <span className="font-semibold text-sm uppercase">Items {(cart.reduce((a,v) =>  a = a + v.quantity , 0 ))}</span>
          <span className="font-semibold text-sm">{carttotal}$</span>
        </div>
        <div>
          <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
          <select className="block p-2 text-gray-600 w-full text-sm">
            <option>Standard shipping - $10.00</option>
          </select>
        </div>
        <div className="py-10">
          <label  className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
          
        </div>
        <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
        <div className="border-t mt-8">
          <div className="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>Total cost</span>
            <span>${carttotal}</span>
          </div>
          

          <GooglePayButton
  environment="TEST"
  paymentRequest={{
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['MASTERCARD', 'VISA'],
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example',
            gatewayMerchantId: 'exampleGatewayMerchantId',
          },
        },
      },
    ],
    merchantInfo: {
      merchantId: '12345678901234567890',
      merchantName: 'Demo Merchant',
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: String(carttotal),
      currencyCode: 'USD',
      countryCode: 'US',
    },
  }}
  onLoadPaymentData={paymentRequest => {
    //console.log('Total amount', carttotal);
    navigate('/thankyou');
    //console.log('load payment data', paymentRequest);
  }}
/>
        </div>
      </div>

    </div>
  </div>
      </div>

  </div>;
}

export default ShoppingCart;
