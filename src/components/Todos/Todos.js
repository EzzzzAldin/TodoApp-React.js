import React from "react";

import "./Todos.css";
import Container from "../UI/Container";
import TodoContaine from "./TodoContaine";

const Todos = (props) => {
  // Use map To Add Todo Dynamic In Arr
  // Use Key T Do not Replace Index Of Arr
  return (
    <div className="todos">
      <Container>
        <h1>Todo List</h1>
        <h3>Get things done, one item at a time.</h3>
      </Container>
      {props.items.map((item) => (
        <TodoContaine
          key={item.id}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default Todos;
