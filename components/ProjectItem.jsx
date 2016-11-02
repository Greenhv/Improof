import React from 'react';
import { Icon, Ripple } from 'react-onsenui';

export default class ProjectItem extends React.Component {
  getCurrentTime(time) {
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
      name,
      timeWorked,
      id,
    } = this.props;

    return (
      <div className="my-project" key={id}>
        <div className="my-project-simbol-wrapper">
          <img className="my-project-simbol" src="https://dummyimage.com/40x40/9b9b9b/000000" alt="My Project"/>
        </div>
        <div className="my-project-name-wrapper">
          <div className="my-project-name">
            {name}
          </div>
        </div>
        <div className="my-project-time-worked-wrapper">
          <div className="my-project-time-worked-clock">
            <Icon icon="md-time" />
          </div>
          <div className="my-project-time-worked-time">
            {this.getCurrentTime(timeWorked)}
          </div>
        </div>
        <Ripple />
      </div>
    );
  }
}
