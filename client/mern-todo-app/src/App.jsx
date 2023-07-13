import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TodoDetails from "./pages/ToDoDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<TodoDetails />} />
      </Routes>
    </div>
  );
}

export default App;
