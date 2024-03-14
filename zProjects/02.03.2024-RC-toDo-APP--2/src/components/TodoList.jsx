import React, { useState } from 'react'



const TodoList = () => {

    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [selectedTodo, setSelectedTodo] = useState(null);

    function handleChange(e){
        setInputValue(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        if(inputValue.trim() == '') {
            alert('please write something')
        } else {
            setTodos([...todos, inputValue])
            setInputValue('')
        }
    }

    const handleDoubleClick = (index) => {
        const updatedTodos = [...todos];
        updatedTodos[index].completed = !updatedTodos[index].completed;
        setTodos(updatedTodos);
    }


    
    const handleDelete = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    


  return (
    <div className='container text-align-center'>
        <div className="col col-12 col-md-6 d-flex mx-auto mb-3">
            <div className="form-div">
            <form onSubmit={handleSubmit}>
            
                <input className='input-area h4 p-2' type="text" value={inputValue} onChange={handleChange} placeholder='Enter new Todo'/>
                <button className='add-btn bg-success text-light mb-2 p-2' type="submit">Add Todo</button>
            </form>

            <h1 className='text-light text-center'>Todos</h1>

            <ul className="list-group d-flex">
            {todos.map((todo, index) =>(
                <li className={`list-group-item ${todo.completed ? 'text-muted text-decoration-line-through' : 'list-group-item-warning'}`} key={index} onDoubleClick={() => handleDoubleClick(index)}>
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