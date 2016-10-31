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
      }
    case START_REST:
      return {
        ...state,
        working: false,
        resting: true,
        timeLeft: 300,
      }
  }
}