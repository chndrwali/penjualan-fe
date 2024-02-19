import API_ENDPOINT from "../globals/api-endpoint";

const CATEGORIES_API = {
  getAllCategories: async () => {
    try {
      const response = await fetch(API_ENDPOINT.GET_ALL_CATEGORY);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error while fetching all categories:', error);
      throw error;
    }
  },

  addCategory: async (cName, cDescription, cStatus, cImage) => {
    try {
      const formData = new FormData();
      formData.append('cName', cName);
      formData.append('cDescription', cDescription);
      formData.append('cStatus', cStatus);
      formData.append('cImage', cImage);

      const response = await fetch(API_ENDPOINT.ADD_CATEGORY, {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error while adding category:', error);
      throw error;
    }
  },

  editCategory: async (cId, cDescription, cStatus) => {
    try {
      const response = await fetch(API_ENDPOINT.EDIT_CATEGORY, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cId, cDescription, cStatus }),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error while editing category:', error);
      throw error;
    }
  },

  deleteCategory: async (cId) => {
    try {
      const response = await fetch(API_ENDPOINT.DELETE_CATEGORY, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cId }),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error while deleting category:', error);
      throw error;
    }
  },
};

export default CATEGORIES_API;
