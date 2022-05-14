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

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop/women" element={<WomenPage />} />
      <Route path="/product/:id" element={<ProductDetailsPage />}></Route>
      <Route path="/checkout/cart" element={<Checkout />}></Route>
      <Route path="/checkout/address" element={<Address />}></Route>
      <Route path="/checkout/payment" element={<Payment />}></Route>
      <Route path="/checkout/confirm" element={<OrderConfirm />}></Route>
    </Routes>
  );
}

export default App;
