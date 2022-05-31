import {
  ORDER_PRODUCTS_ERROR,
  ORDER_PRODUCTS_LOADING,
  ORDER_PRODUCTS_SUCCESS,
} from "./action";

const initialState = {
  loading: false,
  error: false,
  order_products: [],
  order: [],
  quantity: 0,
  itemQty: [],
  totalAmount: 0,
  date: [],
};

export const orderProductsReducer = (
  store = initialState,
  { type, payload }
) => {
  switch (type) {
    case ORDER_PRODUCTS_LOADING:
      return { ...store, loading: true };

    case ORDER_PRODUCTS_SUCCESS:
      return {
        ...store,
        loading: false,
        error: false,
        order_products: [...payload.orderitems],
        order: [...payload.order],
        quantity: payload.qty,
        itemQty: [...payload.itemQty],
        totalAmount: payload.totalAmount,
        date: [...payload.date],
      };

    case ORDER_PRODUCTS_ERROR:
      return { ...store, loading: false, error: true };

    default:
      return store;
  }
};
