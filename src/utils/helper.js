import { 
    isAuthenticate,
    isAdmin,
    loginReq,
    signupReq,
    getAccessToken,
    getUserById,
    updatePersonalInformationFetch,
    updatePassword,
    getOrderByUser,
    getAllOrder,
    createOrder,
    editCategory,
    deleteOrder,
    DashboardData,
    getSliderImages,
    postUploadImage,
    postDeleteImage,
    getAllCategory,
    createCategory,
    getAllProduct,
    createProductImage,
    editProduct,
    deleteProduct,
    productByCategory,
    productByPrice,
    cartListProduct,
    getSingleProduct,
    postAddReview,
    postDeleteReview,
    wishListProducts
        } from "./api"; 

const helper = {
    isAuthenticate,
    isAdmin,
    loginReq,
    signupReq,
    getAccessToken,
    getUserById,
    updatePersonalInformationFetch,
    updatePassword,
    getOrderByUser,
    getAllOrder,
    createOrder,
    editCategory,
    deleteOrder,
    DashboardData,
    getSliderImages,
    postUploadImage,
    postDeleteImage,
    getAllCategory,
    createCategory,
    getAllProduct,
    createProductImage,
    editProduct,
    deleteProduct,
    productByCategory,
    productByPrice,
    cartListProduct,
    getSingleProduct,
    postAddReview,
    postDeleteReview,
    wishListProducts
}

export default helper;