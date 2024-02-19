import API_ENDPOINT from "../globals/api-endpoint";

const BRAINTREE_API = {
  async generateToken() {
    try {
      const response = await fetch(API_ENDPOINT.GET_TOKEN, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error while generating client token:', error);
      throw error;
    }
  },

  // Function to process payment
  async processPayment(amountTotal, paymentMethod) {
    try {
      const response = await fetch(API_ENDPOINT.PAYMENT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amountTotal, paymentMethod }),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error while processing payment:', error);
      throw error;
    }
  }
};

export default BRAINTREE_API;
