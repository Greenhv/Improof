import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Page, ProgressBar, Button, Input } from 'react-onsenui';
import NavBar from '../components/NavBar.jsx';
import Timer from '../components/Timer.jsx';

import * as Actions from '../actions';

class Pomodoro extends React.Component {
  render() {
    const {
      navigator,
      pomodoro,
    } = this.props;

    const {
      startWork,
      timerStopped,
      startRest,
    } = this.props.actions;

    return (
      <Page 
       renderToolbar={() =>
        <NavBar 
         title='Work'
         navigator={navigator}
         backButton={true}
         volumeButton={true}
         helpButton={true}
        />
       }>
        <section className="pomodoro-timer">
          <div className="timer-elements">
            <Timer startWork={startWork} timerStopped={timerStopped} pomodoro={pomodoro} />
            <ProgressBar className="timer-progress-bar" value={100} />
            <Button onClick={() => {pomodoro.timeLeft}} className="dark-btn pomodoro-button">Start work session</Button>
          </div>
          <div className="timer-actions"></div>
        </section>
        <section className="pomodoro-activity">
          <div className="project-select-wrapper">
          </div>
          <div className="milestone-select-wrapper"></div>
          <div className="session-counter-wrapper"></div>
        </section>
      </Page>
    );
  }
}

function mapStateToProps (state) {
  return {
    pomodoro: state.pomodoro,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Pomodoro);