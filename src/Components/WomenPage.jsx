import "./Styles/Products.css";
import { Navbar } from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getProductsData } from "../Redux/Products/action";
import { ProductCard } from "./ProductCard";
import { Footer } from "./Footer";

export const WomenPage = () => {
  const dispatch = useDispatch();
  const [sortVal, setSortVal] = useState("");
  const [filterCatVal, setFilterCatVal] = useState("");
  const [filterDisVal, setFilterDisVal] = useState();
  const [womenProduct, setWomenProduct] = useState([]);

  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProductsData());
  }, []);

  useEffect(() => {
    setWomenProduct([...products]);
  }, [products, dispatch]);

  const filterByCategory = (e) => {
    const type = e.target.value;
    setFilterCatVal(type);

    const items = products.filter(
      (el) => el.category.toLowerCase() === type.toLowerCase()
    );

    setWomenProduct([...items]);
  };

  const filterByDiscount = (e) => {
    const type = e.target.value;
    setFilterDisVal(type);
    console.log(type);

    const items = products.filter((el) => Number(el.off) >= type);

    setWomenProduct([...items]);
  };

  const SortByCost = (e) => {
    setSortVal(e.target.value);
    const t =
      e.target.value === "price_asc"
        ? products.sort((a, b) => {
            return a.newPrice - b.newPrice;
          })
        : products.sort((a, b) => {
            return b.newPrice - a.newPrice;
          });

    setSortVal("");
    setWomenProduct([...t]);
  };


  return (
    <div>
      <Navbar />

      <div className="products_container">
        <div className="filter_section">
          <div className="top_title">
            FILTERS
            <span className="clear_filter">CLEAR ALL</span>
          </div>
          <div className="filter_by">
            <div className="filter_types categories_container">
              <span className="filters_types_header">Categories</span>
              <ul className="filter_categories_list">
                <li>
                  <label className="common_customCheckbox filter_categories_label">
                    <input
                      type="checkbox"
                      value="western"
                      checked={filterCatVal === "western"}
                      onChange={filterByCategory}
                    />
                    Western Wear
                    <div className="common_checkboxIndicator"></div>
                  </label>
                </li>
                <li>
                  <label className="common_customCheckbox filter_categories_label">
                    <input
                      type="checkbox"
                      value="indian"
                      checked={filterCatVal === "indian"}
                      onChange={filterByCategory}
                    />
                    Indian Wear
                  </label>
                </li>
              </ul>
            </div>
            <div className="filter_types discount_container">
              <span className="filters_types_header">Discount</span>
              <ul className="filter_discount_list">
                <li>
                  <label className="common_customCheckbox filter_discount_label">
                    <input
                      type="checkbox"
                      value={70}
                      checked={filterDisVal == 70}
                      onChange={filterByDiscount}
                    />
                    70% and above
                    <div className="common_checkboxIndicator"></div>
                  </label>
                </li>
                <li>
                  <label className="common_customCheckbox filter_discount_label">
                    <input
                      type="checkbox"
                      value={60}
                      checked={filterDisVal == 60}
                      onChange={filterByDiscount}
                    />
                    60% and above
                  </label>
                </li>
                <li>
                  <label className="common_customCheckbox filter_discount_label">
                    <input
                      type="checkbox"
                      value={50}
                      checked={filterDisVal == 50}
                      onChange={filterByDiscount}
                    />
                    50% and above
                  </label>
                </li>
                <li>
                  <label className="common_customCheckbox filter_discount_label">
                    <input
                      type="checkbox"
                      value={40}
                      checked={filterDisVal == 40}
                      onChange={filterByDiscount}
                    />
                    40% and above
                  </label>
                </li>
                <li>
                  <label className="common_customCheckbox filter_discount_label">
                    <input
                      type="checkbox"
                      value={30}
                      checked={filterDisVal == 30}
                      onChange={filterByDiscount}
                    />
                    30% and above
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="products_section">
          <div className="top_title">
            <div className="sort_by">
              Sort by : <span>Recommended</span>
              <ul className="sort_list">
                <li>
                  <label className="sort_label ">
                    <input
                      type="radio"
                      onChange={SortByCost}
                      checked={sortVal == "price_desc"}
                      value="price_desc"
                    />
                    Price: High to Low
                  </label>
                </li>
                <li>
                  <label className="sort_label ">
                    <input
                      type="radio"
                      onChange={SortByCost}
                      checked={sortVal == "price_asc"}
                      value="price_asc"
                    />
                    Price: Low to High
                  </label>
                </li>
              </ul>
            </div>
          </div>

          <div className="all_products">
            {womenProduct.map((e) => (
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
      </div>
      <Footer />
    </div>
  );
};
