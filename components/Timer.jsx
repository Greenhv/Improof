import React from 'react';

export default class Timer extends React.Component {
  render() {
    const {
      startWork,
      timerStopped,
      pomodoro
    } = this.props;

    const startTimer = () => {
      startWork();
    }

    const getCurrentTime = () => {
      
    } 

    return (
      <div className="timer-wrapper">
        <div className="timer-time-left">
          25:00
        </div>
      </div>
    );
  }
}
