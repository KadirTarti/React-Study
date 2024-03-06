import React from "react";
import HastaItem from './HastaItem';

const Hastalar = ({ hastalarArray, setTodos }) => {
  if(hastalarArray.length === 0) return <span>Hasta verisi yok</span>
  return (
    <div className='Hastalar-container'>
      {hastalarArray.map((hasta, index) => (
        <HastaItem
          key={index}
          hastaId={hasta.id}
          hastaAdi={hasta.text}
          doktorAdi={hasta.doktor}
          tarih={hasta.day}
          bittiMi={hasta.bittiMi}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default Hastalar;
