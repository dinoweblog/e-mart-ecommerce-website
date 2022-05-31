import { Navbar } from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getProductsData } from "../Redux/Products/action";
import { WomenSlider } from "./Slider";
import { Carousel } from "./Carousel";
import { Footer } from "./Footer";
import "./Styles/Home.css";
import { getCartProductsData } from "../Redux/Cart/action";
import { BigCard } from "./BigCard";

let count = 1;

export const Home = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const { products } = useSelector((state) => state.products);
  const { user, isAuthenticated } = useSelector((state) => state.login);

  useEffect(() => {
    document.title = "Home | e-mart shopping platform";
  }, []);

  useEffect(() => {
    dispatch(getProductsData());
    if (isAuthenticated === "true" && count === 1) {
      setShow(true);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
      count = 2;
    }, 3000);
  }, []);
  return (
    <div>
      <Navbar />
      <Carousel />

      <div className="big_card_container">
        <BigCard
          img={
            "https://ik.imagekit.io/thestylist/rba/pub/media_rb/HOMEPAGE_IMAGES/05_Apr_22/1_(1).jpg"
          }
          txt={"Women Clothes"}
          link={"/shop/women"}
        />
        <BigCard
          img={
            "https://ik.imagekit.io/thestylist/rba/pub/media_rb/HOMEPAGE_IMAGES/07_Dec_21/Rohit_Bal.png"
          }
          txt={"Men Clothes"}
          link={"/"}
        />

        <BigCard
          img={
            "https://static.hopscotch.in/fstatic/product/202112/09d53750-b439-436b-9375-69497e509349_full.jpg?version=1639389051489&tr=w-1080,c-at_max,n-medium"
          }
          txt={"Kids Clothes"}
          link={"/"}
        />
      </div>
      <div className="section">
        <div className="section_title">
          <h3>Exclusive collections to explore now</h3>
        </div>
        <WomenSlider products={products} />
      </div>

      {show ? (
        <div className="massage_card">
          <p>Welcome {user.name}</p>
        </div>
      ) : null}

      <Footer />
    </div>
  );
};
