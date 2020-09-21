import React, { Component } from "react";
import PomodoroTimer from "./PomodoroTimer";
import PomodoroControls from "./PomodoroControls";
import "./Pomodoro.css";

class Pomodoro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workTime: 45,
      restTime: 15,
      isPaused: true,
    };
    this.changeTime = this.changeTime.bind(this);
    this.togglePlay = this.togglePlay.bind(this);
  }

  changeTime(newTime) {
    this.setState({
      workTime: newTime.workTime,
      restTime: newTime.restTime,
      isPaused: true,
      changed: true,
    });
  }

  togglePlay() {
    const newState = { ...this.state, isPaused: !this.state.isPaused };
    this.setState(newState);
  }

  render() {
    return (
      <div className="Pomodoro">
        <PomodoroTimer
          initialMinutes={this.state.workTime}
          isPaused={this.state.isPaused}
          changed={false}
        />
        <PomodoroControls
          changeTime={this.changeTime}
          workTime={this.state.workTime}
          restTime={this.state.restTime}
          togglePlay={this.togglePlay}
          isPaused={this.state.isPaused}
        />
      </div>
    );
  }
}

export default Pomodoro;
