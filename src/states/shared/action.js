import USERS_API from "../../api/users-api";
import PRODUCT_API from "../../api/product-api";
import ORDERS_API from "../../api/orders-api";
import CATEGORIES_API from "../../api/categories-api";
import { getAllUsersSuccess } from "../Users/action"; 
import { getAllCategoriesSuccess } from "../categories/action"; 
import { getAllOrdersSuccess } from "../ordersStates/action";
import { getAllProductsSuccess } from "../products/action";

function asyncPopulate () {
    return async (dispatch) => {
        try {
            const users = await USERS_API.getAllUsers();
            const product = await PRODUCT_API.getAllProduct();
            const orders = await ORDERS_API.getAllOrders();
            const categories = await CATEGORIES_API.getAllCategories();

            dispatch(getAllUsersSuccess(users));
            dispatch(getAllProductsSuccess(product));
            dispatch(getAllOrdersSuccess(orders));
            dispatch(getAllCategoriesSuccess(categories))
        } catch (error) {
            alert(error.message)
        }
    };
}

export default asyncPopulate;