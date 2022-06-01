import {
  SEARCH_PRODUCTS_ERROR,
  SEARCH_PRODUCTS_LOADING,
  SEARCH_PRODUCTS_SUCCESS,
} from "./action";

const initialState = {
  loading: false,
  error: false,
  search_products: [],
};

export const searchProductsReducer = (
  store = initialState,
  { type, payload }
) => {
  switch (type) {
    case SEARCH_PRODUCTS_LOADING:
      return { ...store, loading: true };

    case SEARCH_PRODUCTS_SUCCESS:
      return {
        ...store,
        loading: false,
        error: false,
        search_products: [...payload],
      };

    case SEARCH_PRODUCTS_ERROR:
      return { ...store, loading: false, error: true };

    default:
      return store;
  }
};
