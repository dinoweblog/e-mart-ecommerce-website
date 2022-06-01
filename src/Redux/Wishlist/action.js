export const WISHLIST_PRODUCTS_LOADING = "WISHLIST_PRODUCTS_LOADING";
export const WISHLIST_PRODUCTS_SUCCESS = "WISHLIST_PRODUCTS_SUCCESS";
export const WISHLIST_PRODUCTS_ERROR = "WISHLIST_PRODUCTS_ERROR";

export const getWishlistProductsLoading = () => ({
  type: WISHLIST_PRODUCTS_LOADING,
});

export const getWishlistProductsSuccess = (payload) => ({
  type: WISHLIST_PRODUCTS_SUCCESS,
  payload,
});

export const getWishlistProductsError = () => ({
  type: WISHLIST_PRODUCTS_ERROR,
});

export const getWishlistProductsData = (userId, token) => (dispatch) => {
  dispatch(getWishlistProductsLoading());

  fetch(`https://emart-server.herokuapp.com/wishlist/items/${userId}`, {
    method: "GET",
    headers: {
      "Content-Type": "Application/json",
      Authorization: "Bearer " + token,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      dispatch(getWishlistProductsSuccess(res));
    })
    .catch((error) => dispatch(getWishlistProductsError(error)));
};
