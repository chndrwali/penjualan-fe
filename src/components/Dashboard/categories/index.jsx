/* eslint-disable no-unused-vars */
import { Fragment, createContext, useReducer } from "react";
import Layout from "../Layout";
import CategoryMenu from "./CategoryMenu";
import AllCategories from "./AllCategories";
import { categoryState, categoryReducer } from "./CategoryContext";

/* This context manage all of the caregories component's data */
export const CategoryContext = createContext();

const CategoryComponent = () => {
  return (
    <div className="grid grid-cols-1 space-y-4 p-4">
      <CategoryMenu />
      <AllCategories />
    </div>
  );
};

const Categories = (props) => {
  const [data, dispatch] = useReducer(categoryReducer, categoryState);
  return (
    <Fragment>
      <CategoryContext.Provider value={{ data, dispatch }}>
        <Layout>
            <CategoryComponent />
        </Layout>
      </CategoryContext.Provider>
    </Fragment>
  );
};

export default Categories;