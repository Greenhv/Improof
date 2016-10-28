import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Navigator } from 'react-onsenui';
import MainPage from '../components/MainPage.jsx';

import * as Actions from '../actions';

// Material Styles from Onsen UI 
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import 'onsenui/js/onsenui.js';

import Ons from 'react-onsenui'

const renderPage = (route, navigator) => (
  <route.component key={route.key} navigator={navigator} />
);

class Home extends React.Component {
  render() {
    const {
      signInUser,
      signUpUser,
      authError,
      signOutUser,
    } = this.props.actions;

    return (
      <Navigator 
        renderPage={renderPage}
        initialRoute={{component: MainPage, key: 'MAIN_PAGE'}}
      />
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch),
  };
}

export default connect(undefined, mapDispatchToProps)(Home);
