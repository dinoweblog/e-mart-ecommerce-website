import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import { cartProductsReducer } from "./Cart/reducer";

import { productsReducer } from "./Products/reducer";
import { quantityReducer } from "./Quantity/reducer";

export const rootReducer = combineReducers({
  products: productsReducer,
  cart_products: cartProductsReducer,
  quantity: quantityReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
