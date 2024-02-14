import { createContext, useReducer } from "react";
import Layout from "../Layout";
import CategoryMenu from "./CategoryMenu";
import AllCategories from "./AllCategories";
import { categoryState, categoryReducer } from "./CategoryContext";

export const CategoryContext = createContext();

const CategoryComponent = () => (
  <div className="grid grid-cols-1 space-y-4 p-4">
    <CategoryMenu />
    <AllCategories />
  </div>
);

const Categories = () => {
  const [data, dispatch] = useReducer(categoryReducer, categoryState);

  return (
    <CategoryContext.Provider value={{ data, dispatch }}>
      <Layout>
        <CategoryComponent />
      </Layout>
    </CategoryContext.Provider>
  );
};

export default Categories;
