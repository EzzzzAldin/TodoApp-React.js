import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

import "./TodoContaine.css";
import Container from "../UI/Container";

const TodoContaine = (props) => {
  // Create useState Varible to load value of done
  const [isDone, setIsDone] = useState(false);
  const doneTodoHandler = (e) => {
    // Create Operation toggole
    if (isDone === true) return setIsDone(false);
    setIsDone(true);
  };
  return (
    <div className={`todo ${isDone ? "done" : ""}`}>
      <Container>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </Container>
      <div>
        <FontAwesomeIcon icon={faCircleCheck} onClick={doneTodoHandler} />
      </div>
    </div>
  );
};

export default TodoContaine;
