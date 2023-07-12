import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TodoContext } from "../TodoContext/TodoContext";

const TodoDetails = () => {
  const { id } = useParams();
  const [todo, setTodo] = useState(null);

  const { listItems } = useContext(TodoContext);

  useEffect(() => {
    console.log("running use effect");
    const foundToDo = listItems.find((todo) => {
      if (todo._id == id) {
        return true;
      }
    });
    setTodo(foundToDo);
  }, []);
  if (!todo) {
    return <div className="flex justify-center text-center">Loading...</div>;
  }
  return (
    <div>
      <h1 className="flex justify-center text-center text-2xl underline">
        To Do List
      </h1>
      <p className="flex justify-center text-center text-2xl">{todo.item}</p>
      <p className="flex justify-center text-center text-2xl">
        Priority: {todo.priority}
      </p>
      <p className="flex justify-center text-center text-2xl">
        Due Date: {new Date(todo.dueDate).toLocaleDateString('en-US')}
      </p>
    </div>
  );
  
};

export default TodoDetails;
