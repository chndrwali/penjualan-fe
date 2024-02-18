import { ActionType } from './action';

function registerReducer(register = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_USER:
      return action.payload.register;
    default:
      return register;
  }
}

export default registerReducer;