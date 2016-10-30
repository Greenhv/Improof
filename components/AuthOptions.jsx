import React from 'react';

import { Page, Button } from 'react-onsenui';
import LogIn from '../containers/Login.jsx';
import SignUp from '../containers/SignUp.jsx';


export default class AuthOptions extends React.Component {
  render() {
    const {
      navigator
    } = this.props;

    const openLogInForm = () => {
      navigator.pushPage({component: LogIn});
    };

    const openSignUpForm = () => {
      navigator.pushPage({component:SignUp});
    };
    return(
      <Page className="center-content">
        <div className="full-size-helper flex-wrapper is-column-wrapper flex-absolute-center">
          <div className="img-wrapper">
            <img src={require('file!../images/app-logo-light.png')} alt="Improof Logo "/>
          </div>
          <div className="auth-options-wrapper">
            <Button className="large-btn dark-btn log-in-btn" onClick={openLogInForm}>Log In</Button>
            <Button className="large-btn light-btn sign-up-btn" onClick={openSignUpForm}>Sign Up</Button>
          </div>
        </div>
      </Page>
    )
  }
}
