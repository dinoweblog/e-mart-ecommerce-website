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
  color,
  size,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [data, setData] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cart_products } = useSelector((state) => state.cart_products);

  useEffect(() => {
    dispatch(getCartProductsData());
  }, [dispatch]);

  useEffect(() => {
    // findData();
  }, []);
  //   const findData = () => {
  //     fetch(`https://all-json-server.herokuapp.com/woman_products/${id}`)
  //       .then((res) => res.json())
  //       .then((res) => {
  //         setData({ ...res });
  //       })
  //       .catch((error) => console.log(error));
  //   };

  //   const cartHandle = () => {
  //     fetch(`http://localhost:3000/cart_products`, {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ ...data, quantity }),
  //     })
  //       .then((res) => dispatch(getCartProductsData()))

  //       .catch((error) => console.log(error));
  //   };

  const cartMoreHandle = () => {
    fetch(`http://localhost:3000/cart_products/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(id),
    })
      .then((res) => dispatch(getCartProductsData()))

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
          <span className="new_price">Rs. {newPrice}</span>
          <span className="old_price">Rs. {oldPrice}</span>
          <span className="off">({off}% OFF)</span>
        </p>

        <div>
          <h5 className="select_text">SELECT QUANTITY</h5>
          <div className="product_quantity">
            <button
              className="quantity_dec"
              onClick={() => {
                setQuantity((state) => state - 1);
                cartMoreHandle();
              }}
            >
              -
            </button>
            <input type="text" value={quantity} />
            <button
              className="quantity_inc"
              onClick={() => {
                setQuantity((state) => state + 1);
                cartMoreHandle();
              }}
            >
              +
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
          <i class="bx bx-trash"></i>
        </button>
      </div>
    </div>
  );
};
