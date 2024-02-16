/* eslint-disable no-unused-vars */
import { Fragment, useContext, useState, useEffect } from "react";
import { CategoryContext } from "./index";
import CATEGORIES_API from "../../../api/categories-api";

const EditCategoryModal = () => {
  const { data, dispatch } = useContext(CategoryContext);

  const [des, setDes] = useState("");
  const [status, setStatus] = useState("");
  const [cId, setCid] = useState("");

  useEffect(() => {
    const { modal, des, status, cId } = data.editCategoryModal;
    setDes(des);
    setStatus(status);
    setCid(cId);
  }, [data.editCategoryModal]);

  const fetchData = async () => {
    try {
      const responseData = await CATEGORIES_API.getAllCategories();
      if (responseData.Categories) {
        dispatch({
          type: "fetchCategoryAndChangeState",
          payload: responseData.Categories,
        });
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const submitForm = async () => {
    dispatch({ type: "loading", payload: true });
    try {
      const edit = await CATEGORIES_API.editCategory(cId, des, status);
      if (edit.success) {
        console.log(edit.success);
        dispatch({ type: "editCategoryModalClose" });
        setTimeout(() => {
          fetchData();
          dispatch({ type: "loading", payload: false });
        }, 1000);
      } else if (edit.error) {
        console.error(edit.error);
        dispatch({ type: "loading", payload: false });
      }
    } catch (error) {
      console.error("Error editing category:", error);
      dispatch({ type: "loading", payload: false });
    }
  };

  return (
    <Fragment>
      {data.editCategoryModal.modal && (
        <div className="fixed top-0 left-0 z-30 w-full h-full bg-black opacity-50" onClick={() => dispatch({ type: "editCategoryModalClose" })}></div>
      )}
      {data.editCategoryModal.modal && (
        <div className="fixed inset-0 m-4 flex items-center z-30 justify-center">
          <div className="relative bg-white w-11/12 md:w-3/6 shadow-lg flex flex-col items-center space-y-4 overflow-y-auto px-4 py-4 md:px-8">
            <div className="flex items-center justify-between w-full pt-4">
              <span className="text-left font-semibold text-2xl tracking-wider">
                Edit Category
              </span>
              <span className="cursor-pointer text-gray-100 py-2 px-2 rounded-full bg-gray-800" onClick={() => dispatch({ type: "editCategoryModalClose" })}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </span>
            </div>
            <div className="flex flex-col space-y-1 w-full">
              <label htmlFor="description">Category Description</label>
              <textarea
                value={des}
                onChange={(e) => setDes(e.target.value)}
                className="px-4 py-2 border focus:outline-none"
                name="description"
                id="description"
                cols={5}
                rows={5}
              />
            </div>
            <div className="flex flex-col space-y-1 w-full">
              <label htmlFor="status">Category Status</label>
              <select
                value={status}
                name="status"
                onChange={(e) => setStatus(e.target.value)}
                className="px-4 py-2 border focus:outline-none"
                id="status"
              >
                <option value="Active">Active</option>
                <option value="Disabled">Disabled</option>
              </select>
            </div>
            <div className="flex flex-col space-y-1 w-full pb-4 md:pb-6">
              <button
                onClick={submitForm}
                className="rounded-full bg-gray-800 text-gray-100 text-lg font-medium py-2"
              >
                Update Category
              </button>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default EditCategoryModal;
