import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../API";
import {
  getCartProductsData,
  getCartProductsSuccess,
} from "../Redux/Cart/action";

export const CartPageCard = ({
  imageURL,
  name,
  oldPrice,
  newPrice,
  off,
  category,
  description,
  itemQty,
  cartId,
  index,
}) => {
  const [incQty, setIncQty] = useState(itemQty);

  const dispatch = useDispatch();

  const { userId, token } = useSelector((state) => state.login);

  const IncDechandle = (x) => {
    setIncQty(itemQty + x);
  };

  useEffect(() => {
    cartHandle();
  }, [incQty]);

  const cartHandle = () => {
    fetch(`${API_URL}/cart/items/update/${cartId}`, {
      method: "PATCH",
      body: JSON.stringify({ quantity: incQty }),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => {
        dispatch(getCartProductsData(userId, token));
      })
      .catch((error) => console.log(error));
  };

  const cartMoreHandle = () => {
    fetch(`${API_URL}/cart/items/delete/${cartId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => {
        dispatch(getCartProductsData(userId, token));
      })

      .catch((error) => console.log(error));
  };

  const urlRegex = /\s/g;
  const url_title = name.toLowerCase().replace(urlRegex, "-");

  return (
    <div className="checkout_div cart_items">
      <div className="product_img_sec">
        <img src={imageURL} alt="" />
      </div>
      <div className="product_title_sec">
        <h2 className="product_title">{name}</h2>
        <p className="product_desc product_desc_card">{description}</p>
        <p className="product_price">
          <span className="new_price">
            Rs. {Intl.NumberFormat("en-IN").format(newPrice)}
          </span>
          <span className="old_price">
            Rs. {Intl.NumberFormat("en-IN").format(oldPrice)}
          </span>
          <span className="off">({off}% OFF)</span>
        </p>

        <div>
          <h5 className="select_text">CHANGE QUANTITY</h5>
          <div className="product_quantity">
            <button
              className="quantity_dec"
              onClick={() => {
                IncDechandle(-1);
              }}
            >
              <i className="bx bx-minus"></i>
            </button>
            <input className="qty_box" type="text" value={itemQty} />
            <button
              className="quantity_inc"
              onClick={() => {
                IncDechandle(1);
              }}
            >
              <i className="bx bx-plus"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="item_delete_btn">
        <button
          className="text_btn"
          onClick={() => {
            cartMoreHandle();
          }}
        >
          <i className="bx bx-trash"></i>
        </button>
      </div>
    </div>
  );
};
