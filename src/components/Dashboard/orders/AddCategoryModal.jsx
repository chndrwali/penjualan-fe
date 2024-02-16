import { Fragment, useContext, useState } from "react";
import { CategoryContext } from "./index";
import CATEGORIES_API from "../../../api/categories-api";

const AddCategoryModal = () => {
  const { data, dispatch } = useContext(CategoryContext);
  const [fData, setFdata] = useState({
    cName: "",
    cDescription: "",
    cImage: "",
    cStatus: "Active",
    success: false,
    error: false,
  });

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

  const submitForm = async (e) => {
    e.preventDefault();
    dispatch({ type: "loading", payload: true });
    setFdata({ ...fData, error: false });

    if (!fData.cImage) {
      setFdata({ ...fData, error: "Please upload a category image" });
      dispatch({ type: "loading", payload: false });
      return;
    }

    try {
      let responseData = await CATEGORIES_API.addCategory(fData);
      if (responseData.success) {
        fetchData();
        setFdata({
          ...fData,
          cName: "",
          cDescription: "",
          cImage: "",
          cStatus: "Active",
          success: responseData.success,
          error: false,
        });
      } else if (responseData.error) {
        setFdata({ ...fData, success: false, error: responseData.error });
      }
    } catch (error) {
      console.error("Error creating category:", error);
    } finally {
      dispatch({ type: "loading", payload: false });
      setTimeout(() => {
        setFdata({ ...fData, error: false, success: false });
      }, 2000);
    }
  };

  const alert = (msg, type) => (
    <div className={`bg-${type}-200 py-2 px-4 w-full`}>{msg}</div>
  );

  return (
    <Fragment>
      <div
        onClick={() => dispatch({ type: "addCategoryModal", payload: false })}
        className={`${data.addCategoryModal ? "" : "hidden"} fixed top-0 left-0 z-30 w-full h-full bg-black opacity-50`}
      />
      <div
        className={`${data.addCategoryModal ? "" : "hidden"} fixed inset-0 m-4  flex items-center z-30 justify-center`}
      >
        <div className="relative bg-white w-12/12 md:w-3/6 shadow-lg flex flex-col items-center space-y-4  overflow-y-auto px-4 py-4 md:px-8">
          <div className="flex items-center justify-between w-full pt-4">
            <span className="text-left font-semibold text-2xl tracking-wider">
              Add Category
            </span>
            <span
              style={{ background: "#303031" }}
              onClick={() =>
                dispatch({ type: "addCategoryModal", payload: false })
              }
              className="cursor-pointer text-gray-100 py-2 px-2 rounded-full"
              aria-label="Close Modal"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
          </div>
          {fData.error && alert(fData.error, "red")}
          {fData.success && alert(fData.success, "green")}
          <form className="w-full" onSubmit={(e) => submitForm(e)}>
            {/* Form fields */}
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default AddCategoryModal;
