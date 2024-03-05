import React from "react";
import { FaTimesCircle } from "react-icons/fa";
const GorevleriGoster = ({todos, setTodos}) => {
  console.log(todos);

  const deleteTodo=(rmv)=>{
    setTodos(todos.filter((i)=>i.id!==rmv))
  }



  return (
    <div>
      {todos.map((x) =>{
        return(
          <div className= {x.isDone ? 'done' : 'gorev'}
          onDoubleClick={()=> setTodos(todos.map((a) => a.id===x.id ? {...a, isDone:!a.isDone }:a))}
          >
            <h3>{x.text} <FaTimesCircle style={{color:'red'}}
            onClick={()=>deleteTodo(x.id)}

            /> </h3>
            <h6>{x.day}</h6>


          </div>
        )


      })}
    </div>
  );
};

export default GorevleriGoster;
