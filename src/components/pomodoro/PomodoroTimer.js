import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
  PomodoroTimer: {
    fontSize: "3em",
    marginBottom: "0",
    height: "4.25em",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  clock: {
    marginBottom: "0",
    marginTop: "0",
  },
  message: {
    fontSize: "17px",
    marginTop: "0",
  },
};

class PomodoroTimer extends Component {
  static defaultProps = {
    initialMinutes: 45,
    seconds: 0,
    isPaused: true,
    isWorking: true,
  };

  constructor(props) {
    super(props);
    this.state = {
      minutes: this.props.initialMinutes,
      seconds: 0,
    };
    this.countdown = this.countdown.bind(this);
  }

  countdown() {
    setInterval(() => {
      if (this.props.isPaused) {
        return;
      }
      let newState;
      if (this.state.seconds === 0) {
        newState = { minutes: this.state.minutes - 1, seconds: 59 };
      } else {
        newState = { seconds: this.state.seconds - 1 };
      }
      this.setState(newState);
    }, 1000);
  }

  render() {
    const { classes, isWorking } = this.props;
    const { minutes, seconds } = this.state;
    let parsedSeconds = seconds;
    if (parsedSeconds < 10) {
      parsedSeconds = "0" + seconds.toString(10);
    }
    return (
      <div className={classes.PomodoroTimer}>
        <h2 className={classes.clock}>
          {minutes} : {parsedSeconds}
        </h2>
        <span className={classes.message}>
          {isWorking ? "Time to get to work!" : "Time for a break!"}
        </span>
      </div>
    );
  }

  componentDidMount() {
    this.countdown();
  }

  componentDidUpdate() {
    console.log("Updated");
  }
}

export default withStyles(styles)(PomodoroTimer);
