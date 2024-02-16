import AUTH_API from "../../api/auth-api";

const ActionType = {
  SET_AUTH_USER: 'SET_AUTH_USER',
  UNSET_AUTH_USER: 'UNSET_AUTH_USER'
};

function setAuthUserActionCreator(userData) {
    return {
        type: ActionType.SET_AUTH_USER,
        payload: {
            userData
        },
    };
}

function unsetAuthUserActionCreator() {
    return {
        type: ActionType.UNSET_AUTH_USER,
        payload: {
            userData: null,
        },
    };
}

function asyncSetAuthUser({ email, password }) {
    return async (dispatch) => {   
        try {
            const userData = await AUTH_API.loginUser({ email, password });
            dispatch(setAuthUserActionCreator(userData));
        } catch (error) {
            alert(error.message);
        }
    };
}

function asyncUnsetAuthUser() {
    return async (dispatch) => {
        try {
            // Hapus token JWT dari localStorage
            AUTH_API.isAuthenticate('');
            // Kirim aksi untuk menghapus status otentikasi pengguna
            dispatch(unsetAuthUserActionCreator());
        } catch (error) {
            console.error("Error while logging out:", error);
            throw error;
        }
    };
}

export {
  ActionType,
  setAuthUserActionCreator,
  unsetAuthUserActionCreator,
  asyncSetAuthUser,
  asyncUnsetAuthUser
};
