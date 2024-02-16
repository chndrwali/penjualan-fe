import { ActionType } from './action';

function authUserReducer(userData = null, action = {}) {
  switch (action.type) {
    case ActionType.SET_AUTH_USER:
      return action.payload.userData;
    case ActionType.UNSET_AUTH_USER:
      return null;
    default:
      return userData;
  }
}

export default authUserReducer;