import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import "./Styles/ProductDetails.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartProductsData } from "../Redux/Cart/action";
import { WomenSlider } from "./Slider";
import { SizeDiv } from "./StyleComponent";
import { getWishlistProductsData } from "../Redux/Wishlist/action";
import { getVisitURL } from "../Redux/VisitURL/action";
import { API_URL } from "../API";

export const ProductDetailsPage = () => {
  const [img, setImg] = useState();
  const [size, setSize] = useState([]);
  const [sizeSelect, setSizeSelect] = useState(true);
  const [selectClass, setSelectClass] = useState("");
  const [cartAdd, setCartAdd] = useState(false);
  const [data, setData] = useState({});
  const [check, setCheck] = useState(true);
  const [wishCheck, setWishCheck] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const { cart_products } = useSelector((state) => state.cart_products);
  const { products } = useSelector((state) => state.products);
  const { userId, token, isAuthenticated } = useSelector(
    (state) => state.login
  );

  useEffect(() => {
    checkingCartItem();
    checkingWishlistItem();
  }, [id]);

  useEffect(() => {
    findData();
  }, [id]);

  useEffect(() => {
    document.title = `${data.name} | e-mart`;
    dispatch(getVisitURL(`/product/${id}/${data.name}`));
  }, [data]);

  const findData = () => {
    fetch(`${API_URL}/products/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setData({ ...res.product });
        setImg(res.product.imageURL);
        setSize([...res.product.size]);
      })
      .catch((error) => console.log(error));
  };

  const cartHandle = () => {
    if (cartAdd) {
      fetch(`${API_URL}/cart/items`, {
        method: "POST",
        body: JSON.stringify({ productId: id, userId, quantity: 1 }),
        headers: {
          "Content-Type": "Application/json",
          Authorization: "Bearer " + token,
        },
      })
        .then((res) => dispatch(getCartProductsData(userId, token)))

        .catch((error) => console.log(error));
    } else {
      setSizeSelect(false);
    }
  };

  ///items/find/:userId/:id
  const checkingCartItem = () => {
    fetch(
      `${API_URL}/cart/items/find/${userId}/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "Application/json",
          Authorization: "Bearer " + token,
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        setCheck(res);
      })
      .catch((error) => console.log(error));
  };

  const checkingWishlistItem = () => {
    fetch(
      `${API_URL}/wishlist/items/find/${userId}/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "Application/json",
          Authorization: "Bearer " + token,
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        setWishCheck(res);
      })
      .catch((error) => console.log(error));
  };

  const wishlistHandle = () => {
    fetch(`${API_URL}/wishlist/items`, {
      method: "POST",
      body: JSON.stringify({ productId: id, userId }),
      headers: {
        "Content-Type": "Application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => {
        dispatch(getWishlistProductsData(userId, token));
        checkingWishlistItem();
      })

      .catch((error) => console.log(error));
  };
  const how = () => {};

  return (
    <div>
      <Navbar />
      <div className="outer_container">
        <div className="inner_container">
          <div className="img_div">
            <div className="small_img">
              <div
                onClick={() => {
                  setImg(data.imageURL);
                }}
              >
                <img src={data.imageURL} alt="" />
              </div>
              <div
                onClick={() => {
                  setImg(data.img1);
                }}
              >
                <img src={data.img1} alt="" />
              </div>
              <div
                onClick={() => {
                  setImg(data.img2);
                }}
              >
                <img src={data.img2} alt="" />
              </div>
              <div
                onClick={() => {
                  setImg(data.img3);
                }}
              >
                <img src={data.img3} alt="" />
              </div>
              <div
                onClick={() => {
                  setImg(data.img4);
                }}
              >
                <img src={data.img4} alt="" />
              </div>
            </div>
            <div className="big_img">
              <img src={img} alt="" />
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
              <SizeDiv className="product_size">
                {size.map((e, i) => (
                  <div
                    key={i}
                    className={`single_size_class ${
                      selectClass === i ? "active" : ""
                    }`}
                    eachdiv={selectClass}
                    onClick={() => {
                      setSizeSelect(true);
                      setCartAdd(true);
                      setSelectClass(i);
                    }}
                  >
                    {e}
                  </div>
                ))}
              </SizeDiv>
              {sizeSelect ? (
                <p> </p>
              ) : (
                <p style={{ color: "red" }}>Please select product size</p>
              )}
            </div>

            <div className="cart_btn_container">
              {check ? (
                <button
                  className="add_to_cart_btn"
                  onClick={() => {
                    isAuthenticated === "true"
                      ? cartHandle()
                      : navigate("/user/login");

                    isAuthenticated === "true"
                      ? checkingCartItem()
                      : navigate("/user/login");
                  }}
                >
                  <i className="bx bx-cart-add"></i> ADD TO CART
                </button>
              ) : (
                <button disabled className="add_to_cart_btn">
                  <i className="bx bx-cart-add"></i> ALREADY ADDED
                </button>
              )}

              {wishCheck ? (
                <button
                  className={`add_to_cart_btn wishlist_btn ${
                    !check ? "disabled_btn" : null
                  }`}
                  onClick={() => {
                    isAuthenticated === "true"
                      ? wishlistHandle()
                      : navigate("/user/login");
                  }}
                >
                  <i className="bx bx-heart"></i> WISHLIST
                </button>
              ) : (
                <button disabled className="wishlist_btn wishlist_btn2">
                  <i className="bx bxs-heart"></i> WISHLIST
                </button>
              )}
            </div>
            <div>
              <h3>DELIVERY OPTIONS</h3>
              <input
                className="pincode_input"
                type="text"
                placeholder="Enter pincode"
              />
              <button className="pincode_check_btn">Check</button>
              <p style={{ marginTop: "6px" }}>
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
        <h2>SIMILAR PRODUCTS</h2>
      </div>
      <WomenSlider products={products} />
      <Footer />
    </div>
  );
};
