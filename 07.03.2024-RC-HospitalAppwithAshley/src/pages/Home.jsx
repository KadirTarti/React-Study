import React, { useState } from "react";
import { hastaData, doctorData } from "../helper/Data";
import PatientList from "../components/PatientList";
import AddPatient from "../components/AddPatient";

const Home = () => {
  let [doctors, setDoctors] = useState(doctorData);
  const [hastalar, setHastalar] = useState(hastaData);
  const [show, setShow] = useState(true);

  const doctorClick = (idD) => {

    //!1.yol
    if (doctors.length === 4) {
      setShow(false);
      doctors = doctors.filter((a) => a.id === idD);
      setDoctors(doctors);

      setHastalar(hastalar.filter((a) => a.myDoctor === doctors[0].doctorName));
    } else {
      setShow(true);

      setDoctors(doctorData);
      setHastalar(hastaData);
    }

    //!2.yol 
    // setShow(!show);

    // //doktorlar dizisini tıklanan doktorla güncelle
    // setDoctors(show ? doctors.filter((i) => i.id === idD) : doctorData);
  };

  return (
    <div style={{ display: show ? "block" : "flex" }}>
      <div>
        <header>
          <h1>HOSPITAL</h1>
          <div className="dr">
            {doctors.map((dr) => (
              <div key={dr.id}>
                <img
                  src={dr.doctorImg}
                  width="180px"
                  height="150px"
                  className="btn"
                  style={{ background: show ? "aqua" : "lightgreen" }}
                  alt=""
                  onClick={() => doctorClick(dr.id)}
                />
                <h4
                  style={{
                    background: show ? "aqua" : "lightgreen",
                    borderLeft: `10px solid ${show ? "blue" : "green"}`,
                  }}
                >
                  {dr.doctorName}{" "}
                </h4>
              </div>
            ))}
          </div>
        </header>

        {!show && (
          <AddPatient
            hastalar={hastalar}
            setHastalar={setHastalar}
            doctors={doctors}
          />
        )}
      </div>

      <PatientList
        hastalar={hastalar}
        setHastalar={setHastalar}
        doctors={doctors}
      />
    </div>
  );
};

export default Home;
