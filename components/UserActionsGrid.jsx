import React from 'react';
import { Ripple } from 'react-onsenui';
import Timer from './Timer.jsx';

export default class UserActionsGrid extends React.Component {
  renderPomodoroState() {
    const {
      pomodoro,
    } = this.props;

    if(pomodoro.working) {
      return (
        <div className="user-working">
          <div>WORKING</div>
          <div><Timer pomodoro={pomodoro} inUserGrid={true} /></div>
        </div>
      ); 
    } else if (pomodoro.to_rest || pomodoro.resting) {
      return (
        <div className="user-resting">
          <div>ON A BREAK</div>
          <div><Timer pomodoro={pomodoro} inUserGrid={true} /></div>
        </div>
      );
    } else {
      return (
        <div className="user-not-working">
          <div>WORK</div>
        </div>
      );
    }
  }

  componentDidUpdate() {
    const {
      pomodoro,
      timerStopped,
      setRest,
      setWork,
    } = this.props;

    if (pomodoro.timeLeft < 1000) {
      timerStopped(pomodoro.interval);
      (pomodoro.working ? setRest() : setWork());
    }
  }

  render() {
    const {
      startWork,
      startRest,
      pomodoro,
      openWorkAction,
      openMyProjectsAction,
    } = this.props;

    return (
      <section className="user-actions">
        <div className="user-one-column-actions">
          <div onClick={openWorkAction} className="user-one-column-action user-work">
            <div className="user-work-img-wrapper">
              <img className="user-work-img" src="https://dummyimage.com/90x90/9b9b9b/000000" alt="User Work"/>
            </div>
            <div className="user-work-name">
              {this.renderPomodoroState()}
            </div>
          </div>
          <Ripple />
        </div>
        <div className="user-two-columns-actions">
          <div onClick={openMyProjectsAction} className="user-two-column-action user-projects">
            <div className="user-projects-img-wrapper">
              <img className="user-projects-img" src="https://dummyimage.com/47x65/9b9b9b/000000" alt="User Work"/>
            </div>
            <div className="user-projects-name">
              MANAGE MY <br/>PROJECTS
            </div>
            <Ripple />
          </div>
          <div className="user-two-column-action user-habits">
            <div className="user-habits-img-wrapper">
              <img className="user-habits-img" src="https://dummyimage.com/47x65/9b9b9b/000000" alt="User Work"/>
            </div>
            <div className="user-habits-name">
              IMPROVE <br/>YOUR HABITS
            </div>
            <Ripple />
          </div>
          <div className="user-two-column-action user-todos">
            <div className="user-todos-img-wrapper">
              <img className="user-todos-img" src="https://dummyimage.com/47x65/9b9b9b/000000" alt="User Work"/>
            </div>
            <div className="user-todos-name">
              TO DO <br/> LISTS
            </div>
            <Ripple />
          </div>
          <div className="user-two-column-action user-goals">
            <div className="user-goals-img-wrapper">
              <img className="user-goals-img" src="https://dummyimage.com/47x65/9b9b9b/000000" alt="User Work"/>
            </div>
            <div className="user-goals-name">
              SET <br/> GOALS
            </div>
            <Ripple />
          </div>
          <div className="user-two-column-action user-character-info">
            <div className="user-wrok-info-wrapper">
              <img className="user-info-img" src="https://dummyimage.com/47x65/9b9b9b/000000" alt="User Work"/>
            </div>
            <div className="user-info-name">
              PROFILE <br/> INFO
            </div>
            <Ripple />
          </div>
          <div className="user-two-column-action user-stats">
            <div className="user-wrok-stats-wrapper">
              <img className="user-stats-img" src="https://dummyimage.com/47x65/9b9b9b/000000" alt="User Work"/>
            </div>
            <div className="user-stats-name">
              GET <br/>STATS
            </div>
            <Ripple />
          </div>
        </div>
      </section>
    );
  }
}
