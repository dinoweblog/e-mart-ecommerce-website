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
  const [show, setShow] = useState(false);
  const { products } = useSelector((state) => state.products);
  const { user, isAuthenticated } = useSelector((state) => state.login);

  useEffect(() => {
    document.title = "Home | e-mart shopping platform";
    dispatch(getVisitURL("/"));
  }, []);

  useEffect(() => {
    dispatch(getProductsData());
  }, []);

  return (
    <div>
      <Navbar />
      <Carousel />

      <div className="section">
        <div className="section_title">
          <h3>Product Category</h3>
        </div>
        <div className="big_card_container" >
          <BigCard
            img="./assets/women.png"
            txt={"Women Clothes"}
            link={"/shop/women"}
          />
          <BigCard
            img="./assets/men.jpg"
            txt={"Men Clothes"}
            link={"/"}
          />

          <BigCard
           img="./assets/kids.jpg"
            txt={"Kids Clothes"}
            link={"/"}
          />
        </div>
      </div>

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
