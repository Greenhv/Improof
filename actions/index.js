import MainPage from '../containers/MainPage.jsx';

export const AUTH_USER = 'AUTH_USER';
export const AUTH_ERROR = 'AUTH_ERROR';
export const SIGN_OUT_USER = 'SIGN_OUT_USER';
export const START_WORK = 'START_WORK';
export const START_REST = 'START_REST';
export const SET_REST = 'SET_REST';
export const SET_WORK = 'SET_WORK';
export const STOP_POMODORO = 'STOP_POMODORO';
export const TICK = 'TICK';

export const signInUser = function signInUser(navigator, authKeys) {
  navigator.pushPage({component: MainPage, key: 'MAIN_PAGE'});
  // Fetch User from the Ws with the authKey, if there are no User then send an error
  return {
    type: AUTH_USER,
    payload: {
      username: 'Herbert Videla',
      email: 'herbert.videla@pucp.pe',
      projects: {
        0: {id: 0, project: 'Mobiles Application Development', milestones: {0: {id: 0, milestone: 'Improof'}, 1: {id: 1, milestone: 'Android'}}, sessionWorked: 2, totalSessions: 6},
        1: {id: 1, project: 'Learn Japanese', milestones: {0: {id: 0, milestone: 'Learn hiragana'}, 1: {id: 1, milestone: 'Learn Kanjis'}}, sessionWorked: 2, totalSessions: 6},
      }
    }
  }
};

export const signUpUser = function signUpUser(navigator, registrationKeys) {
  navigator.pushPage({component: MainPage, key: 'MAIN_PAGE'});

  return {
    type: AUTH_USER,
    payload: {
      username: 'Juan Jose Ramirez',
      // username: `${registrationKeys.firstName} ${registrationKeys.lastName}`,
      email: 'juanjose.ramirez@pucp.pe',
      // email: registrationKeys.email,
      projects: {
        0: {id: 0, project: 'Mobiles Application Development', milestones: {0: {id: 0, milestone: 'Improof'}, 1: {id: 1, milestone: 'Android'}}, sessionWorked: 2, totalSessions: 6},
        1: {id: 1, project: 'Learn Japanese', milestones: {0: {id: 0, milestone: 'Learn hiragana'}, 1: {id: 1, milestone: 'Learn Kanjis'}}, sessionWorked: 2, totalSessions: 6},
      }
    }
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
        timeLeft: Date.now(),
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

export const setRest = function setRest() {
  return {
    type: SET_REST,
  }
}

export const setWork = function setWork() {
  return {
    type: SET_WORK,
  }
}

export const startRest = function startRest() {
  return function(dispatch) {
    const interval = setInterval(() => {
      dispatch({
        type: TICK,
        timeLeft: Date.now(),
      });
    }, 1000);

    dispatch({
      type: START_REST,
      offset: Date.now(),
      interval,
    })
  }
}