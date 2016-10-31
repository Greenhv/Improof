import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Page } from 'react-onsenui';

import UserInformation from '../components/UserInformation.jsx';
import UserActionsGrid from '../components/UserActionsGrid.jsx';

import * as Actions from '../actions';

class MainPage extends React.Component {
  render() {
    const {
      navigator,
      user,
    } = this.props;

    return(
      <Page>
        <UserInformation currentUser={user} />
        <UserActionsGrid />
      </Page>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);