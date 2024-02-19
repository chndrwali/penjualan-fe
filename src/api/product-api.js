import API_ENDPOINT from "../globals/api-endpoint";

const PRODUCT_API = {
  getAllProduct: async () => {
    try {
      const response = await fetch(API_ENDPOINT.GET_ALL_PRODUCT);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error while fetching all products:', error);
      throw error;
    }
  },

  getProductByCategory: async (catId) => {
    try {
      const response = await fetch(API_ENDPOINT.GET_PRODUCT_BY_CATEGORY, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ catId }),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error while fetching products by category:', error);
      throw error;
    }
  },

  getProductByPrice: async (price) => {
    try {
      const response = await fetch(API_ENDPOINT.GET_PRODUCT_BY_PRICE, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ price }),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error while fetching products by price:', error);
      throw error;
    }
  },

  getWishProduct: async (productArray) => {
    try {
      const response = await fetch(API_ENDPOINT.GET_WISH_PRODUCT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productArray }),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error while fetching wishlisted products:', error);
      throw error;
    }
  },

  getCartProduct: async (productArray) => {
    try {
      const response = await fetch(API_ENDPOINT.GET_CART_PRODUCT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productArray }),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error while fetching cart products:', error);
      throw error;
    }
  },

  addProduct: async (productData) => {
    try {
      const response = await fetch(API_ENDPOINT.POST_PRODUCT, {
        method: 'POST',
        body: productData,
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error while adding product:', error);
      throw error;
    }
  },

  editProduct: async (productData) => {
    try {
      const response = await fetch(API_ENDPOINT.EDIT_PRODUCT, {
        method: 'PUT',
        body: productData,
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error while editing product:', error);
      throw error;
    }
  },

  deleteProduct: async (pId) => {
    try {
      const response = await fetch(API_ENDPOINT.DELETE_PRODUCT, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ pId }),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error while deleting product:', error);
      throw error;
    }
  },

  getSingleProduct: async (pId) => {
    try {
      const response = await fetch(API_ENDPOINT.GET_SINGLE_PRODUCT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ pId }),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error while fetching single product:', error);
      throw error;
    }
  },

  addReview: async (reviewData) => {
    try {
      const response = await fetch(API_ENDPOINT.ADD_REVIEW, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reviewData),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error while adding review:', error);
      throw error;
    }
  },

  deleteReview: async (rId, pId) => {
    try {
      const response = await fetch(API_ENDPOINT.DELETE_REVIEW, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ rId, pId }),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error while deleting review:', error);
      throw error;
    }
  },
};

export default PRODUCT_API;
