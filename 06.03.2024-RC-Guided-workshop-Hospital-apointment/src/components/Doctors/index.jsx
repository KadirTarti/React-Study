import React from "react";
import { Doctor } from "./Doctor";
import { TotalData } from "../../helper/Data";

export default function Doctors({ doctorArray, setSelectedDoctor, setDisplay }) {
  const filterByDoctor = (doctorName) => {
    const dataArray = JSON.parse(localStorage.getItem("todos")) || TotalData;
    const filteredDoctor = [...dataArray].filter((item) => item.doktor === doctorName);
    console.log('filteredDoctor', filteredDoctor)
    setSelectedDoctor(filteredDoctor);
    setDisplay(true);
  };
  return (
    <div className="doctor-list">
      {doctorArray.map((doc) => (
        <Doctor
          filterByDoctor={filterByDoctor}
          img={`images/${doc.image}`}
          name={doc.doktor}
        />
      ))}
    </div>
  );
}
