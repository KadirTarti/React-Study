import React, { useState } from 'react'


const TodoList = () => {

    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    function handleChange(e){
        setInputValue(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        setTodos([...todos, inputValue])
        setInputValue('')
    }

    const handleDelete = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }


  return (
    <div className='container text-align-center'>
    <h1 className='h1 m-5 text-center text-danger'> Todo List</h1>
        <div className="col col-12 col-md-6 mx-auto mb-3">
            <div className="input-grop">
            <form onSubmit={handleSubmit}>
                <input className='input h4 w-75 p-2' type="text" value={inputValue} onChange={handleChange} placeholder='Enter new Todo'/>
                <button className='input-group-text w-25 bg-success btn btn-primary mb-2 p-2' type="submit">Add Todo</button>
            </form>

            <ul className="list-group d-flex">
            {todos.map((todo, index) =>(
                <li className="list-group-item list-group-item-warning" key={index}>
                {todo}
                <button className='input-group-text btn btn-danger' onClick={()=> handleDelete(index)}>Delete</button>
                </li>
            ))}
            </ul>
            </div>
        </div>
    </div>
  )
}

export default TodoList