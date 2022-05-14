export const QUANTITY_LOADING = "QUANTITY_LOADING";
export const QUANTITY_SUCCESS = "QUANTITY_SUCCESS";
export const QUANTITY_ERROR = "QUANTITY_ERROR";

export const getQuantityLoading = () => ({
  type: QUANTITY_LOADING,
});

export const getQuantitySuccess = (payload) => ({
  type: QUANTITY_SUCCESS,
  payload,
});

export const getQuantityError = () => ({
  type: QUANTITY_ERROR,
});

// export const getQuantityData = () => (dispatch) => {
//   dispatch(getQuantityLoading());

//   fetch("http://localhost:3000/cart_products")
//     .then((res) => res.json())
//     .then((res) => {
//       dispatch(getQuantitySuccess(res));
//     })
//     .catch((error) => dispatch(getQuantityError()));
// };