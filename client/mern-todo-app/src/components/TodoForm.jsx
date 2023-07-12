import { useContext } from "react";
import { TodoContext } from "../TodoContext/TodoContext";


function TodoForm() {
  const {
    itemText,
    setItemText,
    priority,
    setPriority,
    dueDate,
    setDueDate,
    addItem,
  } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem();
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input fields and buttons */}
    </form>
  );
}

export default TodoForm;
