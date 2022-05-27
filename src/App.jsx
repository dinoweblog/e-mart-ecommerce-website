import logo from "./logo.svg";
import "./App.css";
import { Home } from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import { WomenPage } from "./Components/WomenPage";
import { ProductDetailsPage } from "./Components/ProductDetailsPage";
import { Checkout } from "./Components/Checkout";
import { Address } from "./Components/Address";
import { Payment } from "./Components/Payment";
import { OrderConfirm } from "./Components/OrderConfirm";
import { Register } from "./Components/Register";
import { Login } from "./Components/Login";
import { useSelector } from "react-redux";
import { PrivateRoute } from "./Components/Private/PrivateRoute";
import { OrderPage } from "./Components/OrderPage";

function App() {
  const { isAuthenticated } = useSelector((state) => state.login);
  const { cart_products } = useSelector((state) => state.cart_products);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop/women" element={<WomenPage />} />
      <Route path="/product/:id" element={<ProductDetailsPage />}></Route>
      <Route path="/checkout/cart" element={<Checkout />}></Route>
      <Route path="/checkout/address" element={<Address />}></Route>
      <Route path="/checkout/payment" element={<Payment />}></Route>
      <Route path="/checkout/confirm" element={<OrderConfirm />}></Route>
      <Route path="/user/register" element={<Register />}></Route>
      <Route path="/user/login" element={<Login />}></Route>
      <Route path="/YourOrder" element={<OrderPage />}></Route>
    </Routes>
  );
}

export default App;
