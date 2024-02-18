import PRODUCT_API from '../../api/product-api';

export const ActionTypes = {
  GET_ALL_PRODUCTS_REQUEST: 'GET_ALL_PRODUCTS_REQUEST',
  GET_ALL_PRODUCTS_SUCCESS: 'GET_ALL_PRODUCTS_SUCCESS',
  GET_ALL_PRODUCTS_FAILURE: 'GET_ALL_PRODUCTS_FAILURE',
  GET_WISH_PRODUCT_REQUEST: 'GET_WISH_PRODUCT_REQUEST',
  GET_WISH_PRODUCT_SUCCESS: 'GET_WISH_PRODUCT_SUCCESS',
  GET_WISH_PRODUCT_FAILURE: 'GET_WISH_PRODUCT_FAILURE',
  GET_PRODUCT_BY_PRICE_REQUEST: 'GET_PRODUCT_BY_PRICE_REQUEST',
  GET_PRODUCT_BY_PRICE_SUCCESS: 'GET_PRODUCT_BY_PRICE_SUCCESS',
  GET_PRODUCT_BY_PRICE_FAILURE: 'GET_PRODUCT_BY_PRICE_FAILURE',
  GET_PRODUCT_BY_CATEGORY_REQUEST: 'GET_PRODUCT_BY_CATEGORY_REQUEST',
  GET_PRODUCT_BY_CATEGORY_SUCCESS: 'GET_PRODUCT_BY_CATEGORY_SUCCESS',
  GET_PRODUCT_BY_CATEGORY_FAILURE: 'GET_PRODUCT_BY_CATEGORY_FAILURE',
  GET_CART_PRODUCT_REQUEST: 'GET_CART_PRODUCT_REQUEST',
  GET_CART_PRODUCT_SUCCESS: 'GET_CART_PRODUCT_SUCCESS',
  GET_CART_PRODUCT_FAILURE: 'GET_CART_PRODUCT_FAILURE',
  ADD_PRODUCT_REQUEST: 'ADD_PRODUCT_REQUEST',
  ADD_PRODUCT_SUCCESS: 'ADD_PRODUCT_SUCCESS',
  ADD_PRODUCT_FAILURE: 'ADD_PRODUCT_FAILURE',
  EDIT_PRODUCT_REQUEST: 'EDIT_PRODUCT_REQUEST',
  EDIT_PRODUCT_SUCCESS: 'EDIT_PRODUCT_SUCCESS',
  EDIT_PRODUCT_FAILURE: 'EDIT_PRODUCT_FAILURE',
  DELETE_PRODUCT_REQUEST: 'DELETE_PRODUCT_REQUEST',
  DELETE_PRODUCT_SUCCESS: 'DELETE_PRODUCT_SUCCESS',
  DELETE_PRODUCT_FAILURE: 'DELETE_PRODUCT_FAILURE',
  GET_SINGLE_PRODUCT_REQUEST: 'GET_SINGLE_PRODUCT_REQUEST',
  GET_SINGLE_PRODUCT_SUCCESS: 'GET_SINGLE_PRODUCT_SUCCESS',
  GET_SINGLE_PRODUCT_FAILURE: 'GET_SINGLE_PRODUCT_FAILURE',
  ADD_REVIEW_REQUEST: 'ADD_REVIEW_REQUEST',
  ADD_REVIEW_SUCCESS: 'ADD_REVIEW_SUCCESS',
  ADD_REVIEW_FAILURE: 'ADD_REVIEW_FAILURE',
  DELETE_REVIEW_REQUEST: 'DELETE_REVIEW_REQUEST',
  DELETE_REVIEW_SUCCESS: 'DELETE_REVIEW_SUCCESS',
  DELETE_REVIEW_FAILURE: 'DELETE_REVIEW_FAILURE',
  REMOVE_FROM_CART_REQUEST: 'REMOVE_FROM_CART_REQUEST',
  REMOVE_FROM_CART_SUCCESS: 'REMOVE_FROM_CART_SUCCESS',
  REMOVE_FROM_CART_FAILURE: 'REMOVE_FROM_CART_FAILURE',
};

