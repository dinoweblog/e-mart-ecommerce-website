import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import { Navbar2 } from "../header/Navbar2";
import "../Styles/Checkout.css";
import { TotalAmount } from "../TotalAmount";
import { Footer2 } from "../footer/Footer2";

import {
  getCartProductsData,
  getCartProductsError,
  getCartProductsLoading,
  getCartProductsSuccess,
} from "../../Redux/Cart/action";
import { getOrderProductsData } from "../../Redux/YourOrder/action";
import { API_URL } from "../../API";

export const Payment = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const [toggle1, setToggle1] = useState(true);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const { cart_products, quantity, itemQty, cart } = useSelector(
    (state) => state.cart_products
  );
  const { userId, token } = useSelector((state) => state.login);
  const [oldTotal, setoldTotal] = useState(0);
  const [dis, setdis] = useState(0);

  useEffect(() => {
    document.title = "Payment | e-mart shopping platform";
  }, []);

  useEffect(() => {
    let x = 0;
    let d = 0;
    for (let i = 0; i < cart_products.length; i++) {
      x += Number(cart_products[i].oldPrice) * itemQty[i];
      d += Number(cart_products[i].newPrice) * itemQty[i];
    }
    setdis(x - d);
    setoldTotal(x);
  }, []);

  const removeAllCartItems = () => {
    dispatch(getCartProductsLoading());

    fetch(`${API_URL}/cart/items/delete-all/${userId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "Application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        placeOrder();
        dispatch(getCartProductsData(userId, token));
      })
      .catch((error) => dispatch(getCartProductsError()));
  };

  const placeOrder = () => {
    fetch(`${API_URL}/product-order/your-order`, {
      method: "POST",
      body: JSON.stringify(cart),
      headers: {
        "Content-Type": "Application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch(getOrderProductsData(userId, token));
        navigate("/checkout/confirm");
      })

      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Navbar2 paytc={"#20BD99"} />

      <div className="cart_items_container payment_container">
        <div className="checkout_div_left">
          <div className="payment_div">
            <div className="bank_offer">
              <i className="bx bxs-offer"></i>
              <span>Bank offer</span>
            </div>
            <li className="first_offer">
              <span>
                10% Instant Discount on Kotak Credit and Debit Cards on a min
                spend of Rs 3,000. TCA
              </span>
            </li>
            {toggle ? (
              <div className="content">
                <ul>
                  <li>
                    <span>
                      5% Unlimited Cashback on Flipkart Axis Bank Credit Card.
                      TCA
                    </span>
                  </li>
                  <li>
                    <span>
                      10% Cashback upto Rs 100 on Paytm Postpaid transaction on
                      a min spend of Rs 1000 . TCA
                    </span>
                  </li>
                  <li>
                    <span>
                      15% Cashback upto Rs 150 on Freecharge Paylater
                      transaction. TCA
                    </span>
                  </li>
                  <li>
                    <span>
                      10% Cashback upto Rs 200 on Ola Money Postpaid or wallet
                      transaction on a min spend of Rs 1000 . TCA
                    </span>
                  </li>
                  <li>
                    <span>
                      Upto Rs 500 Cashback on Mobikwik Wallet Transactions on a
                      min spend of Rs 999.Use code MBK500 on Mobikwik.TCA
                    </span>
                  </li>
                  <li>
                    <span>
                      5% Cashback upto Rs 150 on a minimum spend of Rs 1,500
                      with PayZapp. TCA
                    </span>
                  </li>
                </ul>
              </div>
            ) : null}
            <button
              className="text_btn collapsible_btn show_more_btn"
              onClick={() => {
                setToggle(!toggle);
                setShowMore(!showMore);
              }}
            >
              {showMore ? "Hide More" : "Show More"}
            </button>
          </div>
          <div className="seller_text payment_div payment_method">
            <button
              type="button"
              className="collapsible"
              onClick={() => {
                setToggle1(!toggle1);
              }}
            >
              <PaymentsOutlinedIcon style={{ marginRight: 5 }} /> Cash On
              Delivery (Cash/Card/UPI)
            </button>
            {toggle1 ? (
              <div className="payment_content">
                <div>
                  <div className="method_title">
                    Pay on delivery (Cash/Card/UPI)
                  </div>
                  <div className="">
                    <div className="">
                      You can pay via Cash/Card or UPI enabled app at the time
                      of delivery. Ask your delivery executive for these
                      options.
                    </div>
                  </div>
                  <button
                    id="action_cod"
                    className="chashon_btn"
                    onClick={() => {
                      removeAllCartItems();
                    }}
                  >
                    PLACE ORDER
                  </button>
                </div>
              </div>
            ) : null}
            <button
              type="button"
              className="collapsible"
              onClick={() => {
                setToggle2(!toggle2);
              }}
            >
              <CreditCardOutlinedIcon style={{ marginRight: 5 }} /> Credit/Debit
              Card
            </button>
            {toggle2 ? (
              <div className="payment_content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            ) : null}
            <button
              type="button"
              className="collapsible"
              onClick={() => {
                setToggle3(!toggle3);
              }}
            >
              <AccountBalanceOutlinedIcon style={{ marginRight: 5 }} /> Net
              Banking
            </button>
            {toggle3 ? (
              <div className="payment_content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            ) : null}
          </div>
        </div>

        <div className="checkout_div_right">
          <TotalAmount
            totalQty={quantity}
            oldTotal={oldTotal}
            dis={dis}
            btn={false}
          />
        </div>
      </div>
      <Footer2 />
    </div>
  );
};
