import CUSTOMIZE_API from "../../api/customize-api";

 export const DashboardActionTypes = {
    FETCH_DASHBOARD_DATA_START: 'FETCH_DASHBOARD_DATA_START',
    FETCH_DASHBOARD_DATA_SUCCESS: 'FETCH_DASHBOARD_DATA_SUCCESS',
    FETCH_DASHBOARD_DATA_FAILURE: 'FETCH_DASHBOARD_DATA_FAILURE',
  };

  export const fetchDashboardDataStart = () => ({
    type: DashboardActionTypes.FETCH_DASHBOARD_DATA_START,
  });
  
  export const fetchDashboardDataSuccess = (dashboardData) => ({
    type: DashboardActionTypes.FETCH_DASHBOARD_DATA_SUCCESS,
    payload: dashboardData,
  });
  
  export const fetchDashboardDataFailure = (errorMessage) => ({
    type: DashboardActionTypes.FETCH_DASHBOARD_DATA_FAILURE,
    payload: errorMessage,
  });
  
  export const asyncFetchDashboardData = () => {
    return async (dispatch) => {
      dispatch(fetchDashboardDataStart());
      try {
        const dashboardData = await CUSTOMIZE_API.getDashboardData();
        dispatch(fetchDashboardDataSuccess(dashboardData));
      } catch (error) {
        dispatch(fetchDashboardDataFailure(error.message));
      }
    };
  };
