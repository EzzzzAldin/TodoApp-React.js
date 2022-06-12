import React from "react";
import "./NewTodo.css";
import TodoForm from "./TodoForm";

const NewTodo = (props) => {
  // Get Data From Child => TodoForm
  const saveTodoDataHandler = (enteredTodoData) => {
    // Parameter is data get from child => todoData
    const todoData = {
      ...enteredTodoData,
      id: Math.random().toString(),
    };
    // Send Obj To parent To show in Parent Component
    props.onAddTodo(todoData)
  };
  return (
    <div className="new-todo">
      <TodoForm onSaveTodoData={saveTodoDataHandler} />
    </div>
  );
};

export default NewTodo;
