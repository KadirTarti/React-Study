import React from "react";
import { Navigate } from "react-router-dom";

const Main = () => {

  return (
    <main className="main">
      <div>
        <h1>Welcome to Shopping Cart Application</h1>
        <div className="main-buttons">
          <button
            className="btn btn-outline-primary px-4"
            onClick={()=> Navigate('/new-product')}
          >
            Add New Product
          </button>
          <button
            className="btn btn-primary px-4 ms-3"
            onClick={()=> Navigate('/products')}
           
          >
            See Products
          </button>
        </div>
      </div>
    </main>
  );
};

export default Main;
