import MainPage from '../containers/MainPage.jsx';

export const AUTH_USER = 'AUTH_USER';
export const AUTH_ERROR = 'AUTH_ERROR';
export const SIGN_OUT_USER = 'SIGN_OUT_USER';

export const signInUser = function signInUser(navigator, authKeys) {
  navigator.pushPage({component: MainPage});

  return {
    type: AUTH_USER,
    payload: {username: 'Herbert Videla', email: 'herbert.videla@tektoblabs.com'}
  }
};

export const signUpUser = function signUpUser(navigator, registrationKeys) {
  navigator.pushPage({component: MainPage});

  return {
    type: AUTH_USER,
    payload: {username: `${registrationKeys.firstName} ${registrationKeys.lastName}`, email: registrationKeys.email }
  }
};

export const signOutUser = function signOutUser() {
  return {
    type: SIGN_OUT_USER,
  }
};

export const authError = function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error,
  }
};