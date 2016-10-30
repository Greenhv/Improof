import React from 'react';
import { Input, Button } from 'react-onsenui';

import MainPage from './MainPage.jsx';

export default class LoginForm extends React.Component {
  render() {
    const { 
      onSignIn,
      navigator
     } = this.props;

    const submitForm = (e) => {
      let loginForm = document.getElementsByClassName('login-form')[0];
      onSignIn(navigator);
    }

    return(
      <form className="login-form">
        <div>
          <Input placeholder="Username" />
        </div>
        <div>
          <Input placeholder="Password" />
        </div>
        <div>
          <Button onClick={submitForm}>Sign In</Button>
        </div>
      </form>
    )
  }
}
