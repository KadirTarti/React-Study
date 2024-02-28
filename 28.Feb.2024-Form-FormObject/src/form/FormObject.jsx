import { useState } from "react";

const FormObject = () => {


  const getDataBase = (e) => {
    e.preventDefault()

  };

  return (
    <div className="container text-center mt-4">
      <h1>*********************************************</h1>

      <h1>FORM(EVENTS)</h1>

      <form onSubmit={getDataBase}>
        <div className="mb-3">
          <label className="form-label" htmlFor="isim">
            NAME: <span className="text-danger"></span>
          </label>
          <input
            className="form-control"
            id="isim"
            type="text"
            // onInput={(e) => setIsim(e.target.value)}
            // value={isim} 
          />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="password">
            PASSWORD
          </label>
          <input
            className="form-control"
            id="password"
            type="password"
            // onChange={(e) => setPass(e.target.value)}
            // value={pass}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
            EMAIL: <span className="fw-bold">{}</span>
          </label>
          <input
            type="email"
            className="form-control"
            // value={email}
            id="email"
            name="email"
          />
        </div>
        
        <button type="submit" className="btn btn-primary">
          GÖNDER (submit)
        </button>
      </form>
    </div>
  );
};

export default FormObject;
