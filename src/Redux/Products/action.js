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

export const getProductsData = (page, size, setLoading) => (dispatch) => {
  dispatch(getProductsLoading());
  setLoading(true);
  fetch(
    `https://emart-server.herokuapp.com/products/women?page=${page}&size=${size}`
  )
    .then((res) => res.json())
    .then((res) => {
      dispatch(getProductsSuccess(res));
      setLoading(false);
    })
    .catch((error) => dispatch(getProductsError()));
};
