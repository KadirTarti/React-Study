import React from "react";
import { Doctor } from "./Doctor";

export default function Doctors({doctorArray}) {
  return (
    <div className="doctor-list">
      {doctorArray.map((doc) => (
        <Doctor img={doc.image} name={doc.name} />
      ))}
    </div>
  );
}
