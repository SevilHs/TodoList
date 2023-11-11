import { createContext, useState, FC, ReactNode } from "react";
import { Todo, TodosContextState } from "../types";
import { v4 as uuid } from "uuid";

const value: TodosContextState = {
  todos: [],
  editValue: { text: "", id: "" },
  addTodo: () => {},
  editTodo: () => {},
  deleteTodo: () => {},
};

interface TodosProviderProps {
  children: ReactNode;
}

export const TodosContext = createContext<TodosContextState>(value);

const TodosProvider: FC<TodosProviderProps> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>(value.todos);
  const [editValue, setEditValue] = useState<Todo>(value.editValue);

  const addTodo = (text: string) => {
    if (editValue.id) {
      setTodos((todos: Todo[]) =>
        todos.map((todo) =>
          todo.id == editValue.id ? { ...todo, text } : todo
        )
      );
    } else {
      setTodos((todos: Todo[]) => [...todos, { text, id: uuid() }]);
    }
    setEditValue({ text: "", id: "" });
  };

  const editTodo = (todo: Todo) => {
    setEditValue(todo);
  };

  const deleteTodo = (id: string) => {
    setTodos((todos: Todo[]) => todos.filter((item) => item.id != id));
  };
  return (
    <TodosContext.Provider
      value={{
        todos,
        addTodo,
        editTodo,
        deleteTodo,
        editValue,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};
export default TodosProvider;
