import CUSTOMIZE_API from '../../api/customize-api';

export const ActionTypes = {
  GET_SLIDE_IMAGE_REQUEST: 'GET_SLIDE_IMAGE_REQUEST',
  GET_SLIDE_IMAGE_SUCCESS: 'GET_SLIDE_IMAGE_SUCCESS',
  GET_SLIDE_IMAGE_FAILURE: 'GET_SLIDE_IMAGE_FAILURE',
  DELETE_SLIDE_IMAGE_REQUEST: 'DELETE_SLIDE_IMAGE_REQUEST',
  DELETE_SLIDE_IMAGE_SUCCESS: 'DELETE_SLIDE_IMAGE_SUCCESS',
  DELETE_SLIDE_IMAGE_FAILURE: 'DELETE_SLIDE_IMAGE_FAILURE',
  UPLOAD_SLIDE_IMAGE_REQUEST: 'UPLOAD_SLIDE_IMAGE_REQUEST',
  UPLOAD_SLIDE_IMAGE_SUCCESS: 'UPLOAD_SLIDE_IMAGE_SUCCESS',
  UPLOAD_SLIDE_IMAGE_FAILURE: 'UPLOAD_SLIDE_IMAGE_FAILURE',
  GET_DASHBOARD_DATA_REQUEST: 'GET_DASHBOARD_DATA_REQUEST',
  GET_DASHBOARD_DATA_SUCCESS: 'GET_DASHBOARD_DATA_SUCCESS',
  GET_DASHBOARD_DATA_FAILURE: 'GET_DASHBOARD_DATA_FAILURE',
}

export const getSlideImageRequest = () => ({
  type: ActionTypes.GET_SLIDE_IMAGE_REQUEST,
});

export const getSlideImageSuccess = (slideImages) => ({
  type: ActionTypes.GET_SLIDE_IMAGE_SUCCESS,
  payload: slideImages,
});

export const getSlideImageFailure = (error) => ({
  type: ActionTypes.GET_SLIDE_IMAGE_FAILURE,
  payload: error,
});

export const deleteSlideImageRequest = () => ({
  type: ActionTypes.DELETE_SLIDE_IMAGE_REQUEST,
});

export const deleteSlideImageSuccess = (message) => ({
  type: ActionTypes.DELETE_SLIDE_IMAGE_SUCCESS,
  payload: message,
});

export const deleteSlideImageFailure = (error) => ({
  type: ActionTypes.DELETE_SLIDE_IMAGE_FAILURE,
  payload: error,
});

export const uploadSlideImageRequest = () => ({
  type: ActionTypes.UPLOAD_SLIDE_IMAGE_REQUEST,
});

export const uploadSlideImageSuccess = (message) => ({
  type: ActionTypes.UPLOAD_SLIDE_IMAGE_SUCCESS,
  payload: message,
});

export const uploadSlideImageFailure = (error) => ({
  type: ActionTypes.UPLOAD_SLIDE_IMAGE_FAILURE,
  payload: error,
});

export const getDashboardDataRequest = () => ({
  type: ActionTypes.GET_DASHBOARD_DATA_REQUEST,
});

export const getDashboardDataSuccess = (dashboardData) => ({
  type: ActionTypes.GET_DASHBOARD_DATA_SUCCESS,
  payload: dashboardData,
});

export const getDashboardDataFailure = (error) => ({
  type: ActionTypes.GET_DASHBOARD_DATA_FAILURE,
  payload: error,
});

export const getSlideImage = () => {
  return async (dispatch) => {
    dispatch(getSlideImageRequest());
    try {
      const slideImages = await CUSTOMIZE_API.getSlideImage();
      dispatch(getSlideImageSuccess(slideImages));
    } catch (error) {
      dispatch(getSlideImageFailure(error.message));
    }
  };
};

export const deleteSlideImage = (id) => {
  return async (dispatch) => {
    dispatch(deleteSlideImageRequest());
    try {
      const response = await CUSTOMIZE_API.deleteSlideImage(id);
      dispatch(deleteSlideImageSuccess(response.success));
    } catch (error) {
      dispatch(deleteSlideImageFailure(error.message));
    }
  };
};

export const uploadSlideImage = (formData) => {
  return async (dispatch) => {
    dispatch(uploadSlideImageRequest());
    try {
      const response = await CUSTOMIZE_API.uploadSlideImage(formData);
      dispatch(uploadSlideImageSuccess(response.success));
    } catch (error) {
      dispatch(uploadSlideImageFailure(error.message));
    }
  };
};

export const getDashboardData = () => {
  return async (dispatch) => {
    dispatch(getDashboardDataRequest());
    try {
      const dashboardData = await CUSTOMIZE_API.getDashboardData();
      dispatch(getDashboardDataSuccess(dashboardData));
    } catch (error) {
      dispatch(getDashboardDataFailure(error.message));
    }
  };
};
