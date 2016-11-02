import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Page, Button } from 'react-onsenui';
import NavBar from '../components/NavBar.jsx';
import ProjectList from '../components/ProjectList.jsx';

import * as Actions from '../actions';

class MyProjects extends React.Component {
  render() {
    const {
      navigator,
      currentUser,
    } = this.props;

    return (
      <Page 
       renderToolbar={() =>
        <NavBar 
         title='Projects'
         navigator={navigator}
         backButton={true}
         sortButton={true}
         helpButton={true}
        />
       }
      >
        <ProjectList currentUser={currentUser} />
        <div className="text-center">
          <Button name="create-project"  className="dark-btn pomodoro-button">Start new Project</Button>
        </div>
      </Page>
    );
  }
}

function mapStateToProps (state) {
  return {
    user: state.auth.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyProjects);
