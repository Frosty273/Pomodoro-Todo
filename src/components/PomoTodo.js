import React, { Component } from "react";
import Pomodoro from "./Pomodoro";
import TodoList from "./todoList/TodoList";

class PomoTodo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="PomoTodo">
        <h1>Pomodoro TodoList Template</h1>
        <Pomodoro />
        <TodoList />
      </div>
    );
  }
}

export default PomoTodo;
