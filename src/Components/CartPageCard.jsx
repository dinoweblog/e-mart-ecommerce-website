import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getCartProductsData } from "../Redux/Cart/action";

export const CartPageCard = ({
  id,
  imageURL,
  name,
  oldPrice,
  newPrice,
  off,
  category,
  description,
  quant,
  itemQty,
  cartId,
  color,
  size,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [data, setData] = useState([]);
  const [incQty, setIncQty] = useState(itemQty);
  const [decQty, setDecQty] = useState(itemQty);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userId, token } = useSelector((state) => state.login);

  const IncDechandle = (x) => {
    setIncQty(itemQty + x);
  };

  console.log("itemQty", itemQty);

  const cartHandle = () => {
    fetch(`https://emart-server.herokuapp.com/cart/items/update/${cartId}`, {
      method: "PATCH",
      body: JSON.stringify({ quantity: incQty }),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => dispatch(getCartProductsData(userId, token)))

      .catch((error) => console.log(error));
  };

  const cartMoreHandle = () => {
    fetch(`https://emart-server.herokuapp.com/cart/items/delete/${cartId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => dispatch(getCartProductsData(userId, token)))

      .catch((error) => console.log(error));
  };

  return (
    <div className="checkout_div cart_items">
      <div className="product_img_sec">
        <img src={imageURL} alt="" />
      </div>
      <div className="product_title_sec">
        <h2 className="product_title">{name}</h2>
        <p className="product_desc">{description}</p>
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
          <h5 className="select_text">SELECT QUANTITY</h5>
          <div className="product_quantity">
            <button
              className="quantity_dec"
              onClick={() => {
                IncDechandle(-1);
                cartHandle();
              }}
            >
              <i className="bx bx-minus"></i>
            </button>
            <input type="text" value={itemQty} />
            <button
              className="quantity_inc"
              onClick={() => {
                IncDechandle(1);
                cartHandle();
              }}
            >
              <i className="bx bx-plus"></i>
            </button>
          </div>
        </div>

        <p className="product_category">
          Category : <span>{category}</span>
        </p>
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
