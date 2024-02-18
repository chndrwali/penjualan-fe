import { ActionTypes } from './action';

const initialState = {
  categories: [],
  loading: false,
  error: null,
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_ALL_CATEGORIES_REQUEST:
    case ActionTypes.ADD_CATEGORY_REQUEST:
    case ActionTypes.EDIT_CATEGORY_REQUEST:
    case ActionTypes.DELETE_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ActionTypes.GET_ALL_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload,
        loading: false,
        error: null,
      };
    case ActionTypes.ADD_CATEGORY_SUCCESS:
    case ActionTypes.EDIT_CATEGORY_SUCCESS:
    case ActionTypes.DELETE_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case ActionTypes.GET_ALL_CATEGORIES_FAILURE:
    case ActionTypes.ADD_CATEGORY_FAILURE:
    case ActionTypes.EDIT_CATEGORY_FAILURE:
    case ActionTypes.DELETE_CATEGORY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default categoryReducer;
