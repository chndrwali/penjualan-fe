import { configureStore } from "@reduxjs/toolkit";
import authUserReducer from "./authUser/reducer";
import isPreloadReducer from "./isPreload/reducer";
import braintreeReducer from "./brainTree/reducer";

const store = configureStore({
    reducer: {
        auth: authUserReducer,
        isPreload: isPreloadReducer,
        braintree: braintreeReducer,
    },
});

export default store;