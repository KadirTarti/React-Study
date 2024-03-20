import React from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {

  const navigate = useNavigate();
  return (
    <main className="main">
      <div>
        <h1 style={{textShadow:'2px 2px 2px black'}}>Abdulkadir TARTILACI </h1> <br /> <span style={{fontSize:'26px', fontWeight:'bold', textShadow:'2px 2px 2px black'}}>Shopping Application</span>
        <div className="main-buttons">
          <button
            className="btn btn-outline-primary px-4 fw-bold"
            onClick={()=> navigate('/new-product')}
          >
            Add New Product
          </button>
          <button
            className="btn btn-primary px-4 ms-3 fw-bold"
            onClick={()=> navigate('/products')}
           
          >
            See Products
          </button>
        </div>
      </div>
    </main>
  );
};

export default Main;
