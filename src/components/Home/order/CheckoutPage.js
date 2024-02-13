/* eslint-disable no-unused-vars */
import { Fragment } from "react";
import Layout from "../layout/layout";
import { CheckoutComponent } from "./CheckoutProducts";

const CheckoutPage = (props) => {
  return (
    <Fragment>
      <Layout>
        <CheckoutComponent />
      </Layout>
    </Fragment>
  );
};

export default CheckoutPage;
