import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import { addressReducer } from "./Address/reducer";
import { cartProductsReducer } from "./Cart/reducer";
import { loginReducer } from "./Login/reducer";

import { productsReducer } from "./Products/reducer";

export const rootReducer = combineReducers({
  products: productsReducer,
  cart_products: cartProductsReducer,
  login: loginReducer,
  address: addressReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
