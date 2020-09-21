import React, { Component } from "react";
import Pomodoro from "./pomodoro/Pomodoro";
import TodoList from "./todoList/TodoList";
import "./PomoTodo.css";

class PomoTodo extends Component {
  render() {
    return (
      <div className="PomoTodo">
        <div className="PomoTodo-header">
          <h1>PomoTodo</h1>
          <a href="https://https://github.com/Frosty273/Pomodoro-Todo">
            <i class="far fa-question-circle"></i>
          </a>
        </div>
        <Pomodoro />
        <TodoList />
      </div>
    );
  }
}

export default PomoTodo;
