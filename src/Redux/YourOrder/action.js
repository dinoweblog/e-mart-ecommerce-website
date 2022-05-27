export const ORDER_PRODUCTS_LOADING = "ORDER_PRODUCTS_LOADING";
export const ORDER_PRODUCTS_SUCCESS = "ORDER_PRODUCTS_SUCCESS";
export const ORDER_PRODUCTS_ERROR = "ORDER_PRODUCTS_ERROR";

export const getOrderProductsLoading = () => ({
  type: ORDER_PRODUCTS_LOADING,
});

export const getOrderProductsSuccess = (payload) => ({
  type: ORDER_PRODUCTS_SUCCESS,
  payload,
});

export const getOrderProductsError = () => ({
  type: ORDER_PRODUCTS_ERROR,
});

export const getOrderProductsData = (userId, token) => (dispatch) => {
  dispatch(getOrderProductsLoading());

  fetch(`https://emart-server.herokuapp.com/your-order/items/${userId}`, {
    method: "GET",
    headers: {
      "Content-Type": "Application/json",
      Authorization: "Bearer " + token,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log("empRes", res);
      dispatch(getOrderProductsSuccess(res));
    })
    .catch((error) => dispatch(getOrderProductsError()));
};
