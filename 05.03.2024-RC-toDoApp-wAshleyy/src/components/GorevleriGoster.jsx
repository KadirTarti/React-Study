import React from "react";
import { FaTimesCircle } from "react-icons/fa";
const GorevleriGoster = ({todos, setTodos}) => {
  console.log(todos);



  return (
    <div>
      {todos.map((x) =>{
        return(
          <div className= {x.isDone ? 'done' : 'gorev'}
          onDoubleClick={()=> setTodos(todos.map((a) => a.id===x.id ? {...a, isDone:!a.isDone }:a))}
          >
            <h3>{x.text} <FaTimesCircle style={{color:'red'}}/> </h3>
            <h6>{x.day}</h6>


          </div>
        )


      })}
    </div>
  );
};

export default GorevleriGoster;
