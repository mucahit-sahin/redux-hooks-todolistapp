import "./App.css";
import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { addTodoAction, deleteTodoAction } from "./actions/listActions";

function App() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");
  const addTodo = (todo) => dispatch(addTodoAction(todo));
  const deleteTodo = (todoId) => dispatch(deleteTodoAction(todoId));

  const onSubmit = (event) => {
    event.preventDefault();
    if (todo.trim() === "") return;
    addTodo({
      id: uuid(),
      name: todo,
      complete: false,
    });
    setTodo("");
  };

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={todo}
          onChange={(event) => setTodo(event.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.name}
            <span onClick={deleteTodo.bind(null, todo.id)}>Delete</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
