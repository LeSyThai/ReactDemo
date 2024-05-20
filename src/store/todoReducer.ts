import { ADD_TODO_FAIL, ADD_TODO_SUCCESS, DELETE_TODO_FAIL, DELETE_TODO_SUCCESS, GET_TODOS_FAIL, GET_TODOS_SUCCESS, GET_TODO_BY_ID_FAIL, GET_TODO_BY_ID_SUCCESS, UPDATE_TODO_FAIL, UPDATE_TODO_SUCCESS } from "./types";

  const initialState = {
    todos : [],
    error: null
  };
  
  export const todoReducer = (
    state = initialState,
    action: {type: any; payload: any},
  ) => {
    switch (action.type) {
      case GET_TODOS_SUCCESS:
        // console.log('eiel')
        return {
          ...state,
          todos: action.payload,
          error: null,
        };
      case GET_TODOS_FAIL:
        return {
          ...state,
          todo: [],
          error: action.payload,
        };
      case GET_TODO_BY_ID_SUCCESS:
        return {
          ...state,
          todos: action.payload,
          error: null,
        }
      case GET_TODO_BY_ID_FAIL:
        return {
          ...state,
          todo: [],
          error: action.payload,
        };
      case ADD_TODO_SUCCESS:
        return {
            ...state,
            todos: [...state.todos, action.payload],
            error: null,
        };
      case ADD_TODO_FAIL:
        console.log('fail');
        return {
          ...state,
          error: action.payload,
        };
      case UPDATE_TODO_SUCCESS:
        return {
          ...state,
            todos: [...state.todos, action.payload],
            error: null,
        }
      case UPDATE_TODO_FAIL:
        return {
          ...state,
          error: action.payload,
        }
      case DELETE_TODO_SUCCESS:
        //console.log(action, '1233');
        return {
            ...state,
            todos: state.todos.filter(todo => todo?.id !== action.payload),
            error: null,
        };
      case DELETE_TODO_FAIL:
        return {
          ...state,
          error: action.payload,
        };
      default:
        return state;
    }
    return state;
  };
