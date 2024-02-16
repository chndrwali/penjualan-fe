import { ActionType } from './action';

function authReducer(state = { user: null, isAdmin: false, users: [], loading: false, error: null }, action) {
  switch (action.type) {
    case ActionType.LOGIN_REQUEST:
    case ActionType.REGISTER_REQUEST:
    case ActionType.CHECK_ADMIN_REQUEST:
    case ActionType.GET_ALL_USERS_REQUEST:
      return { ...state, loading: true, error: null };
    case ActionType.LOGIN_SUCCESS:
      return { ...state, user: action.payload, loading: false, error: null };
    case ActionType.LOGIN_FAILURE:
    case ActionType.REGISTER_FAILURE:
    case ActionType.CHECK_ADMIN_FAILURE:
    case ActionType.GET_ALL_USERS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case ActionType.REGISTER_SUCCESS:
      return { ...state, user: action.payload, loading: false, error: null };
    case ActionType.CHECK_ADMIN_SUCCESS:
      return { ...state, isAdmin: action.payload, loading: false, error: null };
    case ActionType.GET_ALL_USERS_SUCCESS:
      return { ...state, users: action.payload, loading: false, error: null };
    default:
      return state;
  }
}

export default authReducer;
