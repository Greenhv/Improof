import React from 'react';
import { Input, Button } from 'react-onsenui';

export default class SignUpForm extends React.Component {
  render() {
    const {
      onSignUp,
      authError,
      navigator,
    } = this.props;

    const submitForm = () => {
      onSignUp(navigator);
    }

    const goBackHandler = () => {
      navigator.popPage();
    }

    return (
      <form className="sign-up-form">
        <div>
          <Input className="input-full-width auth-input" placeholder="First Name" type="text" />
        </div>
        <div>
          <Input className="input-full-width auth-input" placeholder="Last Name" type="text" />
        </div>
        <div>
          <Input className="input-full-width auth-input" placeholder="Email" type="text" />
        </div>
        <div>
          <Input className="input-full-width auth-input" placeholder="Password" type="password" />
        </div>
        <div>
          <Input className="input-full-width auth-input" placeholder="Confirm Password" type="password" />
        </div>
        <div className="flex-btns-wrapper">
          <Button className="light-btn short-btn" onClick={goBackHandler}>Cancel</Button>
          <Button className="dark-btn short-btn" onClick={submitForm}>Accept</Button>
        </div>
      </form>
    );
  }
}
