import {
  USER_ADDRESS_ERROR,
  USER_ADDRESS_LOADING,
  USER_ADDRESS_SUCCESS,
} from "./action";

const initialState = {
  loading: false,
  error: false,
  address: [],
};

export const addressReducer = (store = initialState, { type, payload }) => {
  switch (type) {
    case USER_ADDRESS_LOADING:
      return { ...store, loading: true };

    case USER_ADDRESS_SUCCESS:
      return {
        ...store,
        loading: false,
        error: false,
        address: [...payload.address],
      };

    case USER_ADDRESS_ERROR:
      return { ...store, loading: false, error: true };

    default:
      return store;
  }
};
