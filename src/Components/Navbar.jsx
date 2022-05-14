import "./Styles/Navbar.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCartProductsData } from "../Redux/Cart/action";
import { useDispatch, useSelector } from "react-redux";
import { getQuantitySuccess } from "../Redux/Quantity/action";

export const Navbar = () => {
  const dispatch = useDispatch();

  const { cart_products } = useSelector((state) => state.cart_products);

  useEffect(() => {
    dispatch(getCartProductsData());
    dispatch(getQuantitySuccess(cart_products.length))
  }, []);

  return (
    <div className="header">
      <div className="logo">
        <Link to={"/"}>e-Mart</Link>
      </div>
      <ul className="navbar_menu">
        <li>
          <Link to={"/shop/men"}>Men</Link>
        </li>
        <li>
          <Link to={"/shop/women"}>Women</Link>
        </li>
        <li>
          <Link to={"/shop/kids"}>Kids</Link>
        </li>
        <li>
          <Link to={"/shop/best-collection"}>Best Collection</Link>
        </li>
      </ul>

      <div className="search_field">
        <input
          className="search_input"
          type="text"
          placeholder="Search for products"
        />
        <button className="search_btn">
          <i class="bx bx-search"></i>
        </button>
      </div>

      <div className="profile_wish_bag">
        <div className="profile_menu_btn">
          <Link to={"/"}>
            <i className="bx bx-user"></i>
            <p>Profile</p>
          </Link>
        </div>
        <div className="wishlist_menu_btn">
          <Link to={"/"}>
            <i className="bx bx-heart"></i>
            <p>Wishlist</p>
          </Link>
        </div>
        <div>
          <div className="cart_menu_btn">
            <Link to={"/checkout/cart"}>
              <i className="bx bx-shopping-bag"></i>
              <p>Cart</p>
            </Link>
          </div>
          <span className="cart_count">{cart_products.length}</span>
        </div>
      </div>
    </div>
  );
};
