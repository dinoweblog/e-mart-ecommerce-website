import { Navbar } from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getProductsData } from "../Redux/Products/action";
import { WomenSlider } from "./Slider";
import { Carousel } from "./Carousel";
import { Footer } from "./Footer";
import "./Styles/Home.css";
import { BigCard } from "./BigCard";
import { getVisitURL } from "../Redux/VisitURL/action";

export const Home = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    document.title = "Home | e-mart shopping platform";
    dispatch(getVisitURL("/"));
  }, []);

  useEffect(() => {
    dispatch(getProductsData());
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <Carousel />
      <BigCard />
      <div className="section">
        <div className="section_title">
          <h3>Exclusive collections to explore now</h3>
        </div>
        <WomenSlider products={products} />
      </div>

      {/* <UserNameShow name={user.name} /> */}

      <Footer />
    </div>
  );
};
