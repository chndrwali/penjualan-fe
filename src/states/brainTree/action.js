import axios from "axios";
import API_ENDPOINT from "../../globals/api-endpoint";

const ActionType = {
  GET_BRAINTREE_TOKEN_REQUEST: 'GET_BRAINTREE_TOKEN_REQUEST',
  GET_BRAINTREE_TOKEN_SUCCESS: 'GET_BRAINTREE_TOKEN_SUCCESS',
  GET_BRAINTREE_TOKEN_FAILURE: 'GET_BRAINTREE_TOKEN_FAILURE',
  PAYMENT_SUCCESS: 'PAYMENT_SUCCESS',
  PAYMENT_REQUEST: 'PAYMENT_REQUEST',
  PAYMENT_FAILURE: 'PAYMENT_FAILURE',
};

const getBraintreeTokenRequest = () => ({
  type: ActionType.GET_BRAINTREE_TOKEN_REQUEST,
});

const getBraintreeTokenSuccess = (token) => ({
  type: ActionType.GET_BRAINTREE_TOKEN_SUCCESS,
  payload: token,
});

const getBraintreeTokenFailure = (error) => ({
  type: ActionType.GET_BRAINTREE_TOKEN_FAILURE,
  payload: error,
});

const paymentRequest = () => ({
  type: ActionType.PAYMENT_REQUEST,
});

const paymentSuccess = (paymentResult) => ({
  type: ActionType.PAYMENT_SUCCESS,
  payload: paymentResult,
});

const paymentFailure = (error) => ({
  type: ActionType.PAYMENT_FAILURE,
  payload: error,
});

const getBraintreeToken = () => {
  return async (dispatch) => {
    dispatch(getBraintreeTokenRequest());
    try {
      const response = await axios.post(API_ENDPOINT.GET_TOKEN);
      dispatch(getBraintreeTokenSuccess(response.data));
    } catch (error) {
      dispatch(getBraintreeTokenFailure(error));
    }
  };
};

const processPayment = (amountTotal, paymentMethod) => {
  return async (dispatch) => {
    dispatch(paymentRequest());
    try {
      const response = await axios.post(API_ENDPOINT.PAYMENT, {
        amountTotal,
        paymentMethod,
      });
      dispatch(paymentSuccess(response.data));
    } catch (error) {
      dispatch(paymentFailure(error));
    }
  };
};

export {
  ActionType,
  getBraintreeToken,
  processPayment,
  getBraintreeTokenRequest,
  getBraintreeTokenFailure,
  getBraintreeTokenSuccess,
  paymentFailure,
  paymentSuccess,
  paymentRequest
};
