import { Fragment, useContext, useState } from "react";
import { CategoryContext } from "./index";
import CATEGORIES_API from "../../../api/categories-api";

const AddCategoryModal = () => {
  const { data, dispatch } = useContext(CategoryContext);

  const [formData, setFormData] = useState({
    cName: "",
    cDescription: "",
    cImage: "",
    cStatus: "Active",
    success: false,
    error: false,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      success: false,
      error: false,
    });
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "loading", payload: true });

    if (!formData.cImage) {
      dispatch({ type: "loading", payload: false });
      return setFormData({ ...formData, error: "Please upload a category image" });
    }

    try {
      const responseData = await CATEGORIES_API.addCategory(formData);
      if (responseData.success) {
        fetchData();
        setFormData({
          ...formData,
          cName: "",
          cDescription: "",
          cImage: "",
          cStatus: "Active",
          success: responseData.success,
          error: false,
        });
      } else if (responseData.error) {
        setFormData({ ...formData, success: false, error: responseData.error });
      }
    } catch (error) {
      console.error("Error creating category:", error);
    } finally {
      dispatch({ type: "loading", payload: false });
      setTimeout(() => {
        setFormData({
          ...formData,
          success: false,
          error: false,
        });
      }, 2000);
    }
  };

  const closeModal = () => {
    dispatch({ type: "addCategoryModal", payload: false });
  };

  const alertMessage = (msg, type) => (
    <div className={`bg-${type}-200 py-2 px-4 w-full`}>{msg}</div>
  );

  return (
    <Fragment>
      {data.addCategoryModal && (
        <div className="fixed top-0 left-0 z-30 w-full h-full bg-black opacity-50" onClick={closeModal}></div>
      )}

      {data.addCategoryModal && (
        <div className="fixed inset-0 m-4 flex items-center z-30 justify-center">
          <div className="relative bg-white w-12/12 md:w-3/6 shadow-lg flex flex-col items-center space-y-4 overflow-y-auto px-4 py-4 md:px-8">
            <div className="flex items-center justify-between w-full pt-4">
              <span className="text-left font-semibold text-2xl tracking-wider">Add Category</span>
              <span style={{ background: "#303031" }} onClick={closeModal} className="cursor-pointer text-gray-100 py-2 px-2 rounded-full">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </span>
            </div>
            {formData.error && alertMessage(formData.error, "red")}
            {formData.success && alertMessage(formData.success, "green")}
            <form className="w-full" onSubmit={handleSubmit}>
              <div className="flex flex-col space-y-1 w-full py-4">
                <label htmlFor="cName">Category Name</label>
                <input onChange={handleChange} value={formData.cName} className="px-4 py-2 border focus:outline-none" type="text" name="cName" id="cName" />
              </div>
              <div className="flex flex-col space-y-1 w-full">
                <label htmlFor="cDescription">Category Description</label>
                <textarea onChange={handleChange} value={formData.cDescription} className="px-4 py-2 border focus:outline-none" name="cDescription" id="cDescription" cols={5} rows={5} />
              </div>
              <div className="flex flex-col space-y-1 w-full">
                <label htmlFor="cImage">Category Image</label>
                <input accept=".jpg, .jpeg, .png" onChange={handleChange} className="px-4 py-2 border focus:outline-none" type="file" name="cImage" id="cImage" />
              </div>
              <div className="flex flex-col space-y-1 w-full">
                <label htmlFor="cStatus">Category Status</label>
                <select name="cStatus" onChange={handleChange} className="px-4 py-2 border focus:outline-none" id="cStatus">
                  <option value="Active">Active</option>
                  <option value="Disabled">Disabled</option>
                </select>
              </div>
              <div className="flex flex-col space-y-1 w-full pb-4 md:pb-6 mt-4">
                <button style={{ background: "#303031" }} type="submit" className="bg-gray-800 text-gray-100 rounded-full text-lg font-medium py-2">
                  Create category
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default AddCategoryModal;
