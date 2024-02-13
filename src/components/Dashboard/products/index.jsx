/* eslint-disable no-unused-vars */
import { Fragment, createContext, useReducer } from "react";
import ProductMenu from "./ProductMenu";
import ProductTable from "./ProductTable";
import { productState, productReducer } from "./ProductContext";
import Layout from "../Layout";

/* This context manage all of the products component's data */
export const ProductContext = createContext();

const ProductComponent = () => {
  return (
    <div className="grid grid-cols-1 space-y-4 p-4">
      <ProductMenu />
      <ProductTable />
    </div>
  );
};

const Products = (props) => {
  /* To use useReducer make sure that reducer is the first arg */
  const [data, dispatch] = useReducer(productReducer, productState);

  return (
    <Fragment>
      <ProductContext.Provider value={{ data, dispatch }}>
        <Layout>
            <ProductComponent />
        </Layout>
      </ProductContext.Provider>
    </Fragment>
  );
};

export default Products;