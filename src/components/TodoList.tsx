import React, {
  ChangeEvent,
  FormEvent,
  useContext,
  useState,
  useRef,
} from "react";
import ListItem from "./ListItem";
import { TodosContext } from "../context/TodosContext";

const TodoList: React.FC = () => {
  const { todos, addTodo, editValue } = useContext(TodosContext);
  const [inputValue, setInputValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const handleAdd = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue) {
      addTodo(inputValue);
      setInputValue("");
    } else {
      alert("Please add text!");
    }
  };

  return (
    <div>
      <h1>📝Todo List</h1>
      <form onSubmit={handleAdd}>
        <input
          value={inputValue}
          type="text"
          onChange={handleChangeInput}
          ref={inputRef}
          placeholder="Add Text..."
        />
        <button type="submit">{editValue.id ? "Edit" : "Add"}</button>
      </form>
      <hr />
      {todos?.map((todo) => (
        <ListItem
          key={todo.id}
          todo={todo}
          setInputValue={setInputValue}
          inputRef={inputRef}
        />
      ))}
    </div>
  );
};

export default TodoList;
