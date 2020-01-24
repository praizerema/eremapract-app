import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  ADD_SHIPPING,
  VIEW_ITEM,
  SHOW_VIEW
} from "./action-types/cart-actions";

//add cart action
export const addToCart = item => {
  return {
    type: ADD_TO_CART,
    item
  };
};
//view item action
export const viewItem = data => {
  return {
    type: VIEW_ITEM,
    data
  };
};
//view item action
export const showViews = bool => {
  return {
    type: SHOW_VIEW,
    bool
  };
};
//remove item action
export const removeItem = item => {
  return {
    type: REMOVE_ITEM,
    item
  };
};
//subtract qt action
export const subtractQuantity = item => {
  return {
    type: SUB_QUANTITY,
    item
  };
};
//add qt action
export const addQuantity = item => {
  return {
    type: ADD_QUANTITY,
    item
  };
};
