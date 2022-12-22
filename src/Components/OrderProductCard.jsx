import { useDispatch, useSelector } from "react-redux";
import {
  getOrderProductsData,
  getOrderProductsLoading,
} from "../Redux/YourOrder/action";

import { FcCalendar } from "react-icons/fc";
import { Link } from "react-router-dom";
import { API_URL } from "../API";

export const OrderProductCard = ({
  id,
  imageURL,
  name,
  newPrice,
  itemQty,
  proId,
  date,
}) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.orderProducts);
  const { token, userId } = useSelector((state) => state.login);

  const cancelHandle = () => {
    dispatch(getOrderProductsLoading());
    fetch(
      `${API_URL}/product-order/your-order/cancel/${proId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    )
      .then((res) => {
        dispatch(getOrderProductsData(userId, token));
      })
      .catch((error) => console.log(error));
  };

  const urlRegex = /\s/g;
  const url_title = name.toLowerCase().replace(urlRegex, "-");

  return (
    <div className="checkout_div cart_items order_product">
      <div className="order_img_div">
        <img src={imageURL} alt="" />
      </div>
      <div className="product_title_sec">
        <Link to={`/product/${id}/${url_title}`}>
          <h2 className="">{name}</h2>
        </Link>

        <div className="product_price">
          <span className="new_price">
            Rs. {Intl.NumberFormat("en-IN").format(newPrice)}
          </span>
          <p> ({itemQty} items)</p>
        </div>
        <div className="order_cancel_btn">
          <p>
            <FcCalendar style={{ fontSize: "1.7rem" }} /> {date.slice(0, 10)}
          </p>
          <button
            onClick={() => {
              cancelHandle();
            }}
          >
            {loading ? "Order Cancel..." : "Order Cancel"}
          </button>
        </div>
      </div>
    </div>
  );
};
