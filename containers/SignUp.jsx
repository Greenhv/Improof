import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Page } from 'react-onsenui';
import SignUpForm from '../components/SignUpForm.jsx';

import * as Actions from '../actions';

class SignUp extends React.Component {
  render() {
    const {
      signUpUser,
      authError
    } = this.props.actions;

    return (
      <Page className="center-content">
        <div className="full-size-helper flex-wrapper is-column-wrapper flex-absolute-center">
          <div className="img-wrapper">
            <img src={require('file!../images/app-logo-light.png')} alt="Improof Logo "/>
          </div>
          <div className="form-wrapper">
            <SignUpForm onSignUp={signUpUser} authError={authError} navigator={this.props.navigator} />
          </div>
        </div>
      </Page>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch),
  };
}

export default connect(undefined, mapDispatchToProps)(SignUp);