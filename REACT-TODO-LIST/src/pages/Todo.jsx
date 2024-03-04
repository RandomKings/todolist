import "../App.css";
import { useState } from "react";
import { TodoForm } from "../components/TodoForm";
import { TodoList } from "../components/TodoList";
import { useSignOut, useAuthState } from "react-firebase-hooks/auth";
import { auth } from "/firebase";
import { useNavigate } from "react-router-dom";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [signOut] = useSignOut(auth);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  function addTodo(title) {
    setTodos((currentTodos) => [
      ...currentTodos,
      { id: crypto.randomUUID(), title, completed: false },
    ]);
  }

  const handleLogOut = async () => {
    const success = await signOut();

    if (success) {
      alert("You have been signed out");
      navigate("/");
    }
  };

  function toggleTodo(id, completed) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed } : todo
      )
    );
  }

  function editTodo(id, newTitle) {
    const editedTodo = todos.map((todo) =>
      id === todo.id ? { ...todo, title: newTitle } : todo
    );
    setTodos(editedTodo);
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  }

  function filterTodos() {
    switch (filter) {
      case "completed":
        return todos.filter((todo) => todo.completed);
      case "ongoing":
        return todos.filter((todo) => !todo.completed);
      default:
        return todos;
    }
  }

  return (
    <>
      <button onClick={handleLogOut} className="flex-none p-1.5 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
        Sign Out
      </button>
      <div>
        <TodoForm addTodo={addTodo} />
      </div>
      <div className="space-x-2 mt-4">
        <button
          className={`px-4 py-2 rounded ${
            filter === "all" ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"
          }`}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={`px-4 py-2 rounded ${
            filter === "completed" ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"
          }`}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
        <button
          className={`px-4 py-2 rounded ${
            filter === "ongoing" ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"
          }`}
          onClick={() => setFilter("ongoing")}
        >
          Ongoing
        </button>
      </div>
      <TodoList
        todos={filterTodos()}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    </>
  );
}

export default Todo;
