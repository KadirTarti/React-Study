const initialState = {
    todolist: []
}


//? types

const ADD = "ADD"
const DEL = "DEL"
const CLR = "CLR"
const TGL = "TGL"


export const addTodo = (payload) => ({type: ADD, payload})
export const clearTodo = () => ({type: CLR})
export const todoReducer = (state=initialState, {type,payLoad}) => {
    switch (type) {
        case ADD :
            return {...state, todoList:[...state.todoList, {text:payLoad, complated:false, id: crypto.randomUUID()}]}
        case CLR:
            return {count: state.count + 1}
        default:
            return state
    }

}
