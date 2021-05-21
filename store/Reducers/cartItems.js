import { ADD_ITEM, REMOVE_ITEM, CLEAR_CART } from "../constant";

export const cartItems = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];
    case REMOVE_ITEM:
      return state.filter((i) => i != action.payload);
    case CLEAR_CART:
      return [];
  }
  return state;
};
