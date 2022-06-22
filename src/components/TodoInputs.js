import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addTodo } from "../actions/actions";

function TodoInputs() {
  const dispatch = useDispatch();
  const [name, setName] = useState();
  return (
    <div>
      <div className="row m-2">
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          className="col form-control"
          placeholder="Add a Task"
        />
        <button
          className="btn btn-primary mx-2"
          onClick={() => {
            dispatch(addTodo(name));
            setName("");
          }}
        >
          ADD NEW TASK
        </button>
      </div>
    </div>
  );
}

export default TodoInputs;
