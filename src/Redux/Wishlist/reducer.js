import {
  WISHLIST_PRODUCTS_ERROR,
  WISHLIST_PRODUCTS_LOADING,
  WISHLIST_PRODUCTS_SUCCESS,
} from "./action";

const initialState = {
  loading: false,
  error: false,
  wishlist_products: [],
};

export const wishlistProductsReducer = (
  store = initialState,
  { type, payload }
) => {
  switch (type) {
    case WISHLIST_PRODUCTS_LOADING:
      return { ...store, loading: true };

    case WISHLIST_PRODUCTS_SUCCESS:
      return {
        ...store,
        loading: false,
        error: false,
        wishlist_products: [...payload.wishlist],
      };

    case WISHLIST_PRODUCTS_ERROR:
      return { ...store, loading: false, error: true };

    default:
      return store;
  }
};
