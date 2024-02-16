import { ActionType } from './action';

function braintreeReducer(state = { token: null, loading: false, error: null }, action) {
  switch (action.type) {
    case ActionType.GET_BRAINTREE_TOKEN_REQUEST:
      return { ...state, loading: true, error: null };
    case ActionType.GET_BRAINTREE_TOKEN_SUCCESS:
      return { ...state, loading: false, token: action.payload, error: null };
    case ActionType.GET_BRAINTREE_TOKEN_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case ActionType.PAYMENT_REQUEST:
      return { ...state, loading: true, error: null };
    case ActionType.PAYMENT_SUCCESS:
      return { ...state, loading: false, paymentResult: action.payload, error: null };
    case ActionType.PAYMENT_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export default braintreeReducer;
