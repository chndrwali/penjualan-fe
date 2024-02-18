// SellTable.js
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../../../states/ordersStates/action";
import { Link } from "react-router-dom";
import TodayOrderTable from "./TodayOrderTable";

const SellTable = () => {
  const dispatch = useDispatch();
  const ordersList = useSelector((state) => state.orders.orders);

  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);

  return (
    <Fragment>
      <div className="col-span-1 overflow-auto bg-white shadow-lg p-4">
        <div className="text-2xl font-semibold mb-6 text-center">
          Today Orders {ordersList.length}
        </div>
        <table className="table-auto border w-full my-2">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Products</th>
              <th className="px-4 py-2 border">Status</th>
              <th className="px-4 py-2 border">Order Address</th>
              <th className="px-4 py-2 border">Ordered at</th>
            </tr>
          </thead>
          <tbody>
            {ordersList.length > 0 ? (
              ordersList.map((item) => (
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
          Total {ordersList.length} orders found
        </div>
        <div className="flex justify-center">
          <Link
            to="/admin/orders"
            style={{ background: "#303031" }}
            className="cursor-pointer px-4 py-2 text-white rounded-full"
          >
            View All
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default SellTable;
