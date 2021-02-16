import { createStore } from "redux";
const initialstate = {
  todos: [
    { id: 1, name: "React" },
    { id: 2, name: "Javascript" },
  ],
};

export const store = createStore(reducer, initialstate);

function reducer(state, action) {
  switch (action.type) {
    case "Add":
      return { ...state, todos: [...state.todos, action.payload] };
    case "Delete":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
}
