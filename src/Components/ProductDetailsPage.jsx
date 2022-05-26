import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import "./Styles/ProductDetails.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartProductsData } from "../Redux/Cart/action";
import { WomenSlider } from "./Slider";
import { SizeDiv } from "./StyleComponent";

export const ProductDetailsPage = () => {
  const [img, setImg] = useState();
  const [size, setSize] = useState([]);
  const [sizeSelect, setSizeSelect] = useState(true);
  const [selectClass, setSelectClass] = useState("");
  const [cartAdd, setCartAdd] = useState(false);
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const { cart_products } = useSelector((state) => state.cart_products);
  const { products } = useSelector((state) => state.products);
  const { userId, token, isAuthenticated } = useSelector(
    (state) => state.login
  );

  useEffect(() => {
    findData();
  }, []);

  const findData = () => {
    fetch(`https://emart-server.herokuapp.com/products/${id}`)
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
    } else {
      setSizeSelect(false);
    }
  };

  console.log(selectClass);

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
                    eachDiv={selectClass}
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

            <div>
              <button
                className="add_to_cart_btn"
                onClick={() => {
                  isAuthenticated === "true"
                    ? cartHandle()
                    : navigate("/user/login");
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
