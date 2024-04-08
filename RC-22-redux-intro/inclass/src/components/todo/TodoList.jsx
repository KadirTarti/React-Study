import TodoItem from "./TodoItem"

const TodoList = () => {

  // const {todoList} = useSelector(state => state.todo)
  //? alttaki ifade üstteki ile aynı. sadece todoList'i süslüden kurtardık 
  const todoList = useSelector ( state => state.todo.todoList)


  const handleClearList = () => {}

  return (
    <div>
      <div>
        {[1, 2]?.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
      <div className="clear-wrapper">
        <button onClick={handleClearList} className="clear-button">
          Clear
        </button>
      </div>
    </div>
  )
}

export default TodoList
