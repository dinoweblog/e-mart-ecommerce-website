import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import "./Styles/ProductDetails.css";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartProductsData } from "../Redux/Cart/action";
import { WomenSlider } from "./Slider";

export const ProductDetailsPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const { id } = useParams();

  const { cart_products } = useSelector((state) => state.cart_products);
  const { userId, token } = useSelector((state) => state.login);

  useEffect(() => {
    findData();
  }, []);

  const findData = () => {
    fetch(`https://emart-server.herokuapp.com/products/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setData({ ...res.product });
      })
      .catch((error) => console.log(error));
  };

  const cartHandle = () => {
    fetch(`https://emart-server.herokuapp.com/cart/items`, {
      method: "POST",
      body: JSON.stringify({ productId: id, userId, quantity: 1 }),
      headers: {
        "Content-Type": "Application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => dispatch(getCartProductsData(userId, token)))

      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Navbar />
      <div className="outer_container">
        <div className="inner_container">
          <div className="img_div">
            <div>
              <img src={data.imageURL} alt="" />
            </div>
          </div>
          <div className="details_div">
            <h2 className="product_title">{data.name}</h2>
            <p>{data.desc}</p>
            <div className="hr"></div>
            <p className="products_price">
              <span className="new_price">Rs. {data.newPrice}</span>
              <span className="old_price">Rs. {data.oldPrice}</span>
              <span className="off">({data.off}% OFF)</span>
            </p>
            <div>
              <h3>SELECT SIZE</h3>
              <div className="product_size">
                {/* {data.size.split(", ").map((e) => {
                  return <div>{e}</div>;
                })} */}
              </div>
            </div>

            <div>
              <button
                className="add_to_cart_btn"
                onClick={() => {
                  cartHandle();
                }}
              >
                Add to cart
              </button>
            </div>
            <div>
              <h3>DELIVERY OPTIONS</h3>
              <input
                className="pincode_input"
                type="text"
                placeholder="Enter pincode"
              />
              <button className="pincode_check_btn">Check</button>
              <p>
                Please enter PIN code to check delivery time & Pay on Delivery
                Availability
              </p>
              <p className="delivery_text">
                100% Original Products <br />
                Pay on delivery might be available
                <br />
                Easy 30 days returns and exchanges <br />
                Try & Buy might be available
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="similar">
        <h2>Similar Products</h2>
      </div>
      <WomenSlider />
      <Footer />
    </div>
  );
};
