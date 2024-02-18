import { ActionTypes } from './action';

const initialState = {
  slideImages: [],
  loading: false,
  error: null,
  message: null,
  dashboardData: null,
};

const customizeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_SLIDE_IMAGE_REQUEST:
    case ActionTypes.DELETE_SLIDE_IMAGE_REQUEST:
    case ActionTypes.UPLOAD_SLIDE_IMAGE_REQUEST:
    case ActionTypes.GET_DASHBOARD_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case ActionTypes.GET_SLIDE_IMAGE_SUCCESS:
      return {
        ...state,
        slideImages: action.payload,
        loading: false,
      };

    case ActionTypes.DELETE_SLIDE_IMAGE_SUCCESS:
    case ActionTypes.UPLOAD_SLIDE_IMAGE_SUCCESS:
      return {
        ...state,
        message: action.payload,
        loading: false,
      };

    case ActionTypes.GET_DASHBOARD_DATA_SUCCESS:
      return {
        ...state,
        dashboardData: action.payload,
        loading: false,
      };

    case ActionTypes.GET_SLIDE_IMAGE_FAILURE:
    case ActionTypes.DELETE_SLIDE_IMAGE_FAILURE:
    case ActionTypes.UPLOAD_SLIDE_IMAGE_FAILURE:
    case ActionTypes.GET_DASHBOARD_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default customizeReducer;
