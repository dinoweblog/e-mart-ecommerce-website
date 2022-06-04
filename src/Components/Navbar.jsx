import React, { useEffect, useState } from "react";
import "./Styles/Nav2.css";

import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";

import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCartProductsData } from "../Redux/Cart/action";
import { getLogout } from "../Redux/Login/action";
import { getSearchProductsData } from "../Redux/Search/action";
import { getVisitURL } from "../Redux/VisitURL/action";

export const Navbar = ({ active_menu }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showProDrop, setShowProDrop] = useState(false);

  const [productName, setProducctName] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userId, token, isAuthenticated } = useSelector(
    (state) => state.login
  );

  const { wishlist_products } = useSelector((state) => state.wishlistProducts);
  const { quantity } = useSelector((state) => state.cart_products);

  useEffect(() => {
    dispatch(getCartProductsData(userId, token));
  }, []);

  const urlRegex = /\s/g;
  const search_text = productName.toLowerCase().replace(urlRegex, "-");

  const getProductsData = () => {
    dispatch(getSearchProductsData(productName));
    navigate(`/search=${search_text}`);
  };

  return (
    <>
      <nav className="main_nav">
        {/* 1st logo part  */}
        <div className="logo">
          <Link to={"/"}>e-Mart</Link>
        </div>

        {/* 2nd menu part  */}
        <div className="menu_link">
          <ul className="navbar_menu">
            <li>
              <Link to={"/shop/women"}>Men</Link>
            </li>
            <li style={{ borderBottomColor: `${active_menu}` }}>
              <Link to={"/shop/women"}>Women</Link>
            </li>
            <li>
              <Link to={"/shop/women"}>Kids</Link>
            </li>
            <li>
              <Link to={"/shop/women"}>Best Collection</Link>
            </li>
          </ul>
        </div>

        {showMenu ? (
          <div className=" mobile_menu_link">
            <ul className="mobile_navbar_menu">
              <li>
                <Link to={"/shop/women"}>Men</Link>
              </li>
              <li>
                <Link to={"/shop/women"}>Women</Link>
              </li>
              <li>
                <Link to={"/shop/women"}>Kids</Link>
              </li>
              <li>
                <Link to={"/shop/women"}>Best Collection</Link>
              </li>
            </ul>
          </div>
        ) : null}

        <div className="search_field">
          <input
            id="search_input"
            type="text"
            autoComplete="on"
            placeholder="Search for products"
            onChange={(e) => setProducctName(e.target.value)}
          />
          <button
            className={productName === "" ? "search_btn_disable" : null}
            id="search_btn"
            onClick={() => {
              getProductsData();
            }}
          >
            <i className="bx bx-search"></i>
          </button>
        </div>

        {/* 3rd social media links */}
        <div id="second_menu_section">
          <ul className="second_menu_section_desktop">
            <li className="profile_btn">
              <Link
                to={"#"}
                onClick={() => {
                  setShowProDrop(!showProDrop);
                }}
              >
                {isAuthenticated === "false" ? (
                  <i className="bx bx-user"></i>
                ) : (
                  <i className="bx bx-user-circle"></i>
                )}

                <p>Profile</p>
              </Link>
              {showProDrop && isAuthenticated === "false" ? (
                <div id="profile_drop_down">
                  <p>
                    <span style={{ marginBottom: "7px" }}>Welcome</span> <br />{" "}
                    To access account and manage orders
                  </p>
                  <Link to={"/user/register"}>Signup</Link>

                  <Link to={"/user/login"}>Login</Link>
                  <div>
                    <Link to={"/YourOrder"}>Your Order</Link>
                  </div>
                </div>
              ) : null}

              {showProDrop && isAuthenticated === "true" ? (
                <div id="profile_drop_down">
                  <p>
                    <span>Welcome</span> <br /> To access account and manage
                    orders
                  </p>
                  <div className="your_order_btn">
                    <Link to={"/YourOrder"}>Your Order</Link>
                  </div>
                  <Link
                    to={""}
                    onClick={() => {
                      window.reload();
                      dispatch(getLogout());
                    }}
                  >
                    Logout
                  </Link>
                </div>
              ) : null}
            </li>
            <li>
              <Link to={"/wishlist"}>
                {wishlist_products.length === 0 ? (
                  <i className="bx bx-heart"></i>
                ) : (
                  <i className="bx bxs-heart"></i>
                )}
                <p>Wishlist</p>
              </Link>
            </li>
            <li id="cart_btn">
              <Link to={"/checkout/cart"}>
                <i className="bx bx-cart"></i>
                <p>Cart</p>
              </Link>
              {quantity > 0 ? (
                <span className="cart_count">{quantity}</span>
              ) : null}
            </li>
          </ul>
        </div>
        {/* hamburget menu start  */}
        <div className="responsive_btn">
          <a href="#" onClick={() => setShowMenu(!showMenu)}>
            {showMenu ? (
              <FiX style={{ fontSize: "2.3rem", color: "#282c3f" }} />
            ) : (
              <FiMenu style={{ fontSize: "2.3rem", color: "#282c3f" }} />
            )}
          </a>
        </div>
      </nav>
    </>
  );
};
