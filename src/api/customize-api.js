import axios from "axios";
import API_ENDPOINT from "../globals/api-endpoint";

const CUSTOMIZE_API = {
  getSlideImage: async () => {
    try {
      const response = await axios.get(API_ENDPOINT.GET_SLIDE_IMAGE);
      return response.data;
    } catch (error) {
      console.error("Error while fetching slide images:", error);
      throw error;
    }
  },

  deleteSlideImage: async (id) => {
    try {
      const response = await axios.delete(API_ENDPOINT.DELETE_SLIDE_IMAGE(id));
      return response.data;
    } catch (error) {
      console.error("Error while deleting slide image:", error);
      throw error;
    }
  },

  uploadSlideImage: async (formData) => {
    try {
      const response = await axios.post(API_ENDPOINT.POST_SLIDE_IMAGE, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error while uploading slide image:", error);
      throw error;
    }
  },

  getDashboardData: async () => {
    try {
      const response = await axios.get(API_ENDPOINT.GET_DASHBOARD_DATA);
      return response.data;
    } catch (error) {
      console.error("Error while fetching dashboard data:", error);
      throw error;
    }
  },
};

export default CUSTOMIZE_API;
