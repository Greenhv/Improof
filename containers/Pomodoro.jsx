import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Page } from 'react-onsenui';
import NavBar from '../components/NavBar.jsx';
import Timer from '../components/Timer.jsx';

import * as Actions from '../actions';

class Pomodoro extends React.Component {
  render() {
    const {
      navigator,
    } = this.props;

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
            <Timer />
          </div>
          <div className="timer-actions"></div>
        </section>
        <section className="pomodoro-activity">
          <div className="project-select-wrapper"></div>
          <div className="milestone-select-wrapper"></div>
          <div className="session-counter-wrapper"></div>
        </section>
      </Page>
    );
  }
}

function mapStateToProps (state) {
  return {
    user: state.auth.user,
    pomodoro: state.pomodoro,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Pomodoro);