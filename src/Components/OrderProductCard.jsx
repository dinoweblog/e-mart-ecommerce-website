import { useDispatch, useSelector } from "react-redux";
import {
  getOrderProductsData,
  getOrderProductsLoading,
} from "../Redux/YourOrder/action";

export const OrderProductCard = ({
  imageURL,
  name,
  newPrice,
  itemQty,
  proId,
}) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.orderProducts);
  const { token, userId } = useSelector((state) => state.login);

  const cancelHandle = () => {
    dispatch(getOrderProductsLoading());
    fetch(
      `https://emart-server.herokuapp.com/product-order/your-order/cancel/${proId}`,
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

  return (
    <div className="checkout_div cart_items order_product">
      <div className="order_img_div">
        <img src={imageURL} alt="" />
      </div>
      <div className="product_title_sec">
        <h2 className="">{name}</h2>

        <div className="product_price">
          <span className="new_price">
            Rs. {Intl.NumberFormat("en-IN").format(newPrice)}
          </span>
          <p> ({itemQty} items)</p>
        </div>
        <div className="order_cancel_btn">
          <p>Date</p>
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
