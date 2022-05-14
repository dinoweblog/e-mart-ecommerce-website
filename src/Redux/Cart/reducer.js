import {
  CART_PRODUCTS_ERROR,
  CART_PRODUCTS_LOADING,
  CART_PRODUCTS_SUCCESS,
} from "./action";

const initialState = {
  loading: false,
  error: false,
  cart_products: [],
};

export const cartProductsReducer = (
  store = initialState,
  { type, payload }
) => {
  switch (type) {
    case CART_PRODUCTS_LOADING:
      return { ...store, loading: true };

    case CART_PRODUCTS_SUCCESS:
      return {
        ...store,
        loading: false,
        error: false,
        cart_products: [...payload],
      };

    case CART_PRODUCTS_ERROR:
      return { ...store, loading: false, error: true };

    default:
      return store;
  }
};
