import React, { useState } from "react";
import uuid from "react-uuid"
const AddPatient = ({ hastalar, setHastalar, doctors }) => {
  const [hastaName, setHstName] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setHastalar([
      ...hastalar,
      {
        id: uuid(),
        patientName: hastaName,
        day: date,
        isDone: false,
        myDoctor: doctors[0].doctorName,
      },
    ]);
    setHstName("");
    setDate("");
    // submit sonrası inputlardan value temizlemek için, hem alttaki işlemler yapılır, hemde inputlarda value={hastaName} yazarak browser da boşluksa boşluk isimse isim gözükmesi sağlanır
  };
console.log(hastalar);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name"> Patient Information</label>
          <input
            id="name"
            type="text"
            onChange={(e) => setHstName(e.target.value)}
            value={hastaName}
          />
        </div>

        <div className="form-control">
          <label htmlFor=""> Day & Time</label>
          <input
            type="datetime-local"
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />
        </div>

        <div>
          <button className="doc" type="submit">
            <span>{doctors[0].doctorName} </span> için kayıt oluştur
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPatient;
