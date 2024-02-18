import AUTH_API from "../../api/auth-api";
import { loginUser } from "../authUser/action";

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
      try {
        // preload process
        const userData = await AUTH_API.getOwnProfile();
        dispatch(loginUser(userData));
      } catch (error) {
        // fallback process
        dispatch(loginUser(null));
      } finally {
        // end preload process
        dispatch(setIsPreloadActionCreator(false));
      }
    };
  }
export {
    ActionType,
    setIsPreloadActionCreator,
    asyncPreloadProcess
}