import {
  ADD_TO_CART,
  REMOVE_ITEM,
  VIEW_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  SHOW_VIEW,
  MEN_PRODUCT,
  WOMEN_PRODUCT,
  KIDS_PRODUCT
} from "../actions/action-types/cart-actions";
import { ProductsAll } from "../data/products";
import { db } from "../../Firebase/firebase";
const initState = {
  product: [],
  addedItems: [],
  total: 0

  //   showView: false,
  //   viewValue: {}
};


const cartReducer = (state = initState, action) => {
  //INSIDE HOME COMPONENT
  //view

  if (action.type === MEN_PRODUCT) {

    return {
      ...state,
      men_product: action.item
    };
  }
  if (action.type === WOMEN_PRODUCT) {
    console.log(action.item)
    return {
      ...state,
      women_product: action.item
    };
  }
  if (action.type === KIDS_PRODUCT) {
    console.log(action.item)
    return {
      ...state,
      kids_product: action.item
    };
  }

  if (action.type === VIEW_ITEM) {
    console.log(initState.product)
    const data = action.data || {};
    console.log(state.kids_product)
    console.log(state);
    console.log(data.type);
    let addedItem =
      data.type === "women"
        ? state.women_product.find(item => item.id === data.id)
        : data.type === "kids"
        ? state.kids_product.find(item => item.id === data.id)
        : data.type === "men"
        ? state.men_product.find(item => item.id === data.id)
        : {};
      console.log(addedItem.price)
       
    return {
      ...state,
      viewValue: { ...addedItem},

      //   showView: true
    };

  }
  
  if (action.type === SHOW_VIEW) {
    return {
      ...state,
      viewValue: {}
    };
  }

  if (action.type === ADD_TO_CART) {
    console.log(action.item)
    // console.log(addedItems)

    let addedItem = action.item;
    let rqty = addedItem.quantity;
    //check if the action id exists in the addedItems
    let existed_item = state.addedItems.find(
      item => addedItem.id === item.id && addedItem.cart === item.cart
    );
    if (existed_item) {
      existed_item.quantity = existed_item.quantity + rqty;
      return {
        ...state,
        total: state.total + addedItem.price * addedItem.quantity
      };
    } else {
      //calculating the total
      let newTotal = state.total + addedItem.price * addedItem.quantity;
      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: newTotal
      };
    }
  }

  if (action.type === REMOVE_ITEM) {
    let data = action.item;
    let itemToRemove = state.addedItems.find(
      item => data.id === item.id && data.cart === item.cart
    );
    console.log(data.cart);

    let new_items = state.addedItems.filter(
      item => !(data.id === item.id && data.cart === item.cart)
    );

    //calculating the total
    let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
    return {
      ...state,
      addedItems: new_items,
      total: newTotal
    };
  }

  //INSIDE CART COMPONENT
  if (action.type === ADD_QUANTITY) {
    let data = action.item;
    let addedItem = state.addedItems.find(
      item => data.id === item.id && data.cart === item.cart
    );
    addedItem.quantity += 1;
    let newTotal = state.total + addedItem.price;
    return {
      ...state,
      total: newTotal
    };
  }

  if (action.type === SUB_QUANTITY) {
    let data = action.item;
    let addedItem = state.addedItems.find(
      item => data.id === item.id && data.cart === item.cart
    );
    //if the qt == 0 then it should be removed
    if (addedItem.quantity === 1) {
      let new_items = state.addedItems.filter(
        item => !(data.id === item.id && data.cart === item.cart)
      );
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        addedItems: new_items,
        total: newTotal
      };
    } else {
      addedItem.quantity -= 1;
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        total: newTotal
      };
    }
  }
  return state;
};

export default cartReducer;
