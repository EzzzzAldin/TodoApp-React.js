import React, { useState } from "react";

import styles from "./TodoForm.module.css";
import Container from "../UI/Container";

const TodoForm = (props) => {
  // Create Event To Lithen Data from Input
  // 1 => Create Evenet onChange to lithen any word entered in input
  // 2 => Create Two Function to Get Value Of Input And replace value in enterd
  // 3 => Create Event onSubmit To Get All Data Of Todo
  const [enteredTitile, setEnteredTitile] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [isValid, setIsValid] = useState(true);

  const enteredTitileHandler = (event) => {
    // Lithen Event To get Data And Replace value enteredTitle
    setEnteredTitile(event.target.value);
  };

  const enteredDescriptionHandler = (event) => {
    if (enteredTitile === "" || enteredDescription === "") {
      setIsValid(true);
    }
    // Lithen Event To get Data And Replace value enteredDescription
    setEnteredDescription(event.target.value);
  };

  const submitHandler = (event) => {
    // To Do not Reload Page When Send Data
    event.preventDefault();
    // Check If Todo It is Empty
    if (enteredTitile === "" || enteredDescription === "")
      return setIsValid(false);
    // Add Data Of Todo In One Obj
    const todoData = {
      title: enteredTitile,
      description: enteredDescription,
    };
    // Send Obj To parent To show in Parent Component
    props.onSaveTodoData(todoData);
    // Empty Value of input after send data
    setEnteredTitile("");
    setEnteredDescription("");
  };
  return (
    <form onSubmit={submitHandler}>
      <Container>
        <h1>Todo List</h1>
        <h3>Add new thing to do.</h3>
        <div
          className={`${styles["new-todo-controls"]} ${
            !isValid && styles.invalid
          } ${console.log(!isValid)}`}
        >
          <div className={styles["new-todo-control"]}>
            <label>Title</label>
            <input
              type="text"
              value={enteredTitile}
              onChange={enteredTitileHandler}
            />
          </div>
          <div className={styles["new-todo-control"]}>
            <label>Description</label>
            <input
              type="text"
              value={enteredDescription}
              onChange={enteredDescriptionHandler}
            />
          </div>
        </div>
        <div className={styles["new-todo-action"]}>
          <button type="submit">Add Todo</button>
        </div>
      </Container>
    </form>
  );
};

export default TodoForm;
