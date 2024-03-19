import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";



const UpdateProduct = () => {
  const {state:{product}} = useLocation()
  // console.log(product);
  const [produkt, setProdukt] = useState(product)
  const navigate = useNavigate()


  const handleSubmit=async(e)=>{
    e.preventDefault()
    await axios.put(`https://63f4e5583f99f5855db9e941.mockapi.io/products/${produkt.id}`, produkt);
    navigate(-1)  //database'de update yapıldıktan sonra bir önceki (product lists) sayfaya geri dön
  }

  return (
    <div className="container">
      <article
        name="add-product"
        className="mb-4 mt-4 col col-lg-6 mx-auto border rounded-2 bg-opacity-50 bg-light"
      >
        <h1 className="text-center">Update Product</h1>

        <form onSubmit={handleSubmit} className="p-2" >
          <div className="mb-3">
            <label htmlFor="add-name" className="form-label">
              Product Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={produkt.name}
              onChange={(e)=> setProdukt({...produkt, name:e.target.value})}
            
           
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="add-price" className="form-label">
              Product Price
            </label>
            <input
              type="number"
              className="form-control"
              name="price"
              value={produkt.price}
              onChange={(e)=> setProdukt({...produkt, price:e.target.value})}

             
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="add-quantity" className="form-label">
              Product Quantity
            </label>
            <input
              type="number"
              className="form-control"
              name="amount"
              value={produkt.amount}
              onChange={(e)=> setProdukt({...produkt, amount:e.target.value})}

             
              required
            />
          </div>
          <label htmlFor="add-image" className="form-label">
            Product Image <span style={{fontSize:'14px', color:'brown'}}>(Please copy the image adress of your product!)</span> 
          </label>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon3">
              https://example.com/
            </span>
            <input
              type="url"
              className="form-control"
              name="image"
              aria-describedby="basic-addon3"
              value={produkt.image}
              onChange={(e)=> setProdukt({...produkt, image:e.target.value})}
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="add-to-cart btn btn-success btn-sm"
            >
              <i className="fa-solid fa-cart-plus me-2"></i>Save To Product
            </button>
          </div>
        </form>
      </article>
    </div>
  );
};

export default UpdateProduct;
