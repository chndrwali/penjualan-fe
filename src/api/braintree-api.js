import axios from "axios";
import API_ENDPOINT from "../globals/api-endpoint";

const BRAINTREE_API = {
  getToken: async () => {
    try {
      const response = await axios.post(API_ENDPOINT.GET_TOKEN);
      return response.data;
    } catch (error) {
      console.error("Error while getting Braintree token:", error);
      throw error;
    }
  },

  payment: async (amountTotal, paymentMethod) => {
    try {
      const response = await axios.post(API_ENDPOINT.PAYMENT, {
        amountTotal,
        paymentMethod,
      });
      return response.data;
    } catch (error) {
      console.error("Error while processing payment:", error);
      throw error;
    }
  },
};

export default BRAINTREE_API;
