import API_ENDPOINT from "../globals/api-endpoint";

const USERS_API = {
  getAllUser: async () => {
    try {
      const response = await fetch(API_ENDPOINT.GET_ALL_USER);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error while fetching all users:', error);
      throw error;
    }
  },

  getSingleUser: async (uId) => {
    try {
      const response = await fetch(API_ENDPOINT.GET_USER_BY_ID, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ uId }),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error while fetching single user:', error);
      throw error;
    }
  },

  addUser: async (userData) => {
    try {
      const response = await fetch(API_ENDPOINT.ADD_USER, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error while adding user:', error);
      throw error;
    }
  },

  editUser: async (uId, name, phoneNumber) => {
    try {
      const response = await fetch(API_ENDPOINT.EDIT_USER, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ uId, name, phoneNumber }),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error while editing user:', error);
      throw error;
    }
  },

  deleteUser: async (uId) => {
    try {
      const response = await fetch(API_ENDPOINT.DELETE_USER, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ uId }),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error while deleting user:', error);
      throw error;
    }
  },

  changePassword: async (uId, oldPassword, newPassword) => {
    try {
      const response = await fetch(API_ENDPOINT.CHANGE_PASSWORD, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ uId, oldPassword, newPassword }),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error while changing password:', error);
      throw error;
    }
  },
};

export default USERS_API;
