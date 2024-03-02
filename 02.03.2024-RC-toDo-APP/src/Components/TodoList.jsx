import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Go to supermarket",
      completed: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      completed: false,
    },
  ]);

  const [text, setText] = useState("");
  function addTask(text) {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setText("");
  }
  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }
  function toggleCompleted(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      })
    );
  }
  return (
      <div className="container todo-list col col-12 col-md6 d-flex mx-auto list-group">
      <h2 className="text-center text-secondary">Todos</h2>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => addTask(text)}>Add</button>
      
        {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleCompleted={toggleCompleted}
        />
      ))}

      <li role="button" className="m-2 text-capitalize rounded-5 d-flex justify-content-between list-group-item list-group-item-danger">  
          <span className="text-decoration-none">RC ile Todolist</span>
        </li>
     
      
      {/* <div className="col col-12 col-md6 d-flex mx-auto list-group">
        <li
          role="button"
          className="m-2 text-capitalize rounded-5 d-flex justify-content-between list-group-item list-group-item-danger"
        >
          <span className="text-decoration-none">RC ile Todolist</span>
        </li>
      </div> */}

    </div>
  );
};

export default TodoList;
