import { useSelector } from "react-redux";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { OrderProductCard } from "./OrderProductCard";
import "./Styles/OrderPage.css";
export const OrderPage = () => {
  const { cart_products } = useSelector((state) => state.cart_products);

  return (
    <div>
      <Navbar />
      <div className="order_container">
        <div className="order_left"></div>
        <div className="order_right">
          <div>
            {cart_products.map((e, index) => (
              <OrderProductCard
                key={index}
                imageURL={e.imageURL}
                name={e.name}
                description={e.desc}
                newPrice={e.newPrice}
                off={e.off}
                category={e.category}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
