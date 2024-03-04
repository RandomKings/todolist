import "./App.css";
import Todo from "./pages/Todo";
import Landing from "./pages/Landing";
import Register from "./pages/register"
import Login from "./pages/login"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} exact />
        <Route path="/login" element={<Login />} />
        <Route path="/landing" element={<Landing/>} />
        <Route path="/todo" element={<Todo/>} />
      </Routes>
    </Router>

    // <Todo />
  );
}

export default App;
