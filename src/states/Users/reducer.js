import { ActionTypes } from './action';

const initialState = {
  loading: false,
  users: [],
  user: null,
  error: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_ALL_USERS_REQUEST:
    case ActionTypes.GET_USER_BY_ID_REQUEST:
    case ActionTypes.ADD_USER_REQUEST:
    case ActionTypes.EDIT_USER_REQUEST:
    case ActionTypes.DELETE_USER_REQUEST:
    case ActionTypes.CHANGE_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case ActionTypes.GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: '',
      };
    case ActionTypes.GET_USER_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: '',
      };
    case ActionTypes.ADD_USER_SUCCESS:
    case ActionTypes.EDIT_USER_SUCCESS:
    case ActionTypes.DELETE_USER_SUCCESS:
    case ActionTypes.CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
      };
    case ActionTypes.GET_ALL_USERS_FAILURE:
    case ActionTypes.GET_USER_BY_ID_FAILURE:
    case ActionTypes.ADD_USER_FAILURE:
    case ActionTypes.EDIT_USER_FAILURE:
    case ActionTypes.DELETE_USER_FAILURE:
    case ActionTypes.CHANGE_PASSWORD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
