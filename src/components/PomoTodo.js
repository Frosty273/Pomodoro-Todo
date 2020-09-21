import React, { Component } from "react";
import Pomodoro from "./pomodoro/Pomodoro";
import TodoList from "./todoList/TodoList";
import "./PomoTodo.css";
import { withStyles } from "@material-ui/styles";

const styles = {
  PomoTodo: {
    height: "100%",
    borderRadius: "0.25em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#121212",
    padding: "0 0.5em",
  },
  header: {
    width: "100 %",
    height: "4em",
    display: "flex",
    alignItems: "center",
    color: "#eeeeee",
    "& a": {
      marginLeft: "auto",
      color: "#bbbbbb",
      fontSize: "1.5em",
    },
  },
};

class PomoTodo extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.PomoTodo}>
        <div className={classes.header}>
          <h1>PomoTodo</h1>
        </div>
        <Pomodoro />
        <TodoList />
      </div>
    );
  }
}

export default withStyles(styles)(PomoTodo);
