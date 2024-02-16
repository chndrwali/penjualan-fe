import { DashboardActionTypes } from "./action";

const INITIAL_STATE = {
  dashboardData: null,
  isFetching: false,
  errorMessage: undefined,
};

const dashboardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DashboardActionTypes.FETCH_DASHBOARD_DATA_START:
      return {
        ...state,
        isFetching: true,
      };
    case DashboardActionTypes.FETCH_DASHBOARD_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        dashboardData: action.payload,
        errorMessage: undefined,
      };
    case DashboardActionTypes.FETCH_DASHBOARD_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default dashboardReducer;
