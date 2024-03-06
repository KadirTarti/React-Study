import React from 'react'
import { useState } from 'react';


const HastaEkle = ({h1, setH1}) => {
  const [hastalar, setHastalar] = useState([]);
  const [hastaIsim, setHastaIsim] = useState('');
  const [randevuTarihi, setRandevuTarihi] = useState('');
  const [doktorIsim, setDoktorIsim] = useState('');
  const [display, setDisplay] = useState(true)


  const hastaEkle = () => {
    
  }
  
  
  const handleSubmit = (e) => {
    e.preventDefault();  // submit normalde inputu temizliyor ama e.prevent default nedeniyle bu temizlik gerçekleşmedi
    if(hastaIsim.trim() == '') {
      alert ('Please try to add something after writing it...')
    } else{
      
      const yeniHasta = { hastaIsim, randevuTarihi, doktorIsim };
      setHastalar([...hastalar, yeniHasta]);
      setHastaIsim('');
      setRandevuTarihi('');
      setDoktorIsim('');
        // const id = Math.ceil(Math.random() * 100) + 6;

          // localStorage.setItem('gorevler', JSON.stringify([...todos, newTodos]))   // localstorage gönderme
          // setTodos(JSON.parse(localStorage.getItem('gorevler')));
      }
    }


 

  return (
    <div>
    <header className="header">
        <h3>Hastane Randevu Sistemi</h3>
        <button
          className="btn"
          style={{background: display ? "green" : "red"}}
          onClick = {()=>setDisplay(!display)}
        >
        {display ? "CLOSE" : 'SHOW  '} "Hasta Randevuları"
        </button>
      </header>

      {display && <form onSubmit={handleSubmit}>  
      <div className="form-control">
        <label htmlFor="text">Task</label>
          <input 
              id='text'
              type="text" 
              name='text'
              placeholder="Hasta İsmi" 
              value={hastaIsim} 
              onChange={(e) => setHastaIsim(e.target.value)} 
            />
      </div>

      <div className="form-control">
        <label htmlFor='day'>Day and Time</label>
          <input 
            id='day'
            type="datetime-local" 
            value={randevuTarihi} 
            name='day'
            onChange={(e) => setRandevuTarihi(e.target.value)} 
          />
      </div>
      
      {/* <input 
        type="text" 
        placeholder="Doktor İsmi" 
        value={doktorIsim} 
        onChange={(e) => setDoktorIsim(e.target.value)} 
      /> */}


      <button type='submit'>Hasta Ekle</button>
      {hastalar.map((hasta, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <h3>{hasta.hastaIsim}</h3>
          <p>Randevu Tarihi: {hasta.randevuTarihi}</p>
          <p>Doktor: {hasta.doktorIsim}</p>
        </div>
      ))}
      </form>
          }
    {hastalar.map((hasta, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <h3>{hasta.hastaIsim}</h3>
          <p>Randevu Tarihi: {hasta.randevuTarihi}</p>
          <p>Doktor: {hasta.doktorIsim}</p>
        </div>
      ))}

    </div>
  );
}




export default HastaEkle