import USERS_API from '../../api/users-api';

export const ActionTypes = {
  GET_ALL_USERS_REQUEST: 'GET_ALL_USERS_REQUEST',
  GET_ALL_USERS_SUCCESS: 'GET_ALL_USERS_SUCCESS',
  GET_ALL_USERS_FAILURE: 'GET_ALL_USERS_FAILURE',
  GET_USER_BY_ID_REQUEST: 'GET_USER_BY_ID_REQUEST',
  GET_USER_BY_ID_SUCCESS: 'GET_USER_BY_ID_SUCCESS',
  GET_USER_BY_ID_FAILURE: 'GET_USER_BY_ID_FAILURE',
  ADD_USER_REQUEST: 'ADD_USER_REQUEST',
  ADD_USER_SUCCESS: 'ADD_USER_SUCCESS',
  ADD_USER_FAILURE: 'ADD_USER_FAILURE',
  EDIT_USER_REQUEST: 'EDIT_USER_REQUEST',
  EDIT_USER_SUCCESS: 'EDIT_USER_SUCCESS',
  EDIT_USER_FAILURE: 'EDIT_USER_FAILURE',
  DELETE_USER_REQUEST: 'DELETE_USER_REQUEST',
  DELETE_USER_SUCCESS: 'DELETE_USER_SUCCESS',
  DELETE_USER_FAILURE: 'DELETE_USER_FAILURE',
  CHANGE_PASSWORD_REQUEST: 'CHANGE_PASSWORD_REQUEST',
  CHANGE_PASSWORD_SUCCESS: 'CHANGE_PASSWORD_SUCCESS',
  CHANGE_PASSWORD_FAILURE: 'CHANGE_PASSWORD_FAILURE',
};

export const getAllUsersRequest = () => ({
  type: ActionTypes.GET_ALL_USERS_REQUEST,
});

export const getAllUsersSuccess = (users) => ({
  type: ActionTypes.GET_ALL_USERS_SUCCESS,
  payload: users,
});

export const getAllUsersFailure = (error) => ({
  type: ActionTypes.GET_ALL_USERS_FAILURE,
  payload: error,
});

export const getUserByIdRequest = () => ({
  type: ActionTypes.GET_USER_BY_ID_REQUEST,
});

export const getUserByIdSuccess = (user) => ({
  type: ActionTypes.GET_USER_BY_ID_SUCCESS,
  payload: user,
});

export const getUserByIdFailure = (error) => ({
  type: ActionTypes.GET_USER_BY_ID_FAILURE,
  payload: error,
});

export const addUserRequest = () => ({
  type: ActionTypes.ADD_USER_REQUEST,
});

export const addUserSuccess = (message) => ({
  type: ActionTypes.ADD_USER_SUCCESS,
  payload: message,
});

export const addUserFailure = (error) => ({
  type: ActionTypes.ADD_USER_FAILURE,
  payload: error,
});

export const editUserRequest = () => ({
  type: ActionTypes.EDIT_USER_REQUEST,
});

export const editUserSuccess = (message) => ({
  type: ActionTypes.EDIT_USER_SUCCESS,
  payload: message,
});

export const editUserFailure = (error) => ({
  type: ActionTypes.EDIT_USER_FAILURE,
  payload: error,
});

export const deleteUserRequest = () => ({
  type: ActionTypes.DELETE_USER_REQUEST,
});

export const deleteUserSuccess = (message) => ({
  type: ActionTypes.DELETE_USER_SUCCESS,
  payload: message,
});

export const deleteUserFailure = (error) => ({
  type: ActionTypes.DELETE_USER_FAILURE,
  payload: error,
});

export const changePasswordRequest = () => ({
  type: ActionTypes.CHANGE_PASSWORD_REQUEST,
});

export const changePasswordSuccess = (message) => ({
  type: ActionTypes.CHANGE_PASSWORD_SUCCESS,
  payload: message,
});

export const changePasswordFailure = (error) => ({
  type: ActionTypes.CHANGE_PASSWORD_FAILURE,
  payload: error,
});

export const getAllUsers = () => {
  return async (dispatch) => {
    dispatch(getAllUsersRequest());
    try {
      const users = await USERS_API.getAllUsers();
      dispatch(getAllUsersSuccess(users));
    } catch (error) {
      dispatch(getAllUsersFailure(error.message));
    }
  };
};

export const getUserById = (userId) => {
  return async (dispatch) => {
    dispatch(getUserByIdRequest());
    try {
      const user = await USERS_API.getUserById(userId);
      dispatch(getUserByIdSuccess(user));
    } catch (error) {
      dispatch(getUserByIdFailure(error.message));
    }
  };
};

export const addUser = (userData) => {
  return async (dispatch) => {
    dispatch(addUserRequest());
    try {
      const message = await USERS_API.addUser(userData);
      dispatch(addUserSuccess(message));
    } catch (error) {
      dispatch(addUserFailure(error.message));
    }
  };
};

export const editUser = (userId, userData) => {
  return async (dispatch) => {
    dispatch(editUserRequest());
    try {
      const message = await USERS_API.editUser(userId, userData);
      dispatch(editUserSuccess(message));
    } catch (error) {
      dispatch(editUserFailure(error.message));
    }
  };
};

export const deleteUser = (userId) => {
  return async (dispatch) => {
    dispatch(deleteUserRequest());
    try {
      const message = await USERS_API.deleteUser(userId);
      dispatch(deleteUserSuccess(message));
    } catch (error) {
      dispatch(deleteUserFailure(error.message));
    }
  };
};

export const changePassword = (userId, oldPassword, newPassword) => {
  return async (dispatch) => {
    dispatch(changePasswordRequest());
    try {
      const message = await USERS_API.changePassword(userId, oldPassword, newPassword);
      dispatch(changePasswordSuccess(message));
    } catch (error) {
      dispatch(changePasswordFailure(error.message));
    }
  };
};
