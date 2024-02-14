/* eslint-disable react/prop-types */
import { Fragment, useContext, useEffect, useCallback } from "react";
import { getAllCategory, deleteCategory } from "../../../utils/api";
import { CategoryContext } from "./index";
import moment from "moment";

const apiURL = "http://localhost:3000/api";

const AllCategory = () => {
  const { data, dispatch } = useContext(CategoryContext);
  const { categories, loading } = data;

  const fetchData = useCallback(async () => {
    dispatch({ type: "loading", payload: true });
    try {
      const responseData = await getAllCategory();
      if (responseData && responseData.Categories) {
        dispatch({
          type: "fetchCategoryAndChangeState",
          payload: responseData.Categories,
        });
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    } finally {
      dispatch({ type: "loading", payload: false });
    }
  }, [dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const deleteCategoryReq = async (categoryId) => {
    try {
      const deleteResult = await deleteCategory(categoryId);
      if (deleteResult.success) {
        console.log(deleteResult.success);
        fetchData();
      } else if (deleteResult.error) {
        console.error(deleteResult.error);
      }
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  const editCategory = (categoryId, type, description, status) => {
    if (type) {
      dispatch({
        type: "editCategoryModalOpen",
        cId: categoryId,
        des: description,
        status: status,
      });
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <svg
          className="w-12 h-12 animate-spin text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          ></path>
        </svg>
      </div>
    );
  }

  return (
    <Fragment>
      <div className="col-span-1 overflow-auto bg-white shadow-lg p-4">
        <table className="table-auto border w-full my-2">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Category</th>
              <th className="px-4 py-2 border">Description</th>
              <th className="px-4 py-2 border">Image</th>
              <th className="px-4 py-2 border">Status</th>
              <th className="px-4 py-2 border">Created at</th>
              <th className="px-4 py-2 border">Updated at</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories && categories.length > 0 ? (
              categories.map((category, index) => (
                <CategoryTable
                  key={index}
                  category={category}
                  deleteCategory={deleteCategoryReq}
                  editCategory={editCategory}
                />
              ))
            ) : (
              <tr>
                <td
                  colSpan="7"
                  className="text-xl text-center font-semibold py-8"
                >
                  No category found
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="text-sm text-gray-600 mt-2">
          Total {categories && categories.length} categories found
        </div>
      </div>
    </Fragment>
  );
};

const CategoryTable = ({ category, deleteCategory, editCategory }) => {
  const { _id, cName, cDescription, cImage, cStatus, createdAt, updatedAt } = category;

  return (
    <tr>
      <td className="p-2 text-left">
        {cName.length > 20 ? `${cName.slice(0, 20)}...` : cName}
      </td>
      <td className="p-2 text-left">
        {cDescription.length > 30 ? `${cDescription.slice(0, 30)}...` : cDescription}
      </td>
      <td className="p-2 text-center">
        <img
          className="w-12 h-12 object-cover object-center"
          src={`${apiURL}/uploads/categories/${cImage}`}
          alt=""
        />
      </td>
      <td className="p-2 text-center">
        <span className={`bg-${cStatus === "Active" ? "green" : "red"}-200 rounded-full text-center text-xs px-2 font-semibold`}>
          {cStatus}
        </span>
      </td>
      <td className="p-2 text-center">{moment(createdAt).format("lll")}</td>
      <td className="p-2 text-center">{moment(updatedAt).format("lll")}</td>
      <td className="p-2 flex items-center justify-center">
        <span onClick={() => editCategory(_id, true, cDescription, cStatus)} className="cursor-pointer hover:bg-gray-200 rounded-lg p-2 mx-1">
          <svg className="w-6 h-6 fill-current text-green-500" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
            <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
          </svg>
        </span>
        <span onClick={() => deleteCategory(_id)} className="cursor-pointer hover:bg-gray-200 rounded-lg p-2 mx-1">
          <svg className="w-6 h-6 fill-current text-red-500" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        </span>
      </td>
    </tr>
  );
};

export default AllCategory;
