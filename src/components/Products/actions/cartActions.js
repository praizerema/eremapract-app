import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  ADD_SHIPPING,
  VIEW_ITEM,
  SHOW_VIEW,
  MEN_PRODUCT,
  WOMEN_PRODUCT,
  KIDS_PRODUCT
} from "./action-types/cart-actions";
import { db } from "../../Firebase/firebase";

export const getMenProduct = items => {
  return new Promise((resolve, reject) => {
    let item = {};
    let data = [];
    db.collection("products")
      .where("category", "==", "k3J2aYP7jC7U8Z3Np3wMmen")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          item = { id: doc.id, ...doc.data() };
          // item = { id: doc.id, img: .image};

          data.push(item);
        });
        resolve(data);
      })
      .catch(error => reject(error));
  });
};
export const getWomenProduct = items => {
  return new Promise((resolve, reject) => {
    let item = {};
    let data = [];
    db.collection("products")
      .where("category", "==", "Uf596R3j0bprpvY3bObxwomen")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          item = { id: doc.id, ...doc.data() };
          // item = { id: doc.id, img: .image};

          data.push(item);
        });
        resolve(data);
      })
      .catch(error => reject(error));
  });
};
export const getKidsProduct = items => {
  return new Promise((resolve, reject) => {
    let item = {};
    let data = [];
    db.collection("products")
      .where("category", "==", "zZCvbeEmzGCoeKMRxl0ckids")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          item = { id: doc.id, ...doc.data() };
          // item = { id: doc.id, img: .image};

          data.push(item);
        });
        resolve(data);
      })
      .catch(error => reject(error));
  });
};

//add cart action
export const getMenProductDis = item => {
  return {
    type: MEN_PRODUCT,
    item
  };
};
export const getKidsProductDis = item => {
  return {
    type: KIDS_PRODUCT,
    item
  };
};
export const getWomenProductDis = item => {
  console.log(item)
  return {
    type: WOMEN_PRODUCT,
    item
    
  };
};
//add cart action
export const addToCart = item => {
  return {
    type: ADD_TO_CART,
    item
  };
};
//view item action
export const viewItem = data => {
  console.log(data)
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
