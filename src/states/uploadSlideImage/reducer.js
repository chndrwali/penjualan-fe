import { ActionType } from './action';

const initialState = {
  isUploading: false,
  uploadedImageData: null,
  error: null,
};

const uploadImageSlideReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.UPLOAD_SLIDE_IMAGE_REQUEST:
      return {
        ...state,
        isUploading: true,
        uploadedImageData: null,
        error: null,
      };
    case ActionType.UPLOAD_SLIDE_IMAGE_SUCCESS:
      return {
        ...state,
        isUploading: false,
        uploadedImageData: action.payload,
        error: null,
      };
    case ActionType.UPLOAD_SLIDE_IMAGE_FAILURE:
      return {
        ...state,
        isUploading: false,
        uploadedImageData: null,
        error: action.payload,
      };
    case ActionType.TOGGLE_UPLOAD_SLIDER_BTN:
      return {
        ...state,
        isUploading: !state.isUploading,
      };
    default:
      return state;
  }
};

export default uploadImageSlideReducer;
