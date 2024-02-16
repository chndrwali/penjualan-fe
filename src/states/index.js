import { configureStore } from "@reduxjs/toolkit";
import authUserReducer from "./authUser/reducer";
import braintreeReducer from "./brainTree/reducer";

const store = configureStore({
    reducer: {
        auth: authUserReducer,
        braintree: braintreeReducer
    }
})

export default store;