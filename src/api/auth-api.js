import API_ENDPOINT from "../globals/api-endpoint";

const fetchOptions = (method, data) => ({
  method: method,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}` // Menambahkan token jika tersedia di localStorage
  },
  body: JSON.stringify(data)
});

const AUTH_API = {
  async isAdmin(loggedInUserId) {
    try {
      const response = await fetch(API_ENDPOINT.IS_ADMIN, fetchOptions('POST', { loggedInUserId }));
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error while checking admin role:', error);
      throw error;
    }
  },

  async signup(userData) {
    try {
      const response = await fetch(API_ENDPOINT.REGISTER, fetchOptions('POST', userData));
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error while signing up:', error);
      throw error;
    }
  },

  async signin(userData) {
    try {
      const response = await fetch(API_ENDPOINT.LOGIN, fetchOptions('POST', userData));
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error while signing in:', error);
      throw error;
    }
  },

  async getAllUsers() {
    try {
      const response = await fetch(API_ENDPOINT.ALL_USER, fetchOptions('POST', {}));
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error while fetching all users:', error);
      throw error;
    }
  },

  async getOwnProfile() {
    try {
      const response = await fetch(API_ENDPOINT.GET_OWN_PROFILE, fetchOptions('GET', {}));
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error while fetching own profile:', error);
      throw error;
    }
  }
};

export default AUTH_API;
