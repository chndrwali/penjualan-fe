import AUTH_API from "../../api/auth-api";

export const ActionTypes = {
  LOGIN_USER_REQUEST: 'LOGIN_USER_REQUEST',
  LOGIN_USER_SUCCESS: 'LOGIN_USER_SUCCESS',
  LOGIN_USER_FAILURE: 'LOGIN_USER_FAILURE',
  LOGOUT_USER: 'LOGOUT_USER',
};

export const loginUserRequest = () => ({
    type: ActionTypes.LOGIN_USER_REQUEST,
  });

  export const loginUserSuccess = (userData) => ({
    type: ActionTypes.LOGIN_USER_SUCCESS,
    payload: userData,
  });

  export const loginUserFailure = (error) => ({
    type: ActionTypes.LOGIN_USER_FAILURE,
    payload: error,
  });

  export const logoutSuccess = () => ({
    type: ActionTypes.LOGOUT_USER,
  });

  export const loginUser = (email, password) => {
    return async (dispatch) => {
      dispatch(loginUserRequest());
      try {
        const userData = await AUTH_API.loginUser(email, password);
        AUTH_API.authenticateUser(userData.token);
        dispatch(loginUserSuccess(userData));
      } catch (error) {
        dispatch(loginUserFailure(error.message));
      }
    };
  };

  export const logout = () => {
    return async (dispatch) => {
      // Hapus data pengguna dari penyimpanan lokal saat logout
      localStorage.removeItem('token');
      // Panggil action creator untuk logout
      dispatch(logoutSuccess());
    };
  };

