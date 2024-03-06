import React, { useState } from 'react'

const HastaEkle = ({patientCard, setPatientCard}) => {

  const [ptext, setPtext] = useState('');
  const [day, setDay] = useState('');
  const [display, setDisplay] = useState(true);


      const handleSubmit = (e) =>{
        e.preventDefault();
        if (ptext.trim() =='') {
          alert ('please write a text')
        } else {
          const id = Math.ceil(Math.random() * 100) + 6

          const newPatient = {id:id, text: ptext, day:day, bittiMi: false }

          localStorage.setItem('gorevler', JSON.stringify([...patientCard, newPatient]))   // localstorage gönderme
          setPatientCard(JSON.parse(localStorage.getItem('gorevler')));

          setPtext('');
          setDay('')

        }
      }

  return (
    <div>
     <header className="header">
        <h1>Patient Appointment System</h1>
        <button
          className="btn"
          style={{background: display ? "red" : "green"}}
          onClick = {()=>setDisplay(!display)}
      
        >
        {display ? "CLOSE" : 'SHOW  '} "Appointment Card"
        </button>
      </header>

      {display && <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="text">Task</label>
            <input
              id="text"
              type="text"
              name="text"
              onChange={(e)=>setPtext(e.target.value)}
              value={ptext}/>
          </div>

          <div className="form-control">
            <label htmlFor="day">Day & Time</label>
            <input
              id="day"
              type="datetime-local"
              onChange={(e)=>setDay(e.target.value)}
              name="day"
              value={day}/>
          </div>

          <div>
            <button className="btn btn-submit" type="submit">
              SUBMİT
            </button>
          </div>
      </form>
      }
      </div>
      );
      };

export default HastaEkle