import { combineReducers } from 'redux';

import AuthReducer from './auth';
import PomodoroReducer from './pomodoro';

const rootReducer = combineReducers({
  auth: AuthReducer,
  pomodoro: PomodoroReducer,
});

export default rootReducer;