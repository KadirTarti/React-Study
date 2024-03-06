import React, { useState } from "react";
import { TotalData, DoktorData } from "../helper/Data";
import Footer from "../components/Footer";
import Doctors from "../components/Doctors";
import Hastalar from "../components/Hastalar";
import Display from "../components/Display";

const Home = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || TotalData
  );
  const [display, setDisplay] = useState(false);
  const [selectedDoktor, setSelectedDoctor] = useState("");

  return (
    <div>
      {!display && (
        <>
          <Doctors
            doctorArray={DoktorData}
            setDisplay={setDisplay}
            setSelectedDoctor={setSelectedDoctor}
          />
          <Hastalar hastalarArray={todos} setTodos={setTodos} />
        </>
      )}
      {display && (
        <Display selectedDoktor={selectedDoktor} setDisplay={setDisplay} />
      )}

      <Footer />
    </div>
  );
};

export default Home;
