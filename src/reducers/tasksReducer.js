import {
    ADD_TODO,
    DELETE_TODO,
    UPDATE_TODO,
    FILTRE
  } from "../actions/actionsType";

let initialState = {
    todos: [],
  };
  
  export const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TODO:
        return {
          ...state,
          todos: [...state.todos, action.payload],
        };
  
      case DELETE_TODO:
        return {
          ...state,
          todos: state.todos.filter((todo) => todo.id != action.payload),
        };
  
      case UPDATE_TODO:
        return {
          ...state,
          todos: state.todos.map((todo) =>
            todo.id === action.payload.id
              ? { ...todo, name: action.payload.new }
              : todo
          ),
        };
  
        case FILTRE:
          return {
            ...state,
            todos: state.todos.map((todo) =>
              todo.id === action.payload.id
                ? { ...todo, isDone: !action.payload.isdone }
                : todo
            ),
          };
  
        
  
      default:
        return state;
    }
  };