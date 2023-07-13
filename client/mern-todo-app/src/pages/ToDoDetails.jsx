import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
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
      <nav className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to="/" className="text-2xl font-bold">
          To Do List
        </Link>
      </nav>
      <h1 className="flex justify-center text-center text-2xl underline">
        To Do List
      </h1>
      <p className="flex justify-center text-center text-2xl">{todo.item}</p>
      <p className="flex justify-center text-center text-2xl">
        Priority: {todo.priority}
      </p>
      <p className="flex justify-center text-center text-2xl">
        Due Date: {new Date(todo.dueDate).toLocaleDateString("en-US")}
      </p>
    </div>
  );
};

export default TodoDetails;
