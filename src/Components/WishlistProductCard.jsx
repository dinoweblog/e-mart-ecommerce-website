import "./Styles/Products.css";
import { Link } from "react-router-dom";

export const WishlistProductCard = ({
  id,
  wishId,
  imageURL,
  name,
  oldPrice,
  newPrice,
  off,
  removeProduct,
  moveToCart,
}) => {
  return (
    <div className="product_card wishlist_card">
      <button
        className="wishlist_close_btn"
        onClick={() => {
          removeProduct(wishId);
        }}
      >
        <i class="bx bx-x"></i>
      </button>
      <Link to={`/product/${id}`}>
        <div className="product_img_sec">
          <img src={imageURL} alt="" />
        </div>

        <div className="product_details_sec">
          <h2 className="product_title">{name}</h2>
          <p className="product_price">
            <span className="new_price">
              Rs. {Intl.NumberFormat("en-IN").format(newPrice)}
            </span>
            <span className="old_price">
              Rs. {Intl.NumberFormat("en-IN").format(oldPrice)}
            </span>
            <span className="off">({off}% OFF)</span>
          </p>
        </div>
      </Link>
      <div>
        <button
          className="move_to_cart"
          onClick={() => {
            moveToCart(id);
            removeProduct(wishId);
          }}
        >
          MOVE TO CART
        </button>
      </div>
    </div>
  );
};
