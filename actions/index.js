import MainPage from '../components/MainPage.jsx';

export const AUTH_USER = 'AUTH_USER';
export const AUTH_ERROR = 'AUTH_ERROR';
export const SIGN_OUT_USER = 'SIGN_OUT_USER';

export const signInUser = function signInUser(navigator) {
  navigator.pushPage({component: MainPage});
  return {
    type: AUTH_USER,
  }
};

export const signUpUser = function signUpUser() {
  return {
    type: AUTH_USER,
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