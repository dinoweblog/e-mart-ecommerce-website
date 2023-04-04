import { Navbar } from "../header/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProductsData } from "../../Redux/Products/action";
import { WomenSlider } from "../sliders/Slider";
import { Carousel } from "../sliders/Carousel";
import { Footer } from "../footer/Footer";
import "../Styles/Home.css";
import { BigCard } from "./BigCard";
import { getVisitURL } from "../../Redux/VisitURL/action";

export const Home = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    document.title = "Home | e-mart shopping platform";
    dispatch(getVisitURL("/"));
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getProductsData());
  }, [dispatch]);

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
