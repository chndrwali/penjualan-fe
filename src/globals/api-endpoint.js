import CONFIG from "./config";

const API_ENDPOINT = {
// ==================== AUTH ====================
LOGIN: `${CONFIG.API_URL}/auth/signin`,
REGISTER: `${CONFIG.API_URL}/auth/signup`,
IS_ADMIN: `${CONFIG.API_URL}/auth/isadmin`,
ALL_USER: `${CONFIG.API_URL}/auth/user`,
GET_OWN_PROFILE: `${CONFIG.API_URL}/auth/profile`,

// ==================== USER ====================
GET_ALL_USER: `${CONFIG.API_URL}/users/all-user`,
GET_USER_BY_ID: `${CONFIG.API_URL}/users/single-user`,
ADD_USER: `${CONFIG.API_URL}/users/add-user`,
EDIT_USER: `${CONFIG.API_URL}/users/edit-user`,
DELETE_USER: `${CONFIG.API_URL}/users/delete-user`,
CHANGE_PASSWORD: `${CONFIG.API_URL}/users/change-password`,

// ==================== CATEGORIES ====================
GET_ALL_CATEGORY: `${CONFIG.API_URL}/categories/all-category`,
ADD_CATEGORY: `${CONFIG.API_URL}/categories/add-category`,
EDIT_CATEGORY: `${CONFIG.API_URL}/categories/edit-category`,
DELETE_CATEGORY: `${CONFIG.API_URL}/categories/delete-category`,

// ==================== CUSTOMIZES ====================
GET_SLIDE_IMAGE: `${CONFIG.API_URL}/customize/get-slide-image`,
DELETE_SLIDE_IMAGE: (id) => `${CONFIG.API_URL}/customize/delete-slide-image/${id}`,
POST_SLIDE_IMAGE: `${CONFIG.API_URL}/customize/upload-slide-image`,
GET_DASHBOARD_DATA: `${CONFIG.API_URL}/customize/dashboard-data`,

// ==================== PRODUCT ====================
GET_ALL_PRODUCT: `${CONFIG.API_URL}/products/all-product`,
GET_WISH_PRODUCT: `${CONFIG.API_URL}/products/wish-product`,
GET_PRODUCT_BY_PRICE: `${CONFIG.API_URL}/products/product-by-price`,
GET_PRODUCT_BY_CATEGORY: `${CONFIG.API_URL}/products/product-by-category`,
GET_CART_PRODUCT: `${CONFIG.API_URL}/products/cart-product`,
POST_PRODUCT: `${CONFIG.API_URL}/products/add-product`,
EDIT_PRODUCT: `${CONFIG.API_URL}/products/edit-product`,
DELETE_PRODUCT: `${CONFIG.API_URL}/products/delete-product`,
GET_SINGLE_PRODUCT: `${CONFIG.API_URL}/products/single-product`,
ADD_REVIEW: `${CONFIG.API_URL}/products/add-review`,
DELETE_REVIEW: `${CONFIG.API_URL}/products/delete-review`,

// ==================== ORDERS ====================
GET_ALL_ORDERS: `${CONFIG.API_URL}/orders/get-all-orders`,
GET_ORDER_BY_USER: `${CONFIG.API_URL}/orders/order-by-user`,
CREATE_ORDER: `${CONFIG.API_URL}/orders/create-order`,
UPDATE_ORDER: `${CONFIG.API_URL}/orders/update-order`,
DELETE_ORDER: `${CONFIG.API_URL}/orders/delete-order`,

// ==================== BRAINTREE ====================
GET_TOKEN: `${CONFIG.API_URL}/braintree/get-token`,
PAYMENT: `${CONFIG.API_URL}/braintree/payment`
};

export default API_ENDPOINT;
