import ORDERS_API from "../../../api/orders-api";

export const fetchData = async (dispatch) => {
  dispatch({ type: "loading", payload: true });
  try {
    const responseData = await ORDERS_API.getAllOrders();
    if (responseData && responseData.Orders) {
      dispatch({
        type: "fetchOrderAndChangeState",
        payload: responseData.Orders,
      });
    }
  } catch (error) {
    console.error("Error fetching orders:", error);
  } finally {
    dispatch({ type: "loading", payload: false });
  }
};

export const editOrderReq = (oId, type, status, dispatch) => {
  if (type) {
    dispatch({ type: "updateOrderModalOpen", oId: oId, status: status });
  }
};

export const deleteOrderReq = async (oId, dispatch) => {
  try {
    const responseData = await ORDERS_API.deleteOrder(oId);
    if (responseData && responseData.success) {
      fetchData(dispatch);
    }
  } catch (error) {
    console.error("Error deleting order:", error);
  }
};

export const filterOrder = async (
  type,
  data,
  dispatch,
  dropdown,
  setDropdown
) => {
  try {
    const responseData = await ORDERS_API.getAllOrders();
    if (responseData && responseData.Orders) {
      let newData;
      const statusFilters = {
        "All": () => responseData.Orders,
        "Not processed": () => responseData.Orders.filter(item => item.status === "Not processed"),
        "Processing": () => responseData.Orders.filter(item => item.status === "Processing"),
        "Shipped": () => responseData.Orders.filter(item => item.status === "Shipped"),
        "Delivered": () => responseData.Orders.filter(item => item.status === "Delivered"),
        "Cancelled": () => responseData.Orders.filter(item => item.status === "Cancelled")
      };
      newData = statusFilters[type]();
      dispatch({ type: "fetchOrderAndChangeState", payload: newData });
      setDropdown(!dropdown);
    }
  } catch (error) {
    console.error("Error filtering orders:", error);
  }
};
