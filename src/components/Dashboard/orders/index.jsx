/* eslint-disable no-unused-vars */
import { Fragment, createContext, useReducer } from "react";
import OrderMenu from "./OrderMenu";
import AllOrders from "./AllOrder";
import { orderState, orderReducer } from "./OrderContext";
import Layout from "../Layout";

/* This context manage all of the orders component's data */
export const OrderContext = createContext();

const OrderComponent = () => {
  return (
    <div className="grid grid-cols-1 space-y-4 p-4">
      <OrderMenu />
      <AllOrders />
    </div>
  );
};

const Orders = (props) => {
  const [data, dispatch] = useReducer(orderReducer, orderState);
  return (
    <Fragment>
      <OrderContext.Provider value={{ data, dispatch }}>
        <Layout>
            <OrderComponent />
        </Layout>
      </OrderContext.Provider>
    </Fragment>
  );
};

export default Orders;