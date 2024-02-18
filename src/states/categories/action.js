import CATEGORIES_API from '../../api/categories-api';

export const ActionTypes = {
    GET_ALL_CATEGORIES_REQUEST: 'GET_ALL_CATEGORIES_REQUEST',
    GET_ALL_CATEGORIES_SUCCESS: 'GET_ALL_CATEGORIES_SUCCESS',
    GET_ALL_CATEGORIES_FAILURE: 'GET_ALL_CATEGORIES_FAILURE',
    ADD_CATEGORY_REQUEST: 'ADD_CATEGORY_REQUEST',
    ADD_CATEGORY_SUCCESS: 'ADD_CATEGORY_SUCCESS',
    ADD_CATEGORY_FAILURE: 'ADD_CATEGORY_FAILURE',
    EDIT_CATEGORY_REQUEST: 'EDIT_CATEGORY_REQUEST',
    EDIT_CATEGORY_SUCCESS: 'EDIT_CATEGORY_SUCCESS',
    EDIT_CATEGORY_FAILURE: 'EDIT_CATEGORY_FAILURE',
    DELETE_CATEGORY_REQUEST: 'DELETE_CATEGORY_REQUEST',
    DELETE_CATEGORY_SUCCESS: 'DELETE_CATEGORY_SUCCESS',
    DELETE_CATEGORY_FAILURE: 'DELETE_CATEGORY_FAILURE',
}

export const getAllCategoriesRequest = () => ({
  type: ActionTypes.GET_ALL_CATEGORIES_REQUEST,
});

export const getAllCategoriesSuccess = (categories) => ({
  type: ActionTypes.GET_ALL_CATEGORIES_SUCCESS,
  payload: categories,
});

export const getAllCategoriesFailure = (error) => ({
  type: ActionTypes.GET_ALL_CATEGORIES_FAILURE,
  payload: error,
});

export const addCategoryRequest = () => ({
  type: ActionTypes.ADD_CATEGORY_REQUEST,
});

export const addCategorySuccess = (message) => ({
  type: ActionTypes.ADD_CATEGORY_SUCCESS,
  payload: message,
});

export const addCategoryFailure = (error) => ({
  type: ActionTypes.ADD_CATEGORY_FAILURE,
  payload: error,
});

export const editCategoryRequest = () => ({
  type: ActionTypes.EDIT_CATEGORY_REQUEST,
});

export const editCategorySuccess = (message) => ({
  type: ActionTypes.EDIT_CATEGORY_SUCCESS,
  payload: message,
});

export const editCategoryFailure = (error) => ({
  type: ActionTypes.EDIT_CATEGORY_FAILURE,
  payload: error,
});

export const deleteCategoryRequest = () => ({
  type: ActionTypes.DELETE_CATEGORY_REQUEST,
});

export const deleteCategorySuccess = (message) => ({
  type: ActionTypes.DELETE_CATEGORY_SUCCESS,
  payload: message,
});

export const deleteCategoryFailure = (error) => ({
  type: ActionTypes.DELETE_CATEGORY_FAILURE,
  payload: error,
});

export const getAllCategories = () => {
  return async (dispatch) => {
    dispatch(getAllCategoriesRequest());
    try {
      const categories = await CATEGORIES_API.getAllCategories();
      dispatch(getAllCategoriesSuccess(categories));
    } catch (error) {
      dispatch(getAllCategoriesFailure(error.message));
    }
  };
};

export const addCategory = (categoryData) => {
  return async (dispatch) => {
    dispatch(addCategoryRequest());
    try {
      const response = await CATEGORIES_API.addCategory(categoryData);
      dispatch(addCategorySuccess(response.success));
    } catch (error) {
      dispatch(addCategoryFailure(error.message));
    }
  };
};

export const editCategory = (categoryId, categoryData) => {
  return async (dispatch) => {
    dispatch(editCategoryRequest());
    try {
      const response = await CATEGORIES_API.editCategory(categoryId, categoryData);
      dispatch(editCategorySuccess(response.success));
    } catch (error) {
      dispatch(editCategoryFailure(error.message));
    }
  };
};

export const deleteCategory = (categoryId) => {
  return async (dispatch) => {
    dispatch(deleteCategoryRequest());
    try {
      const response = await CATEGORIES_API.deleteCategory(categoryId);
      dispatch(deleteCategorySuccess(response.success));
    } catch (error) {
      dispatch(deleteCategoryFailure(error.message));
    }
  };
};
