//! tüm tanımlama işlemlerini buraya taşımış olduk. Redux toolkit ile birlikte tüm tanımlamalar tek dosyada yapılıyor.

const initialState = {
  todoList: [],
};

//? types
const ADD = "ADD";
const DEL = "DEL";
const CLR = "CLR";
const TGL = "TGL";

//! action creators

// export const addTodo = (text) => ({type:ADD,payload:text})
export const addTodo = (payload) => ({ type: ADD, payload: payload });
export const clearTodo = () => ({ type: CLR });

export const deleteTodo = (payload) => ({ type: DEL, payload });
export const toggleTodo = (payload) => ({ type: TGL, payload });

export const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD:
      // return {...state,todoList: [...state.todoList,{text:payload,completed:false,id: new Date().getTime()}]}
      // return {...state,todoList: [...state.todoList,payload]}
      return {
        ...state,
        todoList: [
          ...state.todoList,
          { text: payload, completed: false, id: crypto.randomUUID() },
        ],
      };
    case CLR:
      // return initialState
      return { ...state, todoList: [] };
    case DEL:
      return {
        ...state,
        todoList: state.todoList.filter((item) => item.id !== payload),
      };

    case TGL:
      return {
        ...state,
        todoList: state.todoList.map((item) =>
          item.id === payload ? { ...item, completed: !item.completed } : item
        ),
      };
    default:
      return state; //* olmayan bir type bilgisi geldiğinde de statei olduğu gibi döndürmelidir.
  }
};
