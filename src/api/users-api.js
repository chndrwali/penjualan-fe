import axios from "axios";
import API_ENDPOINT from "../globals/api-endpoint";

const USERS_API = {
  getAllUsers: async () => {
    try {
      const response = await axios.get(API_ENDPOINT.GET_ALL_USER);
      return response.data;
    } catch (error) {
      console.error("Error while fetching all users:", error);
      throw error;
    }
  },

  getUserById: async (userId) => {
    try {
      const response = await axios.post(API_ENDPOINT.GET_USER_BY_ID, { uId: userId });
      return response.data;
    } catch (error) {
      console.error("Error while fetching user by ID:", error);
      throw error;
    }
  },

  addUser: async (userData) => {
    try {
      const response = await axios.post(API_ENDPOINT.ADD_USER, userData);
      return response.data;
    } catch (error) {
      console.error("Error while adding user:", error);
      throw error;
    }
  },

  editUser: async (userId, userData) => {
    try {
      const response = await axios.post(API_ENDPOINT.EDIT_USER, { uId: userId, ...userData });
      return response.data;
    } catch (error) {
      console.error("Error while editing user:", error);
      throw error;
    }
  },

  deleteUser: async (userId) => {
    try {
      const response = await axios.post(API_ENDPOINT.DELETE_USER, { uId: userId });
      return response.data;
    } catch (error) {
      console.error("Error while deleting user:", error);
      throw error;
    }
  },

  changePassword: async (userId, oldPassword, newPassword) => {
    try {
      const response = await axios.post(API_ENDPOINT.CHANGE_PASSWORD, {
        uId: userId,
        oldPassword,
        newPassword,
      });
      return response.data;
    } catch (error) {
      console.error("Error while changing password:", error);
      throw error;
    }
  },
};

export default USERS_API;
