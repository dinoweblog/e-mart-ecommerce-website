export const PRODUCTS_LOADING = "PRODUCTS_LOADING";
export const PRODUCTS_SUCCESS = "PRODUCTS_SUCCESS";
export const PRODUCTS_ERROR = "PRODUCTS_ERROR";

export const getProductsLoading = () => ({
  type: PRODUCTS_LOADING,
});

export const getProductsSuccess = (payload) => ({
  type: PRODUCTS_SUCCESS,
  payload,
});

export const getProductsError = () => ({
  type: PRODUCTS_ERROR,
});

export const getProductsData = () => (dispatch) => {
  dispatch(getProductsLoading());

  fetch("https://all-json-server.herokuapp.com/woman_products")
    .then((res) => res.json())
    .then((res) => {
      dispatch(getProductsSuccess(res));
    })
    .catch((error) => dispatch(getProductsError()));
};
