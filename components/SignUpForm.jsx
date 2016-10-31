import React from 'react';
import { Input, Button } from 'react-onsenui';

export default class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  handleInputOnChange(type,e) {
    this.setState({[type]: e.target.value});
  }

  render() {
    const {
      onSignUp,
      authError,
      navigator,
    } = this.props;

    const submitForm = () => {
      onSignUp(navigator, this.state);
    };

    const goBackHandler = () => {
      navigator.popPage();
    };

    return (
      <form className="sign-up-form">
        <div>
          <Input 
           className="input-full-width auth-input" 
           placeholder="First Name"
           type="text" 
           onChange={(e) => this.handleInputOnChange('firstName',e)}
          /> 
        </div>
        <div>
          <Input 
           className="input-full-width auth-input"
           placeholder="Last Name"
           type="text"
           onChange={(e) => this.handleInputOnChange('lastName',e)} 
          />
        </div>
        <div>
          <Input 
           className="input-full-width auth-input"
           placeholder="Email"
           type="text"
           onChange={(e) => this.handleInputOnChange('email',e)} 
          />
        </div>
        <div>
          <Input 
           className="input-full-width auth-input"
           placeholder="Password"
           type="password"
           onChange={(e) => this.handleInputOnChange('password',e)} 
          />
        </div>
        <div>
          <Input 
           className="input-full-width auth-input"
           placeholder="Confirm Password" 
           type="password"
           onChange={(e) => this.handleInputOnChange('confirmPassword',e)} 
          />
        </div>
        <div className="flex-btns-wrapper">
          <Button className="light-btn short-btn" onClick={goBackHandler}>Cancel</Button>
          <Button className="dark-btn short-btn" onClick={submitForm}>Accept</Button>
        </div>
      </form>
    );
  }
}
