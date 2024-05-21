import React from "react";
import { FaTimesCircle } from "react-icons/fa";
const PatientList = ({ hastalar, setHastalar,doctors }) => {
  return (
    <div>
      {hastalar.map((patient) => (
        <div>
          {/* //!2.yolda açık olacak kısım
          {doctors.map(
            (dr) =>
              dr.doctorName === patient.myDoctor && ( */}
          <div
            className={patient.isDone ? "trueStil" : "falseStyle"}
            onDoubleClick={() =>
              setHastalar(
                hastalar.map((hst) =>
                  hst.id === patient.id
                    ? { ...patient, isDone: !hst.isDone }
                    : hst
                )
              )
            }
          >
            <div>
              <h2>{patient.patientName} </h2>
              <h4>{patient.day} </h4>
              <h3>{patient.myDoctor} </h3>
            </div>

            <FaTimesCircle
              onClick={() =>
                setHastalar(hastalar.filter((a) => a.id !== patient.id))
              }
              style={{ color: "#BC243C", fontSize: '20px' }}
            />
          </div>
          {/* ) )} */}
        </div>
      ))}
    </div>
  );
};

export default PatientList;
