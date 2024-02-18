import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { deleteImage } from "../../../states/customize/action";

const DeleteImageSection = () => {
  const dispatch = useDispatch();
  const isDeleting = useSelector((state) => state.customize.isDeleting);

  const handleDeleteImage = (id) => {
    // dispatch(deleteImage(id));
  };

  return (
    <Fragment>
      <div className="relative m-4 bg-white p-4 shadow-lg">
        <h1 className="border-b-2 border-yellow-700 mb-4 pb-2 text-2xl font-semibold">
          Delete Slider Images
        </h1>
        <div className="relative flex flex-col space-y-2">
          {/* Here you can map through your images and display delete buttons */}
          {/* For demonstration purposes, I'm providing a static delete button */}
          <div className="relative z-0 px-4 py-2 rounded text-white flex justify-center space-x-2 md:w-4/12 bg-red-500">
            <button
              onClick={() => handleDeleteImage(1)} // Pass the image id here
              className="cursor-pointer text-white font-semibold"
              disabled={isDeleting} // Disable the button during deletion process
            >
              {isDeleting ? "Deleting..." : "Delete Image"}
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DeleteImageSection;
