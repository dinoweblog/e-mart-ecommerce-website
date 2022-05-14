import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getCartProductsData } from "../Redux/Cart/action";
import { getQuantitySuccess } from "../Redux/Quantity/action";
import { CartPageCard } from "./CartPageCard";
import { Navbar2 } from "./Navbar2";
import "./Styles/Checkout.css";

export const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cart_products } = useSelector((state) => state.cart_products);
  const { quantity } = useSelector((state) => state.quantity);
  const [qty, setQty] = useState(0);
  const [oldTotal, setoldTotal] = useState(0);
  const [total, settotal] = useState(0);
  const [dis, setdis] = useState(0);
  const [quant, setQuant] = useState(1);
  useEffect(() => {
    dispatch(getCartProductsData());
    dispatch(getQuantitySuccess());
  }, []);

  useEffect(() => {
    let a = 0;
    let b = 0;
    cart_products.map((e) => {
      a = a + Number(e.oldPrice);
      b = b + (Number(e.oldPrice) - Number(e.newPrice));
    });
    // settotal(oldTotal - dis);
    setoldTotal(a * quant);
    setdis(b * quant);
  }, [quant]);

  const decQty = () => {
    let q = quant;
    if (quant > 1) {
      q = q - 1;
    }
    setQuant(q);
  };
  const incQty = () => {
    let q = quant;
    q = q + 1;
    setQuant(q);
  };

  return (
    <div>
      <Navbar2 />

      {cart_products.length != 0 ? (
        <div className="cart_items_container">
          <div className="checkout_div_left">
            <div className="yay checkout_div">
              <img
                src="https://constant.myntassets.com/checkout/assets/img/ship-free.webp"
                alt=""
              />
              <p>
                Yay!
                <span> No convenience fee </span>
                on this order.
              </p>
            </div>
            <div className="seller_text checkout_div">
              <div>
                <i className="bx bx-user"></i>
              </div>
              <div>
                <h4>Seller has changed</h4>
                <div>
                  Seller of one or more items in your bag has changed. Please
                  review them before proceeding.
                </div>
              </div>
            </div>
            <div className="checkout_div all_item_remove_btn">
              <button className="text_btn">ALL REMOVE</button>
            </div>
            {cart_products.map((e) => (
              <CartPageCard
                key={e.id}
                id={e.id}
                imageURL={e.imageURL}
                name={e.name}
                description={e.desc}
                oldPrice={e.oldPrice}
                newPrice={e.newPrice}
                off={e.off}
                category={e.category}
                color={e.color}
                size={e.size}
                incQty={incQty}
                decQty={decQty}
                quant={quant}
              />
            ))}
          </div>
          <div className="checkout_div_right">
            <div>
              <p>PRICE DETAILS</p>
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
              {/* <div class="priceDetail-base-row">
                <span>Coupon Discount</span>
                <span class="priceDetail-base-value priceDetail-base-action">
                  Apply Coupon
                </span>
              </div> */}
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
            <div className="place_order_btn">
              <button
                onClick={() => {
                  navigate("/checkout/address");
                }}
              >
                PLACE ORDER
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="empty_cart">
          <div>
            <img
              src="https://constant.myntassets.com/checkout/assets/img/empty-bag.webp"
              alt=""
            />
            <h4>Hey, it feels so light!</h4>
            <p>There is nothing in your bag. Let's add some items.</p>
            <div className="add_btn">
              <Link to={"/"}>ADD ITEMS</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
