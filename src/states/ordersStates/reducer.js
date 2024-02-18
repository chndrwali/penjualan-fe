import { ActionTypes } from './action';

const initialState = {
  allOrders: [],
  loading: false,
  error: null,
};

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_ALL_ORDERS_REQUEST:
    case ActionTypes.CREATE_ORDER_REQUEST:
    case ActionTypes.UPDATE_ORDER_REQUEST:
    case ActionTypes.DELETE_ORDER_REQUEST:
    case ActionTypes.GET_ORDER_BY_USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case ActionTypes.GET_ALL_ORDERS_SUCCESS:
      return {
        ...state,
        allOrders: action.payload,
        loading: false,
      };

    case ActionTypes.GET_ORDER_BY_USER_SUCCESS:
      return {
        ...state,
        allOrders: action.payload,
        loading: false,
      };

    case ActionTypes.CREATE_ORDER_SUCCESS:
    case ActionTypes.UPDATE_ORDER_SUCCESS:
    case ActionTypes.DELETE_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };

    case ActionTypes.GET_ALL_ORDERS_FAILURE:
    case ActionTypes.CREATE_ORDER_FAILURE:
    case ActionTypes.UPDATE_ORDER_FAILURE:
    case ActionTypes.DELETE_ORDER_FAILURE:
    case ActionTypes.GET_ORDER_BY_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default ordersReducer;
