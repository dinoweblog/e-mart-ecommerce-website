import { Navbar } from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getProductsData } from "../Redux/Products/action";
import { WomenSlider } from "./Slider";
import { Carousel } from "./Carousel";
import { Footer } from "./Footer";
import "./Styles/Home.css";
import { getCartProductsData } from "../Redux/Cart/action";

let count = 1;

export const Home = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const { products } = useSelector((state) => state.products);
  const { user, isAuthenticated } = useSelector((state) => state.login);

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
      <div className="section">
        <div className="section_title">
          <h3>Exclusive collections to explore now</h3>
        </div>
        <WomenSlider />
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
