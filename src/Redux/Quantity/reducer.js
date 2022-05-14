import { QUANTITY_ERROR, QUANTITY_LOADING, QUANTITY_SUCCESS } from "./action";

const initialState = {
  loading: false,
  error: false,
  quantity: 0,
};

export const quantityReducer = (store = initialState, { type, payload }) => {
  switch (type) {
    case QUANTITY_LOADING:
      return { ...store, loading: true };

    case QUANTITY_SUCCESS:
      return {
        ...store,
        loading: false,
        error: false,
        quantity: payload,
      };

    case QUANTITY_ERROR:
      return { ...store, loading: false, error: true };

    default:
      return store;
  }
};
