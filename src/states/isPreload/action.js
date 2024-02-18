import USERS_API from "../../api/users-api";
import { setAuthUserActionCreator } from "../authUser/action";

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
        const userData = await USERS_API.getUserById();
        dispatch(setAuthUserActionCreator(userData));
      } catch (error) {
        // fallback process
        dispatch(setAuthUserActionCreator(null));
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