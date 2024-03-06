import React from 'react'
import { FaTimesCircle } from "react-icons/fa";

const HastaListe = ({patientCard, setPatientCard}) => {


  const deleteTodo=(rmv)=>{
    localStorage.setItem(
      'gorevler',
      JSON.stringify(patientCard.filter((i)=>i.id!==rmv)));

      setPatientCard(JSON.parse(localStorage.getItem('gorevler')));
    }


    const styleStorage =(x)=> {
      localStorage.setItem(
        'gorevler',
        JSON.stringify(
          patientCard.map((a) => a.id===x.id ? {...a, isDone:!a.isDone }:a)));
          setPatientCard(JSON.parse(localStorage.getItem('gorevler')))
    }

  return (
    <div>
    {patientCard.map((x) =>{
      return(
        <div className= {x.isDone ? 'done' : 'gorev'}
          onDoubleClick={()=>styleStorage(x)}
          // onDoubleClick={()=> setTodos(todos.map((a) => a.id===x.id ? {...a, isDone:!a.isDone }:a))}
          >
            <h3>{x.text} <FaTimesCircle style={{color:'darkRed'}}
            onClick={()=>deleteTodo(x.id)}

            /> </h3>
            <h6>{x.day}</h6>
            </div>
      )
    })}

    </div>
  )
}

export default HastaListe