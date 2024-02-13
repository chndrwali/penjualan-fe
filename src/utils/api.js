import axios from "axios";
const apiURL = "http://localhost:3000/api";

// Authentication Functions
export const isAuthenticate = () =>
  localStorage.getItem("jwt") ? JSON.parse(localStorage.getItem("jwt")) : false;

export const isAdmin = () =>
  localStorage.getItem("jwt")
    ? JSON.parse(localStorage.getItem("jwt")).user.role === 1
    : false;

export const loginReq = async ({ email, password }) => {
  const data = { email, password };
  try {
    let res = await axios.post(`${apiURL}/auth/signin`, data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const signupReq = async ({ name, email, password, cPassword }) => {
  const data = { name, email, password, cPassword };
  try {
    let res = await axios.post(`${apiURL}/auth/signup`, data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAccessToken = () => {
  return localStorage.getItem("jwt")
    ? JSON.parse(localStorage.getItem("jwt")).token
    : null;
};

// User Functions
export const getUserById = async (uId) => {
  try {
    let res = await axios.post(`${apiURL}/users/single-user`, { uId }, {
      headers: {
        Authorization: `Bearer ${getAccessToken()}`
      }
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};


export const updatePersonalInformationFetch = async (userData) => {
  try {
    let res = await axios.post(`${apiURL}/users/edit-user`, userData);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getOrderByUser = async (uId) => {
  try {
    let res = await axios.post(`${apiURL}/orders/order-by-user`, { uId });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const updatePassword = async (formData) => {
  try {
    let res = await axios.post(`${apiURL}/users/change-password`, formData);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// Order Functions
export const getAllOrder = async () => {
  try {
    let res = await axios.get(`${apiURL}/orders/get-all-orders`, {
      headers: { Authorization: `Bearer ${getAccessToken()}` },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const createOrder = async (orderData) => {
  try {
    let res = await axios.post(`${apiURL}/orders/create-order`, orderData, {
      headers: { Authorization: `Bearer ${getAccessToken()}` },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const editCategory = async (oId, status) => {
  let data = { oId: oId, status: status };
  console.log(data);
  try {
    let res = await axios.post(`${apiURL}/orders/update-order`, data, {
      headers: { Authorization: `Bearer ${getAccessToken()}` },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteOrder = async (oId) => {
  let data = { oId: oId };
  try {
    let res = await axios.post(`${apiURL}/orders/delete-order`, data, {
      headers: { Authorization: `Bearer ${getAccessToken()}` },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// Dashboard Functions
export const DashboardData = async () => {
  try {
    let res = await axios.post(`${apiURL}/customize/dashboard-data`, null, {
      headers: { Authorization: `Bearer ${getAccessToken()}` },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// Slider Functions
export const getSliderImages = async () => {
  try {
    let res = await axios.get(`${apiURL}/customize/get-slide-image`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const postUploadImage = async (formData) => {
  try {
    let res = await axios.post(
      `${apiURL}/customize/upload-slide-image`,
      formData,
      {
        headers: { Authorization: `Bearer ${getAccessToken()}` },
      }
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const postDeleteImage = async (id) => {
  try {
    let res = await axios.post(
      `${apiURL}/customize/delete-slide-image`,
      { id },
      {
        headers: { Authorization: `Bearer ${getAccessToken()}` },
      }
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// Category Functions
export const getAllCategory = async () => {
  try {
    let res = await axios.get(`${apiURL}/categories/all-category`, {
      headers: { Authorization: `Bearer ${getAccessToken()}` },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const createCategory = async ({
  cName,
  cImage,
  cDescription,
  cStatus,
}) => {
  let formData = new FormData();
  formData.append("cImage", cImage);
  formData.append("cName", cName);
  formData.append("cDescription", cDescription);
  formData.append("cStatus", cStatus);

  try {
    let res = await axios.post(
      `${apiURL}/categories/add-category`,
      formData,
      {
        headers: { Authorization: `Bearer ${getAccessToken()}` },
      }
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteCategory = async (cId) => {
  try {
    let res = await axios.post(
      `${apiURL}/categories/delete-category`,
      { cId },
      Headers()
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// Product Functions
export const getAllProduct = async () => {
  try {
    let res = await axios.get(`${apiURL}/products/all-product`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const createProductImage = async ({ image }) => {
  /* Most important part for uploading multiple image  */
  let formData = new FormData();
  for (const file of image) {
    formData.append("image", file);
  }
  /* Most important part for uploading multiple image  */
};

export const createProduct = async ({
  name,
  description,
  image,
  status,
  category,
  quantity,
  price,
  offer,
}) => {
  /* Most important part for uploading multiple image  */
  let formData = new FormData();
  for (const file of image) {
    formData.append("image", file);
  }
  /* Most important part for uploading multiple image  */
  formData.append("name", name);
  formData.append("description", description);
  formData.append("status", status);
  formData.append("category", category);
  formData.append("quantity", quantity);
  formData.append("price", price);
  formData.append("offer", offer);

  try {
    let res = await axios.post(`${apiURL}/products/add-product`, formData, {
      headers: { Authorization: `Bearer ${getAccessToken()}` },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const editProduct = async (product) => {
  console.log(product);
  /* Most important part for updating multiple image  */
  let formData = new FormData();
  if (product.pEditImages) {
    for (const file of product.pEditImages) {
      formData.append("pEditImages", file);
    }
  }
  /* Most important part for updating multiple image  */
  formData.append("id", product.id);
  formData.append("name", product.name);
  formData.append("description", product.description);
  formData.append("status", product.status);
  formData.append("category", product.category._id);
  formData.append("quantity", product.quantity);
  formData.append("price", product.price);
  formData.append("offer", product.offer);
  formData.append("images", product.images);

  try {
    let res = await axios.post(`${apiURL}/products/edit-product`, formData, {
      headers: { Authorization: `Bearer ${getAccessToken()}` },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = async (pId) => {
  try {
    let res = await axios.post(
      `${apiURL}/products/delete-product`,
      { pId },
      {
        headers: { Authorization: `Bearer ${getAccessToken()}` },
      }
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const productByCategory = async (catId) => {
  try {
    let res = await axios.post(`${apiURL}/products/product-by-category`, {
      catId,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const productByPrice = async (price) => {
  try {
    let res = await axios.post(`${apiURL}/products/product-by-price`, {
      price,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const cartListProduct = async () => {
  let carts = JSON.parse(localStorage.getItem("cart"));
  let productArray = [];
  if (carts) {
    for (const cart of carts) {
      productArray.push(cart.id);
    }
  }
  try {
    let res = await axios.post(`${apiURL}/products/cart-product`, {
      productArray,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getSingleProduct = async (pId) => {
  try {
    let res = await axios.post(`${apiURL}/products/single-product`, {
      pId: pId,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const postAddReview = async (formData) => {
  try {
    let res = await axios.post(`${apiURL}/products/add-review`, formData, {
      headers: { Authorization: `Bearer ${getAccessToken()}` },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const postDeleteReview = async (formData) => {
  try {
    let res = await axios.post(`${apiURL}/products/delete-review`, formData, {
      headers: { Authorization: `Bearer ${getAccessToken()}` },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const wishListProducts = async () => {
  let productArray = JSON.parse(localStorage.getItem("wishList"));
  try {
    let res = await axios.post(`${apiURL}/products/wish-product`, {
      productArray,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};