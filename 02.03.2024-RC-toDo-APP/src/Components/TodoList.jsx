import React from 'react'

const TodoList = () => {
  return (
    <div>
    <h2 className='text-center text-secondary'>Todos</h2>
    <div className="col col-12 col-md6 d-flex mx-auto list-group">
        <li role='button' className='m-2 text-capitalize rounded-5 d-flex justify-content-between list-group-item list-group-item-danger'>
            <span className='text-decoration-none'>RC ile Todolist</span>
        </li>
    </div>


    
    </div>
  )
}

export default TodoList