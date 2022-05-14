import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getCartProductsData } from "../Redux/Cart/action";
import { Navbar2 } from "./Navbar2";
import "./Styles/Checkout.css";

export const Address = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
   setoldTotal(a);
   setdis(b);
  }, []);

  useEffect(() => {
    dispatch(getCartProductsData());
  }, []);

  return (
    <div>
      <Navbar2 />

      <div className="cart_items_container">
        <div className="checkout_div_left address_container">
          <div className="address_input ">
            <div className="contact_details input_title">
              <p>CONTACT DETAILS</p>
              <div>
                <div className="input_wraper">
                  <label for="name" className="input_label">
                    Name*
                  </label>
                  <input className="input_input " id="name" type="text" />
                </div>
                <div className="input_wraper">
                  <label for="mobile" className="input_label">
                    Mobile No*
                  </label>
                  <input className="input_input " id="mobile" type="text" />
                </div>
              </div>
            </div>
            <div className="address_details input_title">
              <p>ADDRESS</p>
              <div>
                <div className="input_wraper">
                  <label for="pincode" className="input_label">
                    Pin code*
                  </label>
                  <input className="input_input " id="pincode" type="number" />
                </div>
                <div className="input_wraper">
                  <label for="address" className="input_label">
                    Address (House No, Building, Street, Area)*
                  </label>
                  <input className="input_input " id="address" type="text" />
                </div>
                <div className="input_wraper">
                  <label for="locality" className="input_label">
                    Locality/Town*
                  </label>
                  <input className="input_input " id="address" type="text" />
                </div>
                <div className="input_wraper">
                  <label for="state" className="input_label">
                    State*
                  </label>
                  <input className="input_input " id="state" type="text" />
                </div>
              </div>
            </div>
            <div>
              <input type="checkbox" />
              <span> Make this my default address</span>
            </div>
            <div className="place_order_btn save_address">
              <button
                onClick={() => {
                  navigate("/checkout/payment");
                }}
              >
                PLACE ORDER
              </button>
            </div>
          </div>
        </div>
        <div className="checkout_div_right address_price_section">
          <div>
            <p>PRICE DETAILS ({})</p>
          </div>
          <div class="order_summary" id="priceBlock">
            <div class="base_price_detail price_details">
              <span>Total MRP</span>
              <span>
                <i class="bx bx-rupee"></i>
                {oldTotal}
              </span>
            </div>
            <div class="discount_price price_details">
              <span>Discount on MRP</span>
              <span className="text_color_green">
                <i class="bx bx-rupee"></i>
                {dis}
              </span>
            </div>
            <div class="convenience_fee price_details">
              <span>Convenience Fee</span>
              <span>
                <span style={{ textDecoration: "line-through" }}>
                  <i class="bx bx-rupee"></i>69
                </span>
                <span className="text_color_green"> FREE</span>
              </span>
            </div>
            <div class="total_amount price_details">
              <span>Total Amount</span>
              <span>
                <i class="bx bx-rupee"></i>
                {oldTotal - dis}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
