import axios from "axios";
import API_ENDPOINT from "../globals/api-endpoint";

const ActionType = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  REGISTER_REQUEST: 'REGISTER_REQUEST',
  REGISTER_SUCCESS: 'REGISTER_SUCCESS',
  REGISTER_FAILURE: 'REGISTER_FAILURE',
  CHECK_ADMIN_REQUEST: 'CHECK_ADMIN_REQUEST',
  CHECK_ADMIN_SUCCESS: 'CHECK_ADMIN_SUCCESS',
  CHECK_ADMIN_FAILURE: 'CHECK_ADMIN_FAILURE',
  GET_ALL_USERS_REQUEST: 'GET_ALL_USERS_REQUEST',
  GET_ALL_USERS_SUCCESS: 'GET_ALL_USERS_SUCCESS',
  GET_ALL_USERS_FAILURE: 'GET_ALL_USERS_FAILURE',
};

const loginRequest = () => ({
  type: ActionType.LOGIN_REQUEST,
});

const loginSuccess = (userData) => ({
  type: ActionType.LOGIN_SUCCESS,
  payload: userData,
});

const loginFailure = (error) => ({
  type: ActionType.LOGIN_FAILURE,
  payload: error,
});

const registerRequest = () => ({
  type: ActionType.REGISTER_REQUEST,
});

const registerSuccess = (userData) => ({
  type: ActionType.REGISTER_SUCCESS,
  payload: userData,
});

const registerFailure = (error) => ({
  type: ActionType.REGISTER_FAILURE,
  payload: error,
});

const checkAdminRequest = () => ({
  type: ActionType.CHECK_ADMIN_REQUEST,
});

const checkAdminSuccess = (isAdmin) => ({
  type: ActionType.CHECK_ADMIN_SUCCESS,
  payload: isAdmin,
});

const checkAdminFailure = (error) => ({
  type: ActionType.CHECK_ADMIN_FAILURE,
  payload: error,
});

const getAllUsersRequest = () => ({
  type: ActionType.GET_ALL_USERS_REQUEST,
});

const getAllUsersSuccess = (usersData) => ({
  type: ActionType.GET_ALL_USERS_SUCCESS,
  payload: usersData,
});

const getAllUsersFailure = (error) => ({
  type: ActionType.GET_ALL_USERS_FAILURE,
  payload: error,
});

const loginUser = (email, password) => {
  return async (dispatch) => {
    dispatch(loginRequest());
    try {
      const response = await axios.post(API_ENDPOINT.LOGIN, {
        email: email,
        password: password,
      });
      dispatch(loginSuccess(response.data));
    } catch (error) {
      dispatch(loginFailure(error));
    }
  };
};

const registerUser = (userData) => {
  return async (dispatch) => {
    dispatch(registerRequest());
    try {
      const response = await axios.post(API_ENDPOINT.REGISTER, userData);
      dispatch(registerSuccess(response.data));
    } catch (error) {
      dispatch(registerFailure(error));
    }
  };
};

const checkAdmin = (loggedInUserId) => {
  return async (dispatch) => {
    dispatch(checkAdminRequest());
    try {
      const response = await axios.post(API_ENDPOINT.IS_ADMIN, {
        loggedInUserId: loggedInUserId,
      });
      dispatch(checkAdminSuccess(response.data));
    } catch (error) {
      dispatch(checkAdminFailure(error));
    }
  };
};

const getAllUsers = () => {
  return async (dispatch) => {
    dispatch(getAllUsersRequest());
    try {
      const response = await axios.post(API_ENDPOINT.ALL_USER);
      dispatch(getAllUsersSuccess(response.data));
    } catch (error) {
      dispatch(getAllUsersFailure(error));
    }
  };
};

export {
  ActionType,
  loginUser,
  registerUser,
  checkAdmin,
  getAllUsers,
  loginSuccess,
  loginRequest,
  loginFailure,
  registerFailure,
  registerSuccess,
  registerRequest,
  checkAdminFailure,
  checkAdminSuccess,
  checkAdminRequest,
  getAllUsersFailure,
  getAllUsersSuccess,
  getAllUsersRequest
};
