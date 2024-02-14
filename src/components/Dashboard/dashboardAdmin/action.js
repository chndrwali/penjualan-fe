import {
  DashboardData,
  postUploadImage,
  getSliderImages,
  postDeleteImage,
  getAllOrder
} from "../../../utils/api";

export const GetAllData = async (dispatch) => {
  try {
    const responseData = await DashboardData();
    if (responseData) {
      dispatch({ type: "totalData", payload: responseData });
    }
  } catch (error) {
    console.log("Error fetching dashboard data:", error);
  }
};

export const todayAllOrders = async (dispatch) => {
  try {
    const responseData = await getAllOrder();
    if (responseData) {
      dispatch({ type: "totalOrders", payload: responseData });
    }
  } catch (error) {
    console.log("Error fetching today's orders:", error);
  }
};

export const sliderImages = async (dispatch) => {
  try {
    const responseData = await getSliderImages();
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
    const responseData = await postDeleteImage(id);
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
    const responseData = await postUploadImage(formData);
    if (responseData && responseData.success) {
      sliderImages(dispatch);
    }
  } catch (error) {
    console.log("Error uploading image:", error);
  } finally {
    dispatch({ type: "imageUpload", payload: false });
  }
};
