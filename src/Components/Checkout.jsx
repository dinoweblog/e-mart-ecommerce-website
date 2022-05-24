import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getCartProductsData } from "../Redux/Cart/action";
import { CartPageCard } from "./CartPageCard";
import { Navbar2 } from "./Navbar2";
import "./Styles/Checkout.css";
import { TotalAmount } from "./TotalAmount";

export const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cart_products, quantity, itemQty, cart } = useSelector(
    (state) => state.cart_products
  );
  const { userId, token } = useSelector((state) => state.login);
  const [oldTotal, setoldTotal] = useState(0);
  const [dis, setdis] = useState(0);

  useEffect(() => {
    dispatch(getCartProductsData(userId, token));
  }, [dispatch]);

  useEffect(() => {
    let x = 0;
    let d = 0;
    if (cart_products.length > 1) {
      for (let i = 0; i < cart_products.length; i++) {
        x += Number(cart_products[i].oldPrice) * itemQty[i];
        d += Number(cart_products[i].newPrice) * itemQty[i];
      }
      setdis(x - d);
      setoldTotal(x);
    } else {
      x += Number(cart_products[0].oldPrice) * itemQty[0];
      d += Number(cart_products[0].newPrice) * itemQty[0];
      setdis(x - d);
      setoldTotal(x);
    }
  }, []);

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
              <p>
                <i className="bx bxs-check-square"></i> {quantity} Items
                Selected
              </p>
              <p>- | -</p>
              <button className="text_btn">ALL REMOVE</button>
            </div>
            {cart_products.map((e, index) => (
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
                itemQty={itemQty[index]}
                cartId={cart[index]._id}
              />
            ))}
          </div>
          <div className="checkout_div_right">
            <TotalAmount
              totalQty={quantity}
              oldTotal={oldTotal}
              dis={dis}
              redirectLink={"/checkout/address"}
              btnText={"CONTINUE"}
              btn={true}
            />
          </div>
        </div>
      ) : (
        <div className="empty_cart">
          <div>
            <img
              src="https://www.freepnglogos.com/uploads/shopping-bag-png/shopping-bag-plaseto-bag-plaseto-bags-manufacturer-west-bengal-17.png"
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
