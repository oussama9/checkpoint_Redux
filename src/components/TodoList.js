import React, { useState } from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

function DoneTasks() {
  const todos = useSelector((state) => state.todos);
  return (
    <div clasName="my-8">
      {todos.map((todo) => {
        if (todo.isDone) {
          return <TodoItem key={todo.id} todo={todo} />;
        }
      })}
    </div>
  );
}

function UnDoneTasks() {
  const todos = useSelector((state) => state.todos);
  return (
    <div clasName="my-8">
      {todos.map((todo) => {
        if (!todo.isDone) {
          return <TodoItem key={todo.id} todo={todo} />;
        }
      })}
    </div>
  );
}

function AllTasks() {
  const todos = useSelector((state) => state.todos);
  return (
    <div clasName="my-8">
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </div>
  );
}

function TodoList() {
  const todos = useSelector((state) => state.todos);
  const [change, setChange] = useState(0);

  if (!todos || !todos.length) {
    return <h3>You Have No Tasks</h3>;
  } else {
    switch (change) {
      case 1:
        return (
          <div clasName="my-8">
            <div>
              <button class="btn btn-outline-info" onClick={() => setChange(0)}>
                Show All Tasks
              </button>
              <button
                class="btn btn-outline-danger"
                onClick={() => setChange(1)}
              >
                Show Undone Tasks
              </button>
              <button
                class="btn btn-outline-success"
                onClick={() => setChange(2)}
              >
                Show Done Tasks
              </button>
            </div>
            <UnDoneTasks />
          </div>
        );
      case 2:
        return (
          <div clasName="my-8">
            <div>
              <button class="btn btn-outline-info" onClick={() => setChange(0)}>
                Show All Tasks
              </button>
              <button
                class="btn btn-outline-danger"
                onClick={() => setChange(1)}
              >
                Show Undone Tasks
              </button>
              <button
                class="btn btn-outline-success"
                onClick={() => setChange(2)}
              >
                Show Done Tasks
              </button>
            </div>
            <DoneTasks />
          </div>
        );
      case 0:
        return (
          <div clasName="my-8">
            <div>
              <button class="btn btn-outline-info" onClick={() => setChange(0)}>
                Show All Tasks
              </button>
              <button
                class="btn btn-outline-danger"
                onClick={() => setChange(1)}
              >
                Show Undone Tasks
              </button>
              <button
                class="btn btn-outline-success"
                onClick={() => setChange(2)}
              >
                Show Done Tasks
              </button>
            </div>
            <AllTasks />
          </div>
        );
    }
  }
}

export default TodoList;