export const getAllProductsRequest = () => ({
    type: ActionTypes.GET_ALL_PRODUCTS_REQUEST,
  });
  
  export const getAllProductsSuccess = (products) => ({
    type: ActionTypes.GET_ALL_PRODUCTS_SUCCESS,
    payload: products,
  });
  
  export const getAllProductsFailure = (error) => ({
    type: ActionTypes.GET_ALL_PRODUCTS_FAILURE,
    payload: error,
  });

  export const getProductByCategoryRequest = () => ({
    type: ActionTypes.GET_PRODUCT_BY_CATEGORY_REQUEST
  });

  export const getProductByCategorySuccess = (catId) => ({
    type: ActionTypes.GET_PRODUCT_BY_CATEGORY_SUCCESS,
    payload: catId,
  });

  export const getProductByCategoryFailure = (error) => ({
    type: ActionTypes.GET_PRODUCT_BY_CATEGORY_FAILURE,
    payload: error,
  });

  export const getProductByPriceRequest = () => ({
    type: ActionTypes.GET_PRODUCT_BY_PRICE_REQUEST
  });

  export const getProductByPriceSuccess = (pPrice) => ({
    type: ActionTypes.GET_PRODUCT_BY_PRICE_SUCCESS,
    payload: pPrice,
  });

  export const getProductByPriceFailure = (error) => ({
    type: ActionTypes.GET_PRODUCT_BY_PRICE_FAILURE,
    payload: error
  });

  export const getWishProductRequest = () => ({
    type: ActionTypes.GET_WISH_PRODUCT_REQUEST,
  });
  
  export const getWishProductSuccess = (products) => ({
    type: ActionTypes.GET_WISH_PRODUCT_SUCCESS,
    payload: products,
  });
  
  export const getWishProductFailure = (error) => ({
    type: ActionTypes.GET_WISH_PRODUCT_FAILURE,
    payload: error,
  });

  export const addToCartRequest = () => ({
    type: ActionTypes.GET_CART_REQUEST,
  });
  
  export const addToCartSuccess = (product) => ({
    type: ActionTypes.GET_CART_SUCCESS,
    payload: product,
  });
  
  export const addToCartFailure = (error) => ({
    type: ActionTypes.GET_CART_FAILURE,
    payload: error,
  });
  
  export const removeFromCartRequest = () => ({
    type: ActionTypes.REMOVE_FROM_CART_REQUEST,
  });
  
  export const removeFromCartSuccess = (productId) => ({
    type: ActionTypes.REMOVE_FROM_CART_SUCCESS,
    payload: productId,
  });
  
  export const removeFromCartFailure = (error) => ({
    type: ActionTypes.REMOVE_FROM_CART_FAILURE,
    payload: error,
  });
  
  export const addReviewRequest = () => ({
    type: ActionTypes.ADD_REVIEW_REQUEST,
  });
  
  export const addReviewSuccess = (review) => ({
    type: ActionTypes.ADD_REVIEW_SUCCESS,
    payload: review,
  });
  
  export const addReviewFailure = (error) => ({
    type: ActionTypes.ADD_REVIEW_FAILURE,
    payload: error,
  });
  
  export const deleteReviewRequest = () => ({
    type: ActionTypes.DELETE_REVIEW_REQUEST,
  });
  
  export const deleteReviewSuccess = (reviewId) => ({
    type: ActionTypes.DELETE_REVIEW_SUCCESS,
    payload: reviewId,
  });
  
  export const deleteReviewFailure = (error) => ({
    type: ActionTypes.DELETE_REVIEW_FAILURE,
    payload: error,
  });

  export const postProductRequest = () => ({
    type: ActionTypes.ADD_PRODUCT_REQUEST,
  });
  
  export const postProductSuccess = (product) => ({
    type: ActionTypes.ADD_PRODUCT_SUCCESS,
    payload: product,
  });
  
  export const postProductFailure = (error) => ({
    type: ActionTypes.ADD_PRODUCT_FAILURE,
    payload: error,
  });
  
  export const deleteProductRequest = () => ({
    type: ActionTypes.DELETE_PRODUCT_REQUEST,
  });
  
  export const deleteProductSuccess = (productId) => ({
    type: ActionTypes.DELETE_PRODUCT_SUCCESS,
    payload: productId,
  });
  
  export const deleteProductFailure = (error) => ({
    type: ActionTypes.DELETE_PRODUCT_FAILURE,
    payload: error,
  });

  export const editProductRequest = () => ({
    type: ActionTypes.EDIT_PRODUCT_REQUEST,
  });
  
  export const editProductSuccess = (product) => ({
    type: ActionTypes.EDIT_PRODUCT_SUCCESS,
    payload: product,
  });

  export const editProductFailure = (error) => ({
    type: ActionTypes.EDIT_PRODUCT_FAILURE,
    payload: error,
  });

  export const getAllProducts = () => {
    return async (dispatch) => {
      dispatch(getAllProductsRequest());
      try {
        const response = await PRODUCT_API.getAllProduct();
        dispatch(getAllProductsSuccess(response.data.Products));
      } catch (error) {
        dispatch(getAllProductsFailure(error.message));
      }
    };
  };
  
  export const addProduct = (productData) => {
    return async (dispatch) => {
      dispatch(postProductRequest());
      try {
        const response = await PRODUCT_API.postProduct(productData);
        dispatch(postProductSuccess(response.data.success));
      } catch (error) {
        dispatch(postProductFailure(error.message));
      }
    };
  };
  
  export const deleteProduct = (productId) => {
    return async (dispatch) => {
      dispatch(deleteProductRequest());
      try {
        const response = await PRODUCT_API.deleteProduct(productId);
        dispatch(deleteProductSuccess(response.data.success));
      } catch (error) {
        dispatch(deleteProductFailure(error.message));
      }
    };
  };
  
  export const editProduct = (productId, updatedProductData) => {
    return async (dispatch) => {
      dispatch(editProductRequest());
      try {
        const response = await PRODUCT_API.editProduct(productId, updatedProductData);
        dispatch(editProductSuccess(response.data.success));
      } catch (error) {
        dispatch(editProductFailure(error.message));
      }
    };
  }; 

