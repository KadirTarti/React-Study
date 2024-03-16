import React, { useState } from "react";
import { hastaData, doctorData } from "../helper/Data";
import PatientList from "../components/PatientList";
import AddPatient from "../components/AddPatient";
import bootstrap from '../../node_modules/bootstrap/dist/css/bootstrap.css'
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";

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
    <div>

      <Navbar expand="lg" className="bg-body-">
        <Container fluid>
          {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
          <img src={'https://www.umbrellaz.de/wp-content/uploads/2017/04/Mike-Tec-Autowerkstatt-Logo-Referenz-Umbrellaz-Design-Agentur-1.png'} 
          alt="" width={'130px'} />
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="navlinks me-auto my-2 my-lg-0"  style={{ maxHeight: '100px'}} navbarScroll
            >
              <Nav.Link className="navlink fs-4" href="#action1">Home</Nav.Link>              
              <Nav.Link className="navlink fs-4" href="#home">Make an Appointment</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      

    


      <div style={{ display: show ? "block" : "flex" }}>
        <div>
          <header>
            <h1>SCHAFF YALE HOSPITAL</h1>
            <div className="dr">
              {doctors.map((dr) => (
                <div key={dr.id}>
                  <img
                    src={dr.doctorImg}
                    width="300px"
                    height="200px"
                    className="btn"
                    style={{ background: show ? "#55B4B0" : "#98B4D4", borderRadius:'5px' }}
                    alt=""
                    onClick={() => doctorClick(dr.id)}
                  />
                  <h4
                    style={{
                      background: show ? "#55B4B0" : "#98B4D4",
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
    </div>
  );
};

export default Home;
