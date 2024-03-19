import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";


const ProductList = () => {
  

 const BASE_URL = 'https://63f4e5583f99f5855db9e941.mockapi.io/products';

 const  [produkte, setProdukte] = useState([])
 const  [error, setError] = useState(false)
 const [loading, setLoading] = useState(true) 

 const getData =async()=>{
  try {
    const {data} = await axios(BASE_URL);
    //ana işi getirmek olduğu için axios.get() yerine axios() da olur
    setProdukte(data)
  } catch (e) {
    setError(true)
    console.log(e);
  } finally {
    setLoading(false)
  }
}

useEffect(()=>{getData()}, [])

const subtotal = produkte.reduce((acc, product)=>
  (product.price*product.amount*product.dampingRate) + acc, 0)

const tax = produkte.reduce((acc, product)=>
  (product.price*product.amount*product.dampingRate)*0.18 + acc, 0)

  const shipping = 25

const total = subtotal+tax+shipping
  
 // Calculate subtotal
//  const subtotal = produkte.reduce((total, product) => total + product.price, 0);

if (error) {
  return <p>Something went wrong..</p> 
}
 
  return (
    <div className="container mt-3">
      <div className="d-sm-block d-md-flex">
       {loading ? 
       (<p style={{color:'gray', fontWeight:'bold'}}>Loading....</p>) : 
       (
          <>
            <article id="product-panel" className="col-md-6">
              {produkte.map((product) => (
                <ProductCard key={product.id} product={product} getData={getData}/>
              ))}
              {/* kolay destructring için product={product} yerine burada product={...product}olarak yazıp Product card'a dest.'i direk parantez içinde image, name, price vs yazarak yapabilirdik */}
            </article>
           
          <ul className="list-group list-group-flush ms-5 w-75">
            <li className="list-group-item border-dark d-flex">
            Subtotal 
            <span className='ms-auto'>${subtotal.toFixed(2)}</span></li>

            <li className="list-group-item border-dark d-flex">
            Tax (18%) <span className='ms-auto'>${tax.toFixed(2)}</span></li>

            <li className="list-group-item border-dark d-flex">
            Shipping <span className='ms-auto'>${shipping}</span></li>

            <li className="list-group-item border-bottom border-dark d-flex  fw-bold">
            Total <span className='ms-auto'>${total}</span></li>
          </ul>
          </>
        )}

           
      </div>
    </div>
  );
};

export default ProductList;
