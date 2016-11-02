import React from 'react';

export default class Timer extends React.Component {



  getCurrentTime() {
    const {
      pomodoro,
    } = this.props;

    let time = pomodoro.timeLeft;
    const pad = (time, length) => {
      while(time.length < length) {
        time = '0' + time;
      }
      return time;
    }

      time = new Date(time);
    let m = pad(time.getMinutes().toString(), 2);
    let s = pad(time.getSeconds().toString(), 2);

    return `${m}:${s}`;
  }

  render() {
    const {
      inUserGrid,
    } = this.props;

    return (
      <div className={`timer-wrapper ${inUserGrid ? 'for-user-grid-actions' : ''}`}>
        <div className={`timer-time-left ${inUserGrid ? 'for-user-grid-actions' : ''}`}>
          {this.getCurrentTime()}
        </div>
      </div>
    );
  }
}
