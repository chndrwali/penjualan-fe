/* eslint-disable react/prop-types */
import { Fragment, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { DashboardContext } from "./";
import { todayAllOrders } from "./action";

const apiURL = "http://localhost:3000/api";

const SellTable = () => {
  const navigate = useNavigate();
  const { data, dispatch } = useContext(DashboardContext);

  useEffect(() => {
    todayAllOrders(dispatch);
  }, [dispatch]);

  const ordersList = () => {
    return (
      data.totalOrders?.Orders?.filter(
        (elem) => moment(elem.createdAt).format("LL") === moment().format("LL")
      ) ?? []
    );
  };

  return (
    <Fragment>
      <div className="col-span-1 overflow-auto bg-white shadow-lg p-4">
        <div className="text-2xl font-semibold mb-6 text-center">
          Today Orders {ordersList().length}
        </div>
        <table className="table-auto border w-full my-2">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Products</th>
              <th className="px-4 py-2 border">Image</th>
              <th className="px-4 py-2 border">Status</th>
              <th className="px-4 py-2 border">Order Address</th>
              <th className="px-4 py-2 border">Ordered at</th>
            </tr>
          </thead>
          <tbody>
            {ordersList().length > 0 ? (
              ordersList().map((item) => (
                <TodayOrderTable order={item} key={item._id} />
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-xl text-center font-semibold py-8">
                  No orders found today
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="text-sm text-gray-600 mt-2">
          Total {ordersList().length} orders found
        </div>
        <div className="flex justify-center">
          <span
            onClick={() => navigate("/admin/dashboard/orders")}
            style={{ background: "#303031" }}
            className="cursor-pointer px-4 py-2 text-white rounded-full"
          >
            View All
          </span>
        </div>
      </div>
    </Fragment>
  );
};

const TodayOrderTable = ({ order }) => {
  return (
    <Fragment>
      <tr>
        <td className="w-48 hover:bg-gray-200 p-2 flex flex-col space-y-1">
          {order.allProduct.map((item) => (
            <div key={item.id} className="flex space-x-2">
              <span>{item.id.pName}</span>
              <span>{item.quantitiy}x</span>
            </div>
          ))}
        </td>
        <td className="p-2 text-left">
          {order.allProduct.map((item) => (
            <img
              key={item.id}
              className="w-12 h-12 object-cover"
              src={`${apiURL}/uploads/products/${item.id.pImages[0]}`}
              alt="Product"
            />
          ))}
        </td>
        <td className="p-2 text-center">
          <span
            className={`block rounded-full text-center text-xs px-2 font-semibold ${
              order.status === "Not processed"
                ? "text-red-600"
                : order.status === "Processing"
                ? "text-yellow-600"
                : order.status === "Shipped"
                ? "text-blue-600"
                : order.status === "Delivered"
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {order.status}
          </span>
        </td>
        <td className="p-2 text-center">{order.address}</td>
        <td className="p-2 text-center">
          {moment(order.createdAt).format("lll")}
        </td>
      </tr>
    </Fragment>
  );
};

const TodaySell = () => {
  return (
    <div className="m-4">
      <SellTable />
    </div>
  );
};

export default TodaySell;
