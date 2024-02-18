import { Fragment } from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deleteOrder } from "../../../states/ordersStates/action"; 
import PropTypes from "prop-types";

const TodayOrderTable = ({ order }) => {
  const dispatch = useDispatch();

  const handleDeleteOrder = (orderId) => {
    if (window.confirm("Are you sure you want to delete this order?")) {
      dispatch(deleteOrder(orderId));
    }
  };

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
        <td className="p-2 text-center">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleDeleteOrder(order._id)}
          >
            Delete
          </button>
        </td>
      </tr>
    </Fragment>
  );
};

TodayOrderTable.propTypes = {
    order: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      allProduct: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.shape({
            pName: PropTypes.string.isRequired,
            pImages: PropTypes.arrayOf(PropTypes.string).isRequired,
            // tambahkan properti lain yang diperlukan di sini
          }).isRequired,
          quantitiy: PropTypes.number.isRequired,
          // tambahkan properti lain yang diperlukan di sini
        })
      ).isRequired,
      status: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      // tambahkan properti lain yang diperlukan di sini
    }).isRequired,
  };
export default TodayOrderTable;
