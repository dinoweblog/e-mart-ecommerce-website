export const CART_PRODUCTS_LOADING = "CART_PRODUCTS_LOADING";
export const CART_PRODUCTS_SUCCESS = "CART_PRODUCTS_SUCCESS";
export const CART_PRODUCTS_ERROR = "CART_PRODUCTS_ERROR";

export const getCartProductsLoading = () => ({
  type: CART_PRODUCTS_LOADING,
});

export const getCartProductsSuccess = (payload) => ({
  type: CART_PRODUCTS_SUCCESS,
  payload,
});

export const getCartProductsError = () => ({
  type: CART_PRODUCTS_ERROR,
});

export const getCartProductsData = () => (dispatch) => {
  dispatch(getCartProductsLoading());

  fetch("http://localhost:3000/cart_products")
    .then((res) => res.json())
    .then((res) => {
      dispatch(getCartProductsSuccess(res));
    })
    .catch((error) => dispatch(getCartProductsError()));
};
