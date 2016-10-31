import { START_WORK, START_REST, STOP_POMODORO, TICK } from '../actions';

const initialState = {
  working: false,
  resting: false,
  timeLeft: 0,
}

export default function pomodoro(state = initialState, action) {
  switch(action.type) {
    case START_WORK:
      return {
        ...state,
        working: true,
        resting: false,
        timeLeft: 1500,
        offset: action.offset,
        interval: action.interval,
      };
    case STOP_POMODORO:
      return {
        ...state,
        time: 0,
      };
    case TICK:
      return {
        ...state,
        time: state.time - (action.time - state.offset),
        offset: action.time,
      }
    case START_REST:
      return {
        ...state,
        working: false,
        resting: true,
        timeLeft: 300,
      };
    default:
      return state;
  }
}