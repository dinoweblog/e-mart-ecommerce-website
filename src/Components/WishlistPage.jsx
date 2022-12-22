import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../API";
import { getCartProductsData } from "../Redux/Cart/action";
import { getVisitURL } from "../Redux/VisitURL/action";
import {
  getWishlistProductsData,
  getWishlistProductsError,
  getWishlistProductsLoading,
} from "../Redux/Wishlist/action";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import "./Styles/Wishlist.css";
import { WishlistProductCard } from "./WishlistProductCard";

export const WishlistPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, wishlist_products } = useSelector(
    (state) => state.wishlistProducts
  );
  const { user, token, isAuthenticated, userId } = useSelector(
    (state) => state.login
  );

  useEffect(() => {
    document.title = "Wishlist | e-mart shopping platform";

    dispatch(getVisitURL("/wishlist"));
  }, []);

  useEffect(() => {
    dispatch(getWishlistProductsData(userId, token));
  }, []);

  const removeProduct = (wishId) => {
    dispatch(getWishlistProductsLoading());

    fetch(
      `${API_URL}/wishlist/items/delete/${wishId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "Application/json",
          Authorization: "Bearer " + token,
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        dispatch(getWishlistProductsData(userId, token));
      })
      .catch((error) => dispatch(getWishlistProductsError()));
  };

  const moveToCart = (id) => {
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
  };

  if (isAuthenticated === "false") {
    return (
      <div>
        <Navbar />
        <div className="wishlist_container">
          <div className="empty_wishlist">
            <div>
              <img
                src="https://cdn-icons-png.flaticon.com/512/2945/2945609.png"
                alt=""
              />
            </div>

            <div>
              <p>Please Login/Signup!</p>
              <button
                onClick={() => {
                  navigate("/user/login");
                }}
              >
                LOGIN
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

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
          {wishlist_products.length === 0 ? (
            <div className="wishlist_container">
              <div className="empty_wishlist">
                <div>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2945/2945609.png"
                    alt=""
                  />
                </div>

                <div>
                  <p>Empty Wishlist!</p>
                  <button
                    onClick={() => {
                      navigate("/");
                    }}
                  >
                    ADD ITEMS
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="wishlist_container">
              <div className=" wishlist_products">
                {wishlist_products.map((e, index) => (
                  <WishlistProductCard
                    key={e._id}
                    id={e.productId._id}
                    wishId={e._id}
                    imageURL={e.productId.imageURL}
                    name={e.productId.name}
                    newPrice={e.productId.newPrice}
                    oldPrice={e.productId.oldPrice}
                    off={e.productId.off}
                    removeProduct={removeProduct}
                    moveToCart={moveToCart}
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
