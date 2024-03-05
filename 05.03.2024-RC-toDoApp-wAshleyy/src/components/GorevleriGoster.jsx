import React from "react";
import { FaTimesCircle } from "react-icons/fa";
const GorevleriGoster = ({todos, setTodos}) => {
  console.log(todos);

  const deleteTodo=(rmv)=>{
    // 1.yol
    // todos = todos.filter((i)=>i.id!==rmv)
    // setTodos(todos)
    // localStorage.setItem('gorevler', JSON.stringify(todos))

    // 2.yol
    localStorage.setItem(
      'gorevler',
      JSON.stringify(todos.filter((i)=>i.id!==rmv)));   // localstorage gönderme
      
      setTodos(JSON.parse(localStorage.getItem('gorevler')));
  }


  const styleStorage =(x)=> {
    localStorage.setItem(
      'gorevler',
      JSON.stringify(
      todos.map((a) => a.id===x.id ? {...a, isDone:!a.isDone }:a)));
    setTodos(JSON.parse(localStorage.getItem('gorevler')))
  }



  return (
    <div>
      {todos.map((x) =>{
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
  );
};

export default GorevleriGoster;
