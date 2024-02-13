import { Fragment, createContext, useReducer } from "react";
import Layout from "../Layout";
import DashboardCard from "./dashboarCard";
import Customize from "./customize";
import TodaySell from "./todaySell";
import { dashboardState, dashboardReducer } from "./dashboardContext";

export const DashboardContext = createContext();

const DashboardComponent = () => {
  return (
    <Fragment>
      <DashboardCard />
      <Customize />
      <TodaySell />
    </Fragment>
  );
};

const DashboardAdmin = () => {
  const [data, dispatch] = useReducer(dashboardReducer, dashboardState);
  return (
    <Fragment>
      <DashboardContext.Provider value={{ data, dispatch }}>
        <Layout>
          <DashboardComponent />
        </Layout>
      </DashboardContext.Provider>
    </Fragment>
  );
};

export default DashboardAdmin;
