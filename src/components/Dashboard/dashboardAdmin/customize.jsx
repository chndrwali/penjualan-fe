import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncUploadImage, toggleUploadSliderBtn } from "../../../states/uploadSlideImage/action";

const Customize = () => {
  const dispatch = useDispatch();
  const uploadSliderBtn = useSelector(state => state.uploadImageSlide.isUploading);

  const toggleUploadSliderBtnHandler = () => { // Ubah nama fungsi ini untuk menghindari konflik dengan nama variabel
    dispatch(toggleUploadSliderBtn()); // Gunakan action yang baru dibuat
  };

  useEffect(() => {
    // Fetch slider images here if needed
  }, [dispatch]);

  const uploadImageHandler = (Image) => {
    const formData = new FormData();
    formData.append('slideImage', Image);
    dispatch(asyncUploadImage(formData));
  };

  return (
    <Fragment>
      <div className="m-4 md:w-1/2">
        {!uploadSliderBtn ? (
          <div
            onClick={toggleUploadSliderBtnHandler}
            style={{ background: "#303031" }}
            className="cursor-pointer rounded-full p-2 flex items-center justify-center text-gray-100 text-sm font-semibold uppercase"
          >
            <svg
              className="w-6 h-6 text-gray-100 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                clipRule="evenodd"
              />
            </svg>
            Customize Slider Image
          </div>
        ) : null}
      </div>
      {uploadSliderBtn ? <UploadImageSection uploadImageHandler={uploadImageHandler} /> : null}
    </Fragment>
  );
};

const UploadImageSection = ({ uploadImageHandler }) => {
  return (
    <Fragment>
      <div className="relative m-4 bg-white p-4 shadow-lg">
        <h1 className="border-b-2 border-yellow-700 mb-4 pb-2 text-2xl font-semibold">
          Shop Slider Images
        </h1>
        <div className="relative flex flex-col space-y-2">
          <div
            style={{ background: "#303031" }}
            className="relative z-0 px-4 py-2 rounded text-white flex justify-center space-x-2 md:w-4/12"
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
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>{" "}
            <span>Upload File</span>
          </div>
          <input
            onChange={(e) => uploadImageHandler(e.target.files[0])}
            name="image"
            accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*"
            className="absolute z-10 opacity-0 bg-gray-100"
            type="file"
            id="image"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Customize;
