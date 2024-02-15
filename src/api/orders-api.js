import axios from "axios";
import API_ENDPOINT from "../globals/api-endpoint";

const ORDERS_API = {
  getAllOrders: async () => {
    try {
      const response = await axios.get(API_ENDPOINT.GET_ALL_ORDERS);
      return response.data;
    } catch (error) {
      console.error("Error while fetching all orders:", error);
      throw error;
    }
  },

  getOrderByUser: async (userId) => {
    try {
      const response = await axios.post(API_ENDPOINT.GET_ORDER_BY_USER, { uId: userId });
      return response.data;
    } catch (error) {
      console.error("Error while fetching orders by user:", error);
      throw error;
    }
  },

  createOrder: async (orderData) => {
    try {
      const response = await axios.post(API_ENDPOINT.CREATE_ORDER, orderData);
      return response.data;
    } catch (error) {
      console.error("Error while creating order:", error);
      throw error;
    }
  },

  updateOrder: async (orderId, status) => {
    try {
      const response = await axios.post(API_ENDPOINT.UPDATE_ORDER, { oId: orderId, status });
      return response.data;
    } catch (error) {
      console.error("Error while updating order:", error);
      throw error;
    }
  },

  deleteOrder: async (orderId) => {
    try {
      const response = await axios.post(API_ENDPOINT.DELETE_ORDER, { oId: orderId });
      return response.data;
    } catch (error) {
      console.error("Error while deleting order:", error);
      throw error;
    }
  },
};

export default ORDERS_API;
