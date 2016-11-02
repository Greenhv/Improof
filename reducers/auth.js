import { AUTH_USER, AUTH_ERROR, SIGN_OUT_USER } from '../actions';

const initialState = {
  authenticated: false,
  error: null,
  user: null,
}

export default function auth(state = initialState, action) {
  switch(action.type) {
    case AUTH_USER:
      return {
        ...state,
        authenticated: true,
        error: null,
        user: {username: action.payload.username, email: action.payload.email, projects: action.payload.projects},
      };
    case AUTH_ERROR:
      return {
        ...state,
        authenticated: false,
        error: action.payload.message,
      };
    case SIGN_OUT_USER:
      return {
        ...state,
        authenticated: false,
        error: null,
      };
    default:
      return state;
  }
}
