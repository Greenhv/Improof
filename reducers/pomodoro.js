import { START_WORK, START_REST, STOP_POMODORO, SET_REST, SET_WORK, TICK } from '../actions';

const initialState = {
  working: false,
  to_work: true,
  resting: false,
  to_rest: false,
  timeLeft: 1500000,
}

export default function pomodoro(state = initialState, action) {
  switch(action.type) {
    case START_WORK:
      return {
        ...state,
        working: true,
        to_work: false,
        offset: action.offset,
        interval: action.interval,
      };
    case STOP_POMODORO:
      return {
        ...initialState,
      };
    case TICK:
      return {
        ...state,
        timeLeft: state.timeLeft - (action.timeLeft - state.offset),
        offset: action.timeLeft,
      }
    case SET_WORK:
      return {
        ...state,
        working: false,
        to_work: true,
        resting: false,
        timeLeft: 1500000,
      }
    case SET_REST:
      return {
        ...state,
        working: false,
        resting: false,
        to_rest: true,
        timeLeft: 300000,
      }
    case START_REST:
      return {
        ...state,
        resting: true,
        to_rest: false,
        offset: action.offset,
        interval: action.interval,
      };
    default:
      return state;
  }
}