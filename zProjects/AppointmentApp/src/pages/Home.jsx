import React, { useState } from "react";
import { hastaData, doctorData } from "../helper/Data";
import PatientList from "../components/PatientList";
import AddPatient from "../components/AddPatient";
import bootstrap from '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Button, Card, Container, Form, Nav, Navbar } from "react-bootstrap";

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
            <h1 className='mt-4 fw-bold'>MIKE-TEC CAR REPAIR</h1>

            <h3 className='mt-4 fw-bold'> Workshop appointment for your car repair!</h3>
            
            <p>
                Get a 20% discount in the Bosch DIY Shop now!
                For your next online booking at one of our 1,000 Bosch Car Service workshops, you will receive a 20% online voucher that you can redeem in the Bosch DIY Shop.

                <br /> <br /><b>Browse through the Bosch DIY Shop now</b> <br /><br />

                Simply book the service online, tick the conditions of participation before confirming your booking and, after sending your voucher by email, browse the online range for DIY, gardening and cleaning and save.

                Enter your vehicle details & choose your desired date!
                </p>

                <h2 className='mt-4 text-center'>Booking</h2>
                <h5 className='h-info mt-2 text-center'>Please click on the image where you would like to make an appointment!</h5>
            <div className="dr mt-3">
              {doctors.map((dr) => (
                <div key={dr.id}>
                  <img
                    src={dr.doctorImg}
                    width="250px"
                    height="200px"
                    className="btn rounded-3"
                    style={{ background: show ? "white" : "#BCBEFF", borderRadius:'5px', border:'3px solid black' }}
                    alt=""
                    onClick={() => doctorClick(dr.id)}
                  />
                  <h4 className="mt-2"
                    style={{
                      background: show ? "white" : "#BCBEFF",
                      color: show ? "black" : "black",
                      borderLeft: `10px solid ${show ? "black" : "white"}`,
                      borderRight: `10px solid ${show ? "black" : "white"}`,
                      borderRadius:'5px solid black',
                      border:'3px solid black'
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
