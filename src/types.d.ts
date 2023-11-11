type Todo = {
  text: string;
  id: string;
};

export type TodosContextState = {
  todos: Todo[];
  editValue: Todo;
  addTodo: (name: string) => void;
  editTodo: (name: Todo) => void;
  deleteTodo: (name: string) => void;
};
