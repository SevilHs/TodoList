import TodoList from "./components/TodoList";
import TodosProvider from "./context/TodosContext";

function App() {
  return (
    <>
      <TodosProvider>
        <TodoList />
      </TodosProvider>
    </>
  );
}

export default App;
