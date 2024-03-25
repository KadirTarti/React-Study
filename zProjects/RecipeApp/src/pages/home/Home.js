import React from "react";
import bootstrap from "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div className="">
      RECIPE APP
      <div className="search-and-button">
      <div class="input-group">
  <input type="search" class="rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
  <button type="button" class="btn btn-outline-primary" data-mdb-ripple-init>search</button>
</div>
      
      <div class="dropdown show">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown link
  </a>

  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>

      </div>
    </div>
  );
};

export default Home;
