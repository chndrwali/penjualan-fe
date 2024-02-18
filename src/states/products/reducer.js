import { ActionTypes } from './action';

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_ALL_PRODUCTS_REQUEST:
    case ActionTypes.ADD_PRODUCT_REQUEST:
    case ActionTypes.DELETE_PRODUCT_REQUEST:
    case ActionTypes.EDIT_PRODUCT_REQUEST:
    case ActionTypes.GET_PRODUCT_BY_CATEGORY_REQUEST:
    case ActionTypes.GET_PRODUCT_BY_PRICE_REQUEST:
    case ActionTypes.ADD_REVIEW_REQUEST:
    case ActionTypes.DELETE_REVIEW_REQUEST:
    case ActionTypes.GET_WISH_PRODUCT_REQUEST:
    case ActionTypes.GET_CART_REQUEST:
    case ActionTypes.REMOVE_FROM_CART_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ActionTypes.GET_ALL_PRODUCTS_SUCCESS:
    case ActionTypes.ADD_PRODUCT_SUCCESS:
    case ActionTypes.DELETE_PRODUCT_SUCCESS:
    case ActionTypes.EDIT_PRODUCT_SUCCESS:
    case ActionTypes.GET_PRODUCT_BY_CATEGORY_SUCCESS:
    case ActionTypes.GET_PRODUCT_BY_PRICE_SUCCESS:
    case ActionTypes.ADD_REVIEW_SUCCESS:
    case ActionTypes.DELETE_REVIEW_SUCCESS:
    case ActionTypes.GET_WISH_PRODUCT_SUCCESS:
    case ActionTypes.GET_CART_SUCCESS:
    case ActionTypes.REMOVE_FROM_CART_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false,
        error: null,
      };
    case ActionTypes.GET_ALL_PRODUCTS_FAILURE:
    case ActionTypes.ADD_PRODUCT_FAILURE:
    case ActionTypes.DELETE_PRODUCT_FAILURE:
    case ActionTypes.EDIT_PRODUCT_FAILURE:
    case ActionTypes.GET_PRODUCT_BY_CATEGORY_FAILURE:
    case ActionTypes.GET_PRODUCT_BY_PRICE_FAILURE:
    case ActionTypes.ADD_REVIEW_FAILURE:
    case ActionTypes.DELETE_REVIEW_FAILURE:
    case ActionTypes.GET_WISH_PRODUCT_FAILURE:
    case ActionTypes.GET_CART_FAILURE:
    case ActionTypes.REMOVE_FROM_CART_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
