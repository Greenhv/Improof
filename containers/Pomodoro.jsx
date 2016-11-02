import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Page, ProgressBar, Button, Input } from 'react-onsenui';
import NavBar from '../components/NavBar.jsx';
import Timer from '../components/Timer.jsx';
import MaterialSelect from '../components/MaterialSelect.jsx';

import * as Actions from '../actions';

class Pomodoro extends React.Component {
  startTimer(e) {
    const {
      startWork,
      startRest,
    } = this.props.actions;

    let currentBtn = e.target;
    let currentName = currentBtn.getAttribute('name');
    currentBtn.classList.add('hidden');
    currentBtn.nextSibling.classList.remove('hidden');    
    if (currentName == 'start-work') {
      startWork();
    } else if (currentName == 'start-break') {
      startRest();
    }
  }

  stopTimer(e) {
    const {
      pomodoro,
    } = this.props;

    const {
      timerStopped,
    } = this.props.actions;

    timerStopped(pomodoro.interval);
    e.target.classList.add('hidden');
    e.target.previousSibling.classList.remove('hidden');
  }

  getCurrentActionButton() {
    const {
      pomodoro,
    } = this.props;
    
    if (pomodoro.to_rest || pomodoro.resting) {
      return (
        <div>
          <Button name="start-break" onClick={(e) => this.startTimer(e)} class={`button button--material dark-btn pomodoro-button dark-btn pomodoro-button ${pomodoro.resting ? 'hidden' : 'visible'}`}>Start break</Button>
          <Button name="stop-break" onClick={(e) => this.stopTimer(e)} class={`button button--material dark-btn pomodoro-button light-btn pomodoro-button ${pomodoro.resting ? 'visible' : 'hidden'}`}>Skip break</Button>
        </div>
      );
    } else {
      return (
        <div>
          <Button name="start-work" onClick={(e) => this.startTimer(e)} class={`button button--material dark-btn pomodoro-button dark-btn pomodoro-button ${pomodoro.working ? 'hidden' : null}`}>Start work session</Button>
          <Button name="stop-work" onClick={(e) => this.stopTimer(e)} class={`button button--material dark-btn pomodoro-button light-btn pomodoro-button ${pomodoro.working ? null : 'hidden'}`}>Surrender</Button>
        </div>
      );
    }
  }

  gePomodoroTitle() {
    const {
      pomodoro,
    } = this.props;

    if(pomodoro.working) return 'Working...';
    else if(pomodoro.to_rest || pomodoro.resting) return 'On a break';
    else return 'Work';
  }

  render() {
    const {
      navigator,
      pomodoro,
    } = this.props;

    const {
      projects,
    } = this.props.auth.user;

    let projectsData = [
      {id: projects[0].id, value: projects[0].project},
      {id: projects[1].id, value: projects[1].project}
    ]

    let milestonesData = [
      {id: projects[0].milestones[0].id, value: projects[0].milestones[0].milestone},
      {id: projects[0].milestones[1].id, value: projects[0].milestones[1].milestone}
    ]

    return (
      <Page 
       renderToolbar={() =>
        <NavBar 
         title={this.gePomodoroTitle()}
         navigator={navigator}
         backButton={true}
         volumeButton={true}
         helpButton={true}
        />
       }>
        <section className="pomodoro-timer">
          <div className="timer-elements">
            <Timer pomodoro={pomodoro} inUserGrid={false} />
            <ProgressBar className="timer-progress-bar" value={pomodoro.timeLeft/1500000*100} />
          </div>
          <div className="timer-actions">
            {this.getCurrentActionButton()}
          </div>
        </section>
        <section className="pomodoro-activity">
          <div className="project-select-wrapper">
            <div className="pomodoro-label">PROJECT</div>
            <MaterialSelect data={projectsData} />
          </div>
          <div className="milestone-select-wrapper">
            <div className="pomodoro-label">MILESTONE</div>
            <MaterialSelect data={milestonesData} />
          </div>
          <div className="session-counter-wrapper">
            <div className="pomodoro-label">SESSIONS WORKED TODAY</div>
            <div className="pomodoro-data">
              <Input className="only-read-input" value={1} value={`${projects[0].sessionWorked} of ${projects[0].totalSessions}`} disabled />
            </div>
          </div>
        </section>
      </Page>
    );
  }
}

function mapStateToProps (state) {
  return {
    pomodoro: state.pomodoro,
    auth: state.auth,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Pomodoro);