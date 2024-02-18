import { Fragment } from "react";
import DashboardCard from "./dashboarCard";
import Customize from "./customize";
import SellTable from "./SellTable";


const DashboardComponent = () => {
  return (
    <Fragment>
      <DashboardCard />
      <Customize />
      <SellTable />
    </Fragment>
  );
};

export default DashboardComponent;
