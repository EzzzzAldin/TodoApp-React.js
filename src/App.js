import React, { useState } from "react";
import Todos from "./components/Todos/Todos";
import NewTodo from "./components/NewTodo/NewTodo";

// Dummy Data To Add Todos Dynamic
const DUMMY_TODOS = [
  {
    id: "e1",
    title: "todo1",
    description: "Test Test Test",
  },
];

const App = () => {
  // Craete Event To get Data from newTodo and send To Show in Todos
  const [todos, setTodos] = useState(DUMMY_TODOS);

  const addTodoHandler = (todo) => {
    // use ...todo to add new Data with old data
    setTodos((prevTodos) => {
      return [todo, ...prevTodos];
    });
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
};

export default App;
