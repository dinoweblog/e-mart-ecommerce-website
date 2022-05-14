import { Navbar } from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProductsData } from "../Redux/Products/action";
import { WomenSlider } from "./Slider";
import { Carousel } from "./Carousel";
import { Footer } from "./Footer";
import "./Styles/Home.css";
import { getCartProductsData } from "../Redux/Cart/action";

export const Home = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProductsData());
    dispatch(getCartProductsData());
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

      <Footer />
    </div>
  );
};
