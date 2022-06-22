import "./App.css";
import TodoInputs from "./components/TodoInputs";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App m-5">
      <h1>TODO LIST</h1>
      <TodoInputs/>
      <TodoList/>
    </div>
  );
}

export default App;
