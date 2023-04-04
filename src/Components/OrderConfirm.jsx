import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Footer2 } from "./footer/Footer2";
import { Navbar2 } from "./header/Navbar2";
import "./Styles/Checkout.css";

export const OrderConfirm = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Confirm Order | e-mart shopping platform";
  }, []);

  return (
    <div>
      <Navbar2 />

      <div className="order_confirm_container">
        <div>
          <div className="tick_sign">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3472/3472620.png"
              alt=""
            />
          </div>
          <h1>Order confirmed</h1>
          <div className="order_summery">
            Your order is confirmed. You will receive an order confirmation
            email/SMS shortly with the expected delivery date for your items.
          </div>
          <div className="confirm_page_btn">
            <button
              className="continue_shopping"
              onClick={() => {
                navigate("/");
              }}
            >
              CONTINUE SHOPPING
            </button>
            <button
              className="continue_shopping"
              onClick={() => {
                navigate("/YourOrder");
              }}
            >
              YOUR ORDER
            </button>
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
};
