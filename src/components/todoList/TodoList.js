import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(newTodo) {
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  removeTodo(delTodoId) {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== delTodoId),
    });
  }

  render() {
    return (
      <div className="TodoList">
        <h1>TodoList goes here</h1>
        {this.state.todos.map((todo) => (
          <Todo desc={todo.desc} key={todo.id} id={todo.id} />
        ))}
        <NewTodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default TodoList;
