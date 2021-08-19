import SHOP_DATA from "../../pages/shop/shop.data";
import { ShopActionTypes } from "./shop.types";

const INITIAL_STATE = {
  items: null,
  isFetching: false,
  errorMessage: undefined,
};

export const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      };
    case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: action.payload,
      };

    case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
