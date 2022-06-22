import { ADD_TODO, DELETE_TODO, UPDATE_TODO, FILTRE } from "./actionsType";

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: { name: todo, id: Math.ceil(Math.random() * 100), isDone : false },
  };
};

export const deleteTodo = (todoId) => {
  return {
    type: DELETE_TODO,
    payload: todoId,
  };
};

export const updateTodo = (todoid, newt) => {
  return {
    type: UPDATE_TODO,
    payload: {id: todoid, new: newt}
  };
};

export const filtre = (todoid,isdone) => {
    return {type : FILTRE,
        payload: {id: todoid, isdone: isdone}}
}


