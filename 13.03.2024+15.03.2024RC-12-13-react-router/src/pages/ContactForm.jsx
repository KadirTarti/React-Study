import { useState } from "react";

const ContactForm = () => {
  const [person, setPerson] = useState({
    isim: "",
    password: "",
    email: "",
  });

  //?dest
  const { isim, password, email } = person;

  const handlePerson = (event) => {
    // console.log([event.target.id]);
    // console.log(event.target.value);

    setPerson({ ...person, [event.target.id]: event.target.value });
  };

  const getDatabase = (e) => {
    e.preventDefault();
    alert(`isim: ${isim}
    email:${email}
    `);

    //?state i sil
    setPerson({ isim: "", password: "", email: "" });
  };
  return (
    <div className="container text-center mt-4">
      <h1>*********************************************</h1>

      <h1>FORM(EVENTS)</h1>

      <form onSubmit={getDatabase}>
        <div className="mb-3">
          <label className="form-label" htmlFor="isim">
            NAME: <span className="text-danger">{isim} </span>
          </label>
          <input
            className="form-control"
            id="isim"
            type="text"
            name="isim"
            // onInput={(e)=>setPerson({ ...person, [e.target.id]: e.target.value })}
            onInput={handlePerson}
            value={isim}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="password">
            PASSWORD
          </label>
          <input
            className="form-control"
            id="password"
            name="password"
            type="password"
            onChange={handlePerson}
            value={password}
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
            value={email}
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

export default ContactForm;
