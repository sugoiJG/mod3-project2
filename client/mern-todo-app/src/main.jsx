import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { TodoProvider } from "./TodoContext/TodoContext";
import { BrowserRouter } from "react-router-dom";


const rootElement = document.getElementById("root");
console.log(BrowserRouter)
createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <TodoProvider>
        <App />
      </TodoProvider>
    </BrowserRouter>
  </React.StrictMode>
);
