import BRAINTREE_API from "../../api/braintree-api";

export const ActionTypes = {
  GET_BRAINTREE_TOKEN_REQUEST: 'GET_BRAINTREE_TOKEN_REQUEST',
  GET_BRAINTREE_TOKEN_SUCCESS: 'GET_BRAINTREE_TOKEN_SUCCESS',
  GET_BRAINTREE_TOKEN_FAILURE: 'GET_BRAINTREE_TOKEN_FAILURE',
  PAYMENT_PROCESS_REQUEST: 'PAYMENT_PROCESS_REQUEST',
  PAYMENT_PROCESS_SUCCESS: 'PAYMENT_PROCESS_SUCCESS',
  PAYMENT_PROCESS_FAILURE: 'PAYMENT_PROCESS_FAILURE',
};


export const generateTokenRequest = () => ({
  type: ActionTypes.GET_BRAINTREE_TOKEN_REQUEST,
});

export const generateTokenSuccess = (token) => ({
  type: ActionTypes.GET_BRAINTREE_TOKEN_SUCCESS,
  payload: token,
});

export const generateTokenFailure = (error) => ({
  type: ActionTypes.GET_BRAINTREE_TOKEN_FAILURE,
  payload: error,
});

export const paymentProcessRequest = () => ({
  type: ActionTypes.PAYMENT_PROCESS_REQUEST,
});

export const paymentProcessSuccess = (result) => ({
  type: ActionTypes.PAYMENT_PROCESS_SUCCESS,
  payload: result,
});

export const paymentProcessFailure = (error) => ({
  type: ActionTypes.PAYMENT_PROCESS_FAILURE,
  payload: error,
});

export const generateToken = () => {
  return async (dispatch) => {
    dispatch(generateTokenRequest());
    try {
      const token = await BRAINTREE_API.getToken();
      dispatch(generateTokenSuccess(token));
    } catch (error) {
      dispatch(generateTokenFailure(error.message));
    }
  };
};

export const paymentProcess = (amountTotal, paymentMethod) => {
  return async (dispatch) => {
    dispatch(paymentProcessRequest());
    try {
      const result = await BRAINTREE_API.payment(amountTotal, paymentMethod);
      dispatch(paymentProcessSuccess(result));
    } catch (error) {
      dispatch(paymentProcessFailure(error.message));
    }
  };
};
