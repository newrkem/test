import { useState } from "react";
import "./App.css";

const App = () => {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "react를 배워봅시다.",
    },
  ]);
  return (
    <div className="container">
      <header className="hd">
        <input
          type="text"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <button
          onClick={() => {
            setTodos([...todos, { id: todos.length + 1, title: title }]);
          }}
        >
          추가하기
        </button>
      </header>

      <h1 className="h1">Todo list</h1>
      <div className="todos-container">
        {todos.map((todo) => (
          <div className="todo" key={todo.id}>
            {todo.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
