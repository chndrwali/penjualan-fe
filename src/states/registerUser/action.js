import AUTH_API from "../../api/auth-api";

const ActionType = {
    RECEIVE_USER: 'RECEIVE_USER'
};

function receiveUserActionCreator(register) {
    return {
        type: ActionType.RECEIVE_USER,
        payload: {
            register,
        },
    };
}

function asyncRegisterUser({ name, email, password, cPassword }) {
    return async () => {
      try {
        await AUTH_API.registerUser({ name, email, password, cPassword });
      } catch (error) {
        alert(error.message);
      }
    };
  }
export {
    ActionType,
    asyncRegisterUser,
    receiveUserActionCreator
}