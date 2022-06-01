export const SEARCH_PRODUCTS_LOADING = "SEARCH_PRODUCTS_LOADING";
export const SEARCH_PRODUCTS_SUCCESS = "SEARCH_PRODUCTS_SUCCESS";
export const SEARCH_PRODUCTS_ERROR = "SEARCH_PRODUCTS_ERROR";

export const getSearchProductsLoading = () => ({
  type: SEARCH_PRODUCTS_LOADING,
});

export const getSearchProductsSuccess = (payload) => ({
  type: SEARCH_PRODUCTS_SUCCESS,
  payload,
});

export const getSearchProductsError = () => ({
  type: SEARCH_PRODUCTS_ERROR,
});

export const getSearchProductsData = (productName) => (dispatch) => {
  dispatch(getSearchProductsLoading());

  fetch(
    `https://emart-server.herokuapp.com/products/search?search=${productName}`
  )
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      dispatch(getSearchProductsSuccess(res.products));
    })
    .catch((error) => dispatch(getSearchProductsError(error)));
};
