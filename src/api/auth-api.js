import axios from "axios";
import API_ENDPOINT from "../globals/api-endpoint";

const AUTH_API = {
  getOwnProfile: async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No token found');
      }
      const response = await axios.get(API_ENDPOINT.GET_OWN_PROFILE, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error while fetching own profile:', error);
      throw error;
    }
  },
  
  loginUser: async (email, password) => {
    try {
      const response = await axios.post(API_ENDPOINT.LOGIN, {
        email: email,
        password: password,
      });
      return response.data;
    } catch (error) {
      console.error("Error while logging in:", error);
      throw error;
    }
  },

  registerUser: async (userData) => {
    try {
      const response = await axios.post(API_ENDPOINT.REGISTER, userData);
      return response.data;
    } catch (error) {
      console.error("Error while registering user:", error);
      throw error;
    }
  },

  isAdmin: async (loggedInUserId) => {
    try {
      const response = await axios.post(API_ENDPOINT.IS_ADMIN, {
        loggedInUserId: loggedInUserId,
      });
      return response.data;
    } catch (error) {
      console.error("Error while checking admin status:", error);
      throw error;
    }
  },

  getAllUsers: async () => {
    try {
      const response = await axios.post(API_ENDPOINT.ALL_USER);
      return response.data;
    } catch (error) {
      console.error("Error while fetching all users:", error);
      throw error;
    }
  },

  authenticateUser: (token) => {
    localStorage.setItem("token", JSON.stringify(token));
  },

  isAuthenticate: () => {
    const jwt = localStorage.getItem("token");
    return jwt ? JSON.parse(jwt) : false;
  },
  

  isAdminAuth: () => {
    const jwt = localStorage.getItem("jwt");
    return jwt ? JSON.parse(jwt).user.role === 1 : false;
  },
};

export default AUTH_API;
