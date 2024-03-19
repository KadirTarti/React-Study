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
           
          <ul class="list-group list-group-flush ms-5 w-75">
            <li class="list-group-item border-dark ">Subtotal s</li>
            <li class="list-group-item border-dark">Tax (18%)</li>
            <li class="list-group-item border-dark">Shipping</li>
            <li class="list-group-item border-bottom border-dark">Total</li>
          </ul>
          </>
        )}

           
      </div>
    </div>
  );
};

export default ProductList;
