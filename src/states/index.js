import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authUser/reducer";
import braintreeReducer from "./brainTree/reducer";

const store = configureStore({
    reducer: {
        auth: authReducer,
        braintree: braintreeReducer
    }
})

export default store;