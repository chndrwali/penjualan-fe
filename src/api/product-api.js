import axios from "axios";
import API_ENDPOINT from "../globals/api-endpoint";

const PRODUCT_API = {
  getAllProduct: async () => {
    try {
      const response = await axios.get(API_ENDPOINT.GET_ALL_PRODUCT);
      return response.data;
    } catch (error) {
      console.error("Error while fetching all products:", error);
      throw error;
    }
  },

  getWishProduct: async () => {
    try {
      const response = await axios.get(API_ENDPOINT.GET_WISH_PRODUCT);
      return response.data;
    } catch (error) {
      console.error("Error while fetching wish products:", error);
      throw error;
    }
  },

  getProductByPrice: async () => {
    try {
      const response = await axios.get(API_ENDPOINT.GET_PRODUCT_BY_PRICE);
      return response.data;
    } catch (error) {
      console.error("Error while fetching products by price:", error);
      throw error;
    }
  },

  getProductByCategory: async () => {
    try {
      const response = await axios.get(API_ENDPOINT.GET_PRODUCT_BY_CATEGORY);
      return response.data;
    } catch (error) {
      console.error("Error while fetching products by category:", error);
      throw error;
    }
  },

  getCartProduct: async () => {
    try {
      const response = await axios.get(API_ENDPOINT.GET_CART_PRODUCT);
      return response.data;
    } catch (error) {
      console.error("Error while fetching cart products:", error);
      throw error;
    }
  },

  postProduct: async (formData) => {
    try {
      const response = await axios.post(API_ENDPOINT.POST_PRODUCT, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error while adding product:", error);
      throw error;
    }
  },

  editProduct: async (productId, formData) => {
    try {
      const response = await axios.post(
        API_ENDPOINT.EDIT_PRODUCT + `/${productId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error while editing product:", error);
      throw error;
    }
  },

  deleteProduct: async (productId) => {
    try {
      const response = await axios.delete(
        API_ENDPOINT.DELETE_PRODUCT + `/${productId}`
      );
      return response.data;
    } catch (error) {
      console.error("Error while deleting product:", error);
      throw error;
    }
  },

  getSingleProduct: async (productId) => {
    try {
      const response = await axios.get(
        API_ENDPOINT.GET_SINGLE_PRODUCT + `/${productId}`
      );
      return response.data;
    } catch (error) {
      console.error("Error while fetching single product:", error);
      throw error;
    }
  },

  addReview: async (productId, reviewData) => {
    try {
      const response = await axios.post(
        API_ENDPOINT.ADD_REVIEW + `/${productId}`,
        reviewData
      );
      return response.data;
    } catch (error) {
      console.error("Error while adding review:", error);
      throw error;
    }
  },

  deleteReview: async (productId, reviewId) => {
    try {
      const response = await axios.delete(
        API_ENDPOINT.DELETE_REVIEW + `/${productId}/${reviewId}`
      );
      return response.data;
    } catch (error) {
      console.error("Error while deleting review:", error);
      throw error;
    }
  },
};

export default PRODUCT_API;
