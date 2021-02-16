//actions
export const addTodoAction = (todo) => ({
  type: "Add",
  payload: todo,
});
export const deleteTodoAction = (todoId) => ({
  type: "Delete",
  payload: todoId,
});
