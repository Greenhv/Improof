import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Page } from 'react-onsenui';
import Pomodoro from './Pomodoro.jsx';
import MyProjects from './MyProjects.jsx';

import UserInformation from '../components/UserInformation.jsx';
import UserActionsGrid from '../components/UserActionsGrid.jsx';

import * as Actions from '../actions';

class MainPage extends React.Component {
  render() {
    const {
      navigator,
      user,
      pomodoro,
    } = this.props;

    const {
      startWork,
      startRest,
      timerStopped,
      setRest,
      setWork,
    } = this.props.actions;

    const openWorkAction = () => {
      navigator.pushPage({component: Pomodoro, key: 'POMODORO_PAGE'});
    }
  
    const openMyProjectsAction = () => {
      navigator.pushPage({component: MyProjects, key: 'MY_PROJECTS_PAGE'});
    }

    return(
      <Page>
        <UserInformation currentUser={user} />
        <UserActionsGrid 
         startWork={startWork}
         startRest={startRest}
         pomodoro={pomodoro}
         openWorkAction={openWorkAction}
         openMyProjectsAction={openMyProjectsAction}
         setRest={setRest}
         setWork={setWork}
         timerStopped={timerStopped}
        />
      </Page>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);