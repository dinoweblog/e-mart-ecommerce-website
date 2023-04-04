import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getOrderProductsData } from "../Redux/YourOrder/action";
import { Footer } from "./footer/Footer";
import { Navbar } from "./header/Navbar";
import { OrderProductCard } from "./OrderProductCard";
import "./Styles/OrderPage.css";
export const OrderPage = () => {
  const dispatch = useDispatch();
  const {
    order_products,
    quantity,
    itemQty,
    totalAmount,
    date,
    loading,
    order,
  } = useSelector((state) => state.orderProducts);
  const { user, token, isAuthenticated, userId } = useSelector(
    (state) => state.login
  );

  useEffect(() => {
    document.title = "Your Order | e-mart shopping platform";
  }, []);

  useEffect(() => {
    dispatch(getOrderProductsData(userId, token));
  }, []);

  return (
    <div>
      <Navbar />
      {loading ? (
        <div className="all_products loading_gif">
          <img
            src="https://flevix.com/wp-content/uploads/2020/01/Preloader.gif"
            alt=""
          />
        </div>
      ) : (
        <div className="order_container">
          <div className="order_left">
            <div className=" sidebar_menu_div">
              <ul className="sidebar_menu">
                <li>
                  <Link to={"/"}>Men</Link>
                </li>
                <li>
                  <Link to={"/shop/women"}>Women</Link>
                </li>
                <li>
                  <Link to={"/"}>Kids</Link>
                </li>
                <li>
                  <Link to={"/"}>Best Collection</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="order_right">
            <div className="user_profile_details">
              <h2>Hi, {user.name}</h2>
              <span id="order_summery">
                <p>
                  Your Order :{" "}
                  <span>
                    Rs.{Intl.NumberFormat("en-IN").format(totalAmount)}
                  </span>{" "}
                  ({quantity} Items)
                </p>
                <p>Delivery on 7 Days{}</p>
              </span>
            </div>
            <div>
              {order_products.map((e, index) => (
                <OrderProductCard
                  key={e._id}
                  id={e._id}
                  imageURL={e.imageURL}
                  name={e.name}
                  description={e.desc}
                  newPrice={e.newPrice}
                  off={e.off}
                  category={e.category}
                  itemQty={itemQty[index]}
                  proId={order[index]._id}
                  date={date[index]}
                />
              ))}
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};
