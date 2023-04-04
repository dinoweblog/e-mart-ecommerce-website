import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Footer } from "./footer/Footer";
import { Navbar } from "./header/Navbar";
import { ProductCard } from "./productPage/ProductCard";
import "./Styles/Wishlist.css";

export const SearchPage = () => {
  const { loading, search_products } = useSelector(
    (state) => state.searchProducts
  );

  useEffect(() => {
    document.title = "Search | e-mart shopping platform";
  }, []);

  return (
    <div id="wishlist_container">
      <Navbar />
      {loading ? (
        <div className="all_products loading_gif">
          <img
            src="https://flevix.com/wp-content/uploads/2020/01/Preloader.gif"
            alt=""
          />
        </div>
      ) : (
        <div>
          {search_products.length === 0 ? (
            <div className="wishlist_container">
              <div className="empty_wishlist">
                <div>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2945/2945609.png"
                    alt=""
                  />
                </div>

                <div>
                  <h2>Empty Search Result!</h2>
                </div>
              </div>
            </div>
          ) : (
            <div className="wishlist_container search_container">
              <h1>Search Result</h1>
              <div className=" wishlist_products search_products">
                {search_products.map((e, index) => (
                  <ProductCard
                    key={e._id}
                    id={e._id}
                    imageURL={e.imageURL}
                    name={e.name}
                    oldPrice={e.oldPrice}
                    newPrice={e.newPrice}
                    off={e.off}
                    category={e.category}
                    color={e.color}
                    size={e.size}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
      <Footer />
    </div>
  );
};
