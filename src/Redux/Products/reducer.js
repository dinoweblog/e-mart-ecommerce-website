import { PRODUCTS_ERROR, PRODUCTS_LOADING, PRODUCTS_SUCCESS } from "./action";

const initialState = {
  loading: false,
  error: false,
  products: [],
};

export const productsReducer = (store = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCTS_LOADING:
      return { ...store, loading: true };

    case PRODUCTS_SUCCESS:
      return { ...store, loading: false, error: false, products: [...payload] };

    case PRODUCTS_ERROR:
      return { ...store, loading: false, error: true };

    default:
      return store;
  }
};
