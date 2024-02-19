import API_ENDPOINT from "../globals/api-endpoint";

const CUSTOMIZE_API = {
  getSlideImages: async () => {
    try {
      const response = await fetch(API_ENDPOINT.GET_SLIDE_IMAGE);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error while fetching slide images:', error);
      throw error;
    }
  },

  deleteSlideImage: async (id) => {
    try {
      const response = await fetch(`${API_ENDPOINT.DELETE_SLIDE_IMAGE}/${id}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error while deleting slide image:', error);
      throw error;
    }
  },

  uploadSlideImage: async (slideImage) => {
    try {
      const formData = new FormData();
      formData.append('slideImage', slideImage);

      const response = await fetch(API_ENDPOINT.POST_SLIDE_IMAGE, {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error while uploading slide image:', error);
      throw error;
    }
  },

  getDashboardData: async () => {
    try {
      const response = await fetch(API_ENDPOINT.GET_DASHBOARD_DATA);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error while fetching dashboard data:', error);
      throw error;
    }
  },
};

export default CUSTOMIZE_API;
