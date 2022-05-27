export const OrderProductCard = ({
  imageURL,
  name,
  newPrice,
  off,
  category,
  description,
}) => {
  return (
    <div className="checkout_div cart_items order_product">
      <div className="order_img_div">
        <img src={imageURL} alt="" />
      </div>
      <div className="product_title_sec">
        <h2 className="">{name}</h2>
        <p className="product_desc product_desc_card">{description}</p>
        <p className="product_price">
          <span className="new_price">
            Rs. {Intl.NumberFormat("en-IN").format(newPrice)}
          </span>
        </p>
        <button className="order_cancel_btn">Order Cancel</button>
      </div>
    </div>
  );
};
