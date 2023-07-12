import { useContext } from "react";
import { TodoContext } from "./TodoContext/TodoContext.jsx";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const { listItems } = useContext(TodoContext);

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm />
      <div>
        {listItems.map((item) => (
          <TodoItem key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
