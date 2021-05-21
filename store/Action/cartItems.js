import { ADD_ITEM, REMOVE_ITEM, CLEAR_CART } from "../constant";

export const add = (payload) => {
  return {
    type: ADD_ITEM,
    payload,
  };
};

export const remove = (payload) => {
  return {
    type: REMOVE_ITEM,
    payload,
  };
};

export const clear = () => {
  return {
    type: CLEAR_CART,
  };
};
