import CUSTOMIZE_API from "../../../api/customize-api";
import ORDERS_API from "../../../api/orders-api";

export const GetAllData = async (dispatch) => {
  try {
    const responseData = await CUSTOMIZE_API.getDashboardData();
    if (responseData) {
      dispatch({ type: "totalData", payload: responseData });
    }
  } catch (error) {
    console.log("Error fetching dashboard data:", error);
  }
};

export const todayAllOrders = async (dispatch) => {
  try {
    const responseData = await ORDERS_API.getAllOrders();
    if (responseData) {
      dispatch({ type: "totalOrders", payload: responseData });
    }
  } catch (error) {
    console.log("Error fetching today's orders:", error);
  }
};

export const sliderImages = async (dispatch) => {
  try {
    const responseData = await CUSTOMIZE_API.getSlideImage();
    if (responseData && responseData.Images) {
      dispatch({ type: "sliderImages", payload: responseData.Images });
    }
  } catch (error) {
    console.log("Error fetching slider images:", error);
  }
};

export const deleteImage = async (id, dispatch) => {
  dispatch({ type: "imageUpload", payload: true });
  try {
    const responseData = await CUSTOMIZE_API.deleteSlideImage (id);
    if (responseData && responseData.success) {
      sliderImages(dispatch);
    }
  } catch (error) {
    console.log("Error deleting image:", error);
  } finally {
    dispatch({ type: "imageUpload", payload: false });
  }
};

export const uploadImage = async (image, dispatch) => {
  dispatch({ type: "imageUpload", payload: true });
  const formData = new FormData();
  formData.append("image", image);
  try {
    const responseData = await CUSTOMIZE_API.uploadSlideImage(formData);
    if (responseData && responseData.success) {
      sliderImages(dispatch);
    }
  } catch (error) {
    console.log("Error uploading image:", error);
  } finally {
    dispatch({ type: "imageUpload", payload: false });
  }
};
