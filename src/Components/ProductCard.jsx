import "./Styles/Products.css";
import { Link } from "react-router-dom";

export const ProductCard = ({
  id,
  imageURL,
  name,
  oldPrice,
  newPrice,
  off,
  category,
  color,
  size,
}) => {
  return (
    <div className="product_card">
      <Link to={`/product/${id}`}>
        <div className="product_img_sec">
          <img src={imageURL} alt="" />
        </div>
        <div className="product_title_sec">
          <h2 className="product_title">{name}</h2>
          <p className="product_price">
            <span className="new_price">Rs. {newPrice}</span>
            <span className="old_price">Rs. {oldPrice}</span>
            <span className="off">({off}% OFF)</span>
          </p>

          <p className="product_category">{category}</p>
        </div>
      </Link>
    </div>
  );
};
