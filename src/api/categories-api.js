import axios from "axios";
import API_ENDPOINT from "../globals/api-endpoint";

const CATEGORIES_API = {
  getAllCategories: async () => {
    try {
      const response = await axios.get(API_ENDPOINT.GET_ALL_CATEGORY);
      return response.data;
    } catch (error) {
      console.error("Error while fetching all categories:", error);
      throw error;
    }
  },

  addCategory: async (categoryData) => {
    try {
      const response = await axios.post(API_ENDPOINT.ADD_CATEGORY, categoryData);
      return response.data;
    } catch (error) {
      console.error("Error while adding category:", error);
      throw error;
    }
  },

  editCategory: async (categoryId, categoryData) => {
    try {
      const response = await axios.post(API_ENDPOINT.EDIT_CATEGORY, { cId: categoryId, ...categoryData });
      return response.data;
    } catch (error) {
      console.error("Error while editing category:", error);
      throw error;
    }
  },

  deleteCategory: async (categoryId) => {
    try {
      const response = await axios.post(API_ENDPOINT.DELETE_CATEGORY, { cId: categoryId });
      return response.data;
    } catch (error) {
      console.error("Error while deleting category:", error);
      throw error;
    }
  },
};

export default CATEGORIES_API;
