import React from 'react';
import { Ripple } from 'react-onsenui';

export default class UserActionsGrid extends React.Component {
  render() {
    return (
      <section className="user-actions">
        <div className="user-one-column-actions">
          <div className="user-one-column-action user-work">
            <div className="user-work-img-wrapper">
              <img className="user-work-img" src="https://dummyimage.com/90x90/9b9b9b/000000" alt="User Work"/>
            </div>
            <div className="user-work-name">
              WORK
            </div>
          </div>
          <Ripple />
        </div>
        <div className="user-two-columns-actions">
          <div className="user-two-column-action user-projects">
            <div className="user-projects-img-wrapper">
              <img className="user-projects-img" src="https://dummyimage.com/47x65/9b9b9b/000000" alt="User Work"/>
            </div>
            <div className="user-projects-name">
              MANAGE MY PROJECTS
            </div>
            <Ripple />
          </div>
          <div className="user-two-column-action user-habits">
            <div className="user-habits-img-wrapper">
              <img className="user-habits-img" src="https://dummyimage.com/47x65/9b9b9b/000000" alt="User Work"/>
            </div>
            <div className="user-habits-name">
              IMPROVE YOUR HABITS
            </div>
            <Ripple />
          </div>
          <div className="user-two-column-action user-todos">
            <div className="user-todos-img-wrapper">
              <img className="user-todos-img" src="https://dummyimage.com/47x65/9b9b9b/000000" alt="User Work"/>
            </div>
            <div className="user-todos-name">
              TO DO LISTS
            </div>
            <Ripple />
          </div>
          <div className="user-two-column-action user-goals">
            <div className="user-goals-img-wrapper">
              <img className="user-goals-img" src="https://dummyimage.com/47x65/9b9b9b/000000" alt="User Work"/>
            </div>
            <div className="user-goals-name">
              SET GOALS
            </div>
            <Ripple />
          </div>
          <div className="user-two-column-action user-character-info">
            <div className="user-wrok-info-wrapper">
              <img className="user-info-img" src="https://dummyimage.com/47x65/9b9b9b/000000" alt="User Work"/>
            </div>
            <div className="user-info-name">
              MY CHARACTER
            </div>
            <Ripple />
          </div>
          <div className="user-two-column-action user-stats">
            <div className="user-wrok-stats-wrapper">
              <img className="user-stats-img" src="https://dummyimage.com/47x65/9b9b9b/000000" alt="User Work"/>
            </div>
            <div className="user-stats-name">
              GET STATS
            </div>
            <Ripple />
          </div>
        </div>
      </section>
    );
  }
}
