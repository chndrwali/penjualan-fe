import API_ENDPOINT from "../globals/api-endpoint";

const ORDERS_API = {
  getAllOrders: async () => {
    try {
      const response = await fetch(API_ENDPOINT.GET_ALL_ORDERS);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error while fetching all orders:', error);
      throw error;
    }
  },

  getOrderByUser: async (uId) => {
    try {
      const response = await fetch(API_ENDPOINT.GET_ORDER_BY_USER, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ uId }),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error while fetching orders by user:', error);
      throw error;
    }
  },

  createOrder: async (orderData) => {
    try {
      const response = await fetch(API_ENDPOINT.CREATE_ORDER, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error while creating order:', error);
      throw error;
    }
  },

  updateOrder: async (oId, status) => {
    try {
      const response = await fetch(API_ENDPOINT.UPDATE_ORDER, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ oId, status }),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error while updating order:', error);
      throw error;
    }
  },

  deleteOrder: async (oId) => {
    try {
      const response = await fetch(API_ENDPOINT.DELETE_ORDER, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ oId }),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error while deleting order:', error);
      throw error;
    }
  },
};

export default ORDERS_API;