export const getProductByCategory = (catId) => {
    return async (dispatch) => {
      dispatch(getProductByCategoryRequest());
      try {
        const response = await PRODUCT_API.getProductByCategory(catId);
        dispatch(getProductByCategorySuccess(response.data.Products));
      } catch (error) {
        dispatch(getProductByCategoryFailure(error.message));
      }
    };
  };
  
  export const getProductByPrice = (price) => {
    return async (dispatch) => {
      dispatch(getProductByPriceRequest());
      try {
        const response = await PRODUCT_API.getProductByPrice(price);
        dispatch(getProductByPriceSuccess(response.data.Products));
      } catch (error) {
        dispatch(getProductByPriceFailure(error.message));
      }
    };
  };
  
  export const addReview = (reviewData) => {
    return async (dispatch) => {
      dispatch(addReviewRequest());
      try {
        const response = await PRODUCT_API.addReview(reviewData);
        dispatch(addReviewSuccess(response.data.success));
      } catch (error) {
        dispatch(addReviewFailure(error.message));
      }
    };
  };
  
  export const deleteReview = (reviewId, productId) => {
    return async (dispatch) => {
      dispatch(deleteReviewRequest());
      try {
        const response = await PRODUCT_API.deleteReview(reviewId, productId);
        dispatch(deleteReviewSuccess(response.data.success));
      } catch (error) {
        dispatch(deleteReviewFailure(error.message));
      }
    };
  };
  
  export const addToWishProduct = (productId) => {
    return async (dispatch) => {
      dispatch(getWishProductRequest());
      try {
        const response = await PRODUCT_API.getWishProduct(productId);
        dispatch(getWishProductSuccess(response.data.success));
      } catch (error) {
        dispatch(getWishProductFailure(error.message));
      }
    };
  };

  export const getCartProduct = () => {
    return async (dispatch) => {
      dispatch(addToCartRequest());
      try {
        const response = await PRODUCT_API.getCartProduct();
        dispatch(addToCartSuccess(response.data.Products));
      } catch (error) {
        dispatch(addToCartFailure(error.message));
      }
    };
  };