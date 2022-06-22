import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, updateTodo, filtre } from "../actions/actions";
import { useState } from "react";

function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const [editable, setEditable] = useState(false);

  const [newt, setNewt] = useState(todo.name);
  const [clsbtn, setClsbtn] = useState("btn btn-secondary m-2");
  const isDone = useSelector((state) => state.todos.isDone);

  return (
    <div>
      <div
        className="row mx-2 align-item-center"
        style={{
          border: "1px solid black",
          borderRadius: "5px",
          marginTop: "20px",
        }}
      >
        <div
          className="col"
          style={{
            marginTop: "10px",
          }}
        >
          {editable ? (
            <input
              type="texte"
              classeName="form-contol"
              value={newt}
              onChange={(e) => setNewt(e.target.value)}
            />
          ) : (
            <h4>{todo.name}</h4>
          )}
        </div>
        <button
          className={clsbtn}
          onClick={() => {
            dispatch(filtre(todo.id, todo.isDone));
            if (todo.isDone === false) {
              setClsbtn("btn btn-success m-2");
            } else if (todo.isDone === true) {
              setClsbtn("btn btn-secondary m-2");
            }
          }}
        >
          {todo.isDone ? "Done" : "unDone"}
        </button>
        <button
          className="btn btn-primary m-2"
          onClick={() => {
            setEditable(!editable);
            if (editable) {
              dispatch(updateTodo(todo.id, newt));
            }
          }}
        >
          {editable ? "Update" : "Edit"}
        </button>
        <button
          onClick={() => dispatch(deleteTodo(todo.id))}
          className="btn btn-danger m-2"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
