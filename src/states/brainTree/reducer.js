import { ActionTypes } from './action';

const initialState = {
  token: null,
  result: null,
  loading: false,
  error: null,
};

const braintreeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_BRAINTREE_TOKEN_REQUEST:
    case ActionTypes.PAYMENT_PROCESS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ActionTypes.GET_BRAINTREE_TOKEN_SUCCESS:
      return {
        ...state,
        token: action.payload,
        loading: false,
        error: null,
      };
    case ActionTypes.PAYMENT_PROCESS_SUCCESS:
      return {
        ...state,
        result: action.payload,
        loading: false,
        error: null,
      };
    case ActionTypes.GET_BRAINTREE_TOKEN_FAILURE:
    case ActionTypes.PAYMENT_PROCESS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default braintreeReducer;
