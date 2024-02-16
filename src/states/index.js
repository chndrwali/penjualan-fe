import { configureStore } from "@reduxjs/toolkit";
import authUserReducer from "./authUser/reducer";
import isPreloadReducer from "./isPreload/reducer";
import dashboardReducer from "./dashboardAdmin/reducer";
import braintreeReducer from "./brainTree/reducer";

const store = configureStore({
    reducer: {
        auth: authUserReducer,
        isPreload: isPreloadReducer,
        braintree: braintreeReducer,
        dashboardData: dashboardReducer,
    },
});

export default store;