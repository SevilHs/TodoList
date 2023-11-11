import React, { useContext } from "react";
import { Todo } from "../types";
import { TodosContext } from "../context/TodosContext";

interface TodoListItemProps {
  todo: Todo;
  inputRef: React.RefObject<HTMLInputElement>,
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}
const ListItem: React.FC<TodoListItemProps> = ({ todo, setInputValue,inputRef }) => {
  const { editTodo, deleteTodo } = useContext(TodosContext);
  const handleEditTodo = () => {
    setInputValue(todo.text);
    editTodo(todo);
    inputRef.current && inputRef.current.focus()
  };
  
  return (
    <div className="item">
      <h3>{todo.text}</h3>
      <div className="actions">
        <button onClick={handleEditTodo}>Edit</button>
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </div>
    </div>
  );
};

export default ListItem;
