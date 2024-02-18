import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authUser/reducer';
import isPreloadReducer from './isPreload/reducer';
import userReducer from './Users/reducer';
import productReducer from './products/reducer';
import categoryReducer from './categories/reducer';
import customizeReducer from './customize/reducer';
import braintreeReducer from './brainTree/reducer';
import ordersReducer from './ordersStates/reducer';
import registerReducer from './registerUser/reducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    isPreload: isPreloadReducer,
    user: userReducer,
    product: productReducer,
    category: categoryReducer,
    braintree: braintreeReducer,
    customize: customizeReducer,
    orders: ordersReducer,
    register: registerReducer
  },
});

export default store;
