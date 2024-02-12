import { hideLoading, showLoading } from 'react-redux-loading-bar';
import helper from '../../utils/helper';

const ActionType = {
  SET_AUTH_USER: 'SET_AUTH_USER',
  UNSET_AUTH_USER: 'UNSET_AUTH_USER',
  RECEIVE_USER: 'RECEIVE_USER',
};

function setAuthUserActionCreator(authUser) {
  return {
    type: ActionType.SET_AUTH_USER,
    payload: {
      authUser,
    },
  };
}

function unsetAuthUserActionCreator() {
  return {
    type: ActionType.UNSET_AUTH_USER,
    payload: {
      authUser: null,
    },
  };
}

function receiveUsersActionCreator(register) {
  return {
    type: ActionType.RECEIVE_USERS,
    payload: {
      register,
    },
  };
}

function asyncSetAuthUser({ email, password }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const token = await helper.loginReq({ email, password });
      helper.getAccessToken(token);
      const authUser = await helper.getUserById();
      dispatch(setAuthUserActionCreator(authUser));
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

function asyncUnsetAuthUser() {
  return (dispatch) => {
    dispatch(unsetAuthUserActionCreator());
    helper.getAccessToken('');
  };
}

function asyncRegisterUser({ name, email, password, cPassword }) {
  return async () => {
    try {
      await helper.signupReq({ name, email, password, cPassword });
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  ActionType,
  setAuthUserActionCreator,
  unsetAuthUserActionCreator,
  receiveUsersActionCreator,
  asyncSetAuthUser,
  asyncUnsetAuthUser,
  asyncRegisterUser
};