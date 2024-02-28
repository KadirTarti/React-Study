import { useState } from "react";

const FormObject = () => {
  
  const [person, setPerson] = useState({
    isim: '',
    password: '',
    email: ''
  })

  //! destructing
  const {isim, password, email}=person

  const handlePerson =(event)=>{
    setPerson({...person, [event.target.id]: event.target.value})
  }

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
            NAME: <span className="text-danger">{isim}</span>
          </label>
          <input
            className="form-control"
            id="isim"
            type="text"
            onInput={handlePerson}
            // value={isim} 
          />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="password">
            PASSWORD
          </label>
          <input
            className="form-control"
            id="password" //! hepsine id verdiğimiz için handlePerson içinde event.target.id ile her birini yakalayabiliriz
            type="password"
            onChange={handlePerson}
            // value={pass}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
            EMAIL: <span className="fw-bold">{email}</span>
          </label>
          <input
            type="email"
            className="form-control"
            onChange={handlePerson}
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
