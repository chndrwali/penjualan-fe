import CUSTOMIZE_API from '../../api/customize-api';

export const ActionType = {
    UPLOAD_SLIDE_IMAGE_REQUEST: 'UPLOAD_SLIDE_IMAGE_REQUEST',
    UPLOAD_SLIDE_IMAGE_SUCCESS: 'UPLOAD_SLIDE_IMAGE_SUCCESS',
    UPLOAD_SLIDE_IMAGE_FAILURE: 'UPLOAD_SLIDE_IMAGE_FAILURE',
    TOGGLE_UPLOAD_SLIDER_BTN: 'TOGGLE_UPLOAD_SLIDER_BTN'
}

export const uploadSlideImageRequest = () => ({
    type: ActionType.UPLOAD_SLIDE_IMAGE_REQUEST,
  });
  
  export const uploadSlideImageSuccess = (message) => ({
    type: ActionType.UPLOAD_SLIDE_IMAGE_SUCCESS,
    payload: message,
  });
  
  export const uploadSlideImageFailure = (error) => ({
    type: ActionType.UPLOAD_SLIDE_IMAGE_FAILURE,
    payload: error,
  });

  export const toggleUploadSliderBtn = () => ({
    type: ActionType.TOGGLE_UPLOAD_SLIDER_BTN
  });

  export const asyncUploadImage = (formData) => {
    return async (dispatch) => {
      dispatch(uploadSlideImageRequest());
      try {
        const uploadedImageData = await CUSTOMIZE_API.uploadSlideImage(formData);
        dispatch(uploadSlideImageSuccess(uploadedImageData));
      } catch (error) {
        dispatch(uploadSlideImageFailure(error.message));
      }
    };
  };