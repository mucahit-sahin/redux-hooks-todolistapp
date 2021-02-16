import { createStore } from "redux";
import { v4 as uuid } from "uuid";

const initialstate = {
  todos: [
    { id: uuid(), name: "React" },
    { id: uuid(), name: "Javascript" },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, todos: [...state.todos, action.payload] };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
}

export const store = createStore(reducer, initialstate);
