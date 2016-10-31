import MainPage from '../containers/MainPage.jsx';

export const AUTH_USER = 'AUTH_USER';
export const AUTH_ERROR = 'AUTH_ERROR';
export const SIGN_OUT_USER = 'SIGN_OUT_USER';
export const START_WORK = 'START_WORK';
export const START_REST = 'START_REST';
export const STOP_POMODORO = 'STOP_POMODORO';
export const TICK = 'TICK';

export const signInUser = function signInUser(navigator, authKeys) {
  navigator.pushPage({component: MainPage, key: 'MAIN_PAGE'});

  return {
    type: AUTH_USER,
    payload: {username: 'Herbert Videla', email: 'herbert.videla@tektoblabs.com'}
  }
};

export const signUpUser = function signUpUser(navigator, registrationKeys) {
  navigator.pushPage({component: MainPage, key: 'MAIN_PAGE'});

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

export const startWork = function startWork() {
  return function(dispatch) {
    const interval = setInterval(() => {
      dispatch({
        type: TICK,
        time: Date.now(),
      });
    }, 1000);

    dispatch({
      type: START_WORK,
      offset: Date.now(),
      interval,
    })
  }
}

export const timerStopped =  function timerStopped(interval) {
  clearInterval(interval);
  return {
    type: STOP_POMODORO,
  }
}

export const startRest = function startRest() {
  return {
    type: START_REST,
  }
}