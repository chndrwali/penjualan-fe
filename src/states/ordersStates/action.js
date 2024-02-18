import ORDERS_API from "../../api/orders-api";

export const ActionTypes = {
  GET_ALL_ORDERS_REQUEST: "GET_ALL_ORDERS_REQUEST",
  GET_ALL_ORDERS_SUCCESS: "GET_ALL_ORDERS_SUCCESS",
  GET_ALL_ORDERS_FAILURE: "GET_ALL_ORDERS_FAILURE",
  CREATE_ORDER_REQUEST: "CREATE_ORDER_REQUEST",
  CREATE_ORDER_SUCCESS: "CREATE_ORDER_SUCCESS",
  CREATE_ORDER_FAILURE: "CREATE_ORDER_FAILURE",
  UPDATE_ORDER_REQUEST: "UPDATE_ORDER_REQUEST",
  UPDATE_ORDER_SUCCESS: "UPDATE_ORDER_SUCCESS",
  UPDATE_ORDER_FAILURE: "UPDATE_ORDER_FAILURE",
  DELETE_ORDER_REQUEST: "DELETE_ORDER_REQUEST",
  DELETE_ORDER_SUCCESS: "DELETE_ORDER_SUCCESS",
  DELETE_ORDER_FAILURE: "DELETE_ORDER_FAILURE",
  GET_ORDER_BY_USER_REQUEST: 'GET_ORDER_BY_USER_REQUEST',
  GET_ORDER_BY_USER_SUCCESS: 'GET_ORDER_BY_USER_SUCCESS',
  GET_ORDER_BY_USER_FAILURE: 'GET_ORDER_BY_USER_FAILURE',
};

export const getAllOrdersRequest = () => ({
  type: ActionTypes.GET_ALL_ORDERS_REQUEST,
});

export const getAllOrdersSuccess = (orders) => ({
  type: ActionTypes.GET_ALL_ORDERS_SUCCESS,
  payload: orders,
});

export const getAllOrdersFailure = (error) => ({
  type: ActionTypes.GET_ALL_ORDERS_FAILURE,
  payload: error,
});

export const getOrderByUserRequest = () => ({
  type: ActionTypes.GET_ORDER_BY_USER_REQUEST,
});

export const getOrderByUserSuccess = (order) => ({
  type: ActionTypes.GET_ORDER_BY_USER_SUCCESS,
  payload: order,
});

export const getOrderByUserFailure = (error) => ({
  type: ActionTypes.GET_ORDER_BY_USER_FAILURE,
  payload: error,
});

export const createOrderRequest = () => ({
  type: ActionTypes.CREATE_ORDER_REQUEST,
});

export const createOrderSuccess = (message) => ({
  type: ActionTypes.CREATE_ORDER_SUCCESS,
  payload: message,
});

export const createOrderFailure = (error) => ({
  type: ActionTypes.CREATE_ORDER_FAILURE,
  payload: error,
});

export const updateOrderRequest = () => ({
  type: ActionTypes.UPDATE_ORDER_REQUEST,
});

export const updateOrderSuccess = (message) => ({
  type: ActionTypes.UPDATE_ORDER_SUCCESS,
  payload: message,
});

export const updateOrderFailure = (error) => ({
  type: ActionTypes.UPDATE_ORDER_FAILURE,
  payload: error,
});

export const deleteOrderRequest = () => ({
  type: ActionTypes.DELETE_ORDER_REQUEST,
});

export const deleteOrderSuccess = (message) => ({
  type: ActionTypes.DELETE_ORDER_SUCCESS,
  payload: message,
});

export const deleteOrderFailure = (error) => ({
  type: ActionTypes.DELETE_ORDER_FAILURE,
  payload: error,
});

export const getAllOrders = () => {
  return async (dispatch) => {
    dispatch(getAllOrdersRequest());
    try {
      const orders = await ORDERS_API.getAllOrders();
      dispatch(getAllOrdersSuccess(orders));
    } catch (error) {
      dispatch(getAllOrdersFailure(error.message));
    }
  };
};

export const getOrderByUser = (userId) => {
  return async (dispatch) => {
    dispatch(getOrderByUserRequest());
    try {
      const order = await ORDERS_API.getOrderByUser(userId);
      dispatch(getOrderByUserSuccess(order));
    } catch (error) {
      dispatch(getOrderByUserFailure(error.message));
    }
  };
};

export const createOrder = (orderData) => {
  return async (dispatch) => {
    dispatch(createOrderRequest());
    try {
      const response = await ORDERS_API.createOrder(orderData);
      dispatch(createOrderSuccess(response.success));
    } catch (error) {
      dispatch(createOrderFailure(error.message));
    }
  };
};

export const updateOrder = (orderId, status) => {
  return async (dispatch) => {
    dispatch(updateOrderRequest());
    try {
      const response = await ORDERS_API.updateOrder(orderId, status);
      dispatch(updateOrderSuccess(response.success));
    } catch (error) {
      dispatch(updateOrderFailure(error.message));
    }
  };
};

export const deleteOrder = (orderId) => {
  return async (dispatch) => {
    dispatch(deleteOrderRequest());
    try {
      const response = await ORDERS_API.deleteOrder(orderId);
      dispatch(deleteOrderSuccess(response.success));
    } catch (error) {
      dispatch(deleteOrderFailure(error.message));
    }
  };
};
