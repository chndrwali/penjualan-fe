import { ActionTypes } from './action';

const initialState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN_USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ActionTypes.LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        loading: false,
        error: null,
      };
    case ActionTypes.LOGIN_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ActionTypes.LOGOUT_USER:
      return {
        ...state,
        user: null,
        token: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export default authReducer;
