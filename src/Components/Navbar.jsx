import React, { useEffect, useState } from "react";
import "./Styles/Nav2.css";

import { GiHamburgerMenu } from "react-icons/gi";

import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCartProductsData } from "../Redux/Cart/action";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const dispatch = useDispatch();
  const { userId, token } = useSelector((state) => state.login);
  const { quantity } = useSelector((state) => state.cart_products);

  useEffect(() => {
    dispatch(getCartProductsData(userId, token));
  }, []);

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
              <Link to={"/"}>Men</Link>
            </li>
            <li>
              <Link to={"/shop/women"}>Women</Link>
            </li>
            <li>
              <Link to={"/"}>Kids</Link>
            </li>
            <li>
              <Link to={"/"}>Best Collection</Link>
            </li>
            <li>
              <Link to={"/user/register"}>Signup</Link>
            </li>
            <li>
              <Link to={"/user/login"}>Login</Link>
            </li>
          </ul>
        </div>

        {showMenu ? (
          <div className=" mobile_menu_link">
            <ul className="mobile_navbar_menu">
              <li>
                <Link to={"/"}>Men</Link>
              </li>
              <li>
                <Link to={"/shop/women"}>Women</Link>
              </li>
              <li>
                <Link to={"/"}>Kids</Link>
              </li>
              <li>
                <Link to={"/"}>Best Collection</Link>
              </li>
              <li>
                <Link to={"/user/register"}>Signup</Link>
              </li>
              <li>
                <Link to={"/user/login"}>Login</Link>
              </li>
            </ul>
          </div>
        ) : null}

        <div className="search_field">
          <input
            id="search_input"
            type="text"
            placeholder="Search for products"
          />
          <button id="search_btn">
            <i className="bx bx-search"></i>
          </button>
        </div>

        {/* 3rd social media links */}
        <div id="second_menu_section">
          <ul className="second_menu_section_desktop">
            <li>
              <Link to={"/"}>
                <i className="bx bx-user"></i>
                <p>Profile</p>
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <i className="bx bx-heart"></i>
                <p>Wishlist</p>
              </Link>
            </li>
            <li id="cart_btn">
              <Link to={"/checkout/cart"}>
                <i className="bx bx-cart-add"></i>
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
            <GiHamburgerMenu style={{ fontSize: "2.3rem", color: "#282c3f" }} />
          </a>
        </div>
      </nav>
    </>
  );
};
