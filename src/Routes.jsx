import { Route, Routes } from "react-router-dom";
import {
  Address,
  Checkout,
  Login,
  OrderConfirm,
  OrderPage,
  Payment,
  ProductDetailsPage,
  Register,
  SearchPage,
  WishlistPage,
  ProductsPage,
  Home,
} from "./page";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop/women" element={<ProductsPage />} />
      <Route path="/product/:id/:url_title" element={<ProductDetailsPage />} />
      <Route path="/checkout/confirm" element={<OrderConfirm />} />
      <Route path="/user/register" element={<Register />} />
      <Route path="/user/login" element={<Login />} />
      <Route
        path="/checkout/cart"
        element={
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        }
      />
      <Route
        path="/checkout/payment"
        element={
          <ProtectedRoute>
            <Payment />
          </ProtectedRoute>
        }
      />
      <Route
        path="/checkout/address"
        element={
          <ProtectedRoute>
            <Address />
          </ProtectedRoute>
        }
      />
      <Route
        path="/YourOrder"
        element={
          <ProtectedRoute>
            <OrderPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/wishlist"
        element={
          <ProtectedRoute>
            <WishlistPage />
          </ProtectedRoute>
        }
      />
      <Route path="/search=:search_text" element={<SearchPage />} />
    </Routes>
  );
};

export default AppRoutes;
