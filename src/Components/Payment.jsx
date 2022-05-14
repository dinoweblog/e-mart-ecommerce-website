import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getCartProductsData } from "../Redux/Cart/action";
import { Navbar2 } from "./Navbar2";
import "./Styles/Checkout.css";

export const Payment = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const [toggle1, setToggle1] = useState(true);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  const { quantity } = useSelector((state) => state.quantity);
  const { cart_products } = useSelector((state) => state.cart_products);
  const [oldTotal, setoldTotal] = useState(0);
  const [total, settotal] = useState(0);
  const [dis, setdis] = useState(0);

  useEffect(() => {
    let a = 0;
    let b = 0;
    cart_products.map((e) => {
      a = a + Number(e.oldPrice);
      b = b + (Number(e.oldPrice) - Number(e.newPrice));
    });
    // settotal(oldTotal - dis);
    setoldTotal(a * quantity);
    setdis(b * quantity);
  }, []);

  useEffect(() => {
    dispatch(getCartProductsData());
  }, []);

  console.log(toggle);

  return (
    <div>
      <Navbar2 />

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
              className="text_btn collapsible_btn"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              Show more
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
              Cash On Delivery (Cash/Card/UPI)
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
                      navigate("/checkout/confirm");
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
              <i className="bx bx-credit-card"></i> Credit/Debit Card
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
              <i className="bx bxs-bank"></i> Net Banking
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
          <div>
            <p>PRICE DETAILS ({})</p>
          </div>
          <div className="order_summary" id="priceBlock">
            <div className="base_price_detail price_details">
              <span>Total MRP</span>
              <span>
                <i className="bx bx-rupee"></i>
                {oldTotal}
              </span>
            </div>
            <div className="discount_price price_details">
              <span>Discount on MRP</span>
              <span className="text_color_green">
                <i className="bx bx-rupee"></i>
                {dis}
              </span>
            </div>
            <div className="convenience_fee price_details">
              <span>Convenience Fee</span>
              <span>
                <span style={{ textDecoration: "line-through" }}>
                  <i className="bx bx-rupee"></i>69
                </span>
                <span className="text_color_green"> FREE</span>
              </span>
            </div>
            <div className="total_amount price_details">
              <span>Total Amount</span>
              <span>
                <i className="bx bx-rupee"></i>
                {oldTotal - dis}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
