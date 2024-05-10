import {
  DELETE_ACCOUNT_FAIL,
  DELETE_ACCOUNT_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
} from './types';

const initialState = {
  isSignedIn: false,
  user: null,
};

export const userReducer = (
  state = initialState,
  action: {type: any; payload: any},
) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isSignedIn: true,
        user: action.payload,
        error: null,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isSignedIn: false,
        user: null,
        error: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        isSignedIn: false,
        user: null,
        error: null,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.payload,
        signupSuccess: true,
        error: null,
      };
    case SIGNUP_FAIL:
      console.log('fail');
      return {
        ...state,
        signupSuccess: false,
        error: action.payload,
      };
    case DELETE_ACCOUNT_SUCCESS:
      console.log(action, '1233');
      return {
        ...state,
        isSignedIn: false,
        user: null,
        error: null,
      };
    case DELETE_ACCOUNT_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
  return state;
};
