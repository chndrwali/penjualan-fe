import USERS_API from "../../api/users-api";
import { setAuthUserActionCreator } from "../authUser/action";
import { hideLoading, showLoading } from "react-redux-loading-bar";

const ActionType = {
    SET_IS_PRELOAD: 'SET_IS_PRELOAD',
};

function setIsPreloadActionCreator(isPreload) {
    return {
      type: ActionType.SET_IS_PRELOAD,
      payload: {
        isPreload,
      },
    };
}

function asyncPreloadProcess() {
    return async (dispatch) => {
    dispatch(showLoading());
      try {
        // preload process
        const userData = await USERS_API.getUserById();
        dispatch(setAuthUserActionCreator(userData));
      } catch (error) {
        // fallback process
        dispatch(setAuthUserActionCreator(null));
      } finally {
        // end preload process
        dispatch(setIsPreloadActionCreator(false));
      }
      dispatch(hideLoading());
    };
  }
export {
    ActionType,
    setIsPreloadActionCreator,
    asyncPreloadProcess
}