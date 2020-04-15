// import { createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
// import cartReducer from "./components/Products/reducers/cartReducer";
// const initState = {};

// const middleware = [thunk];

// export const giveMeStore = () => {
//   const store = createStore(
//     cartReducer,
//     initState,
//     compose(
//       applyMiddleware(...middleware)
//       // window.__REDUX_DEVTOOLS_EXTENSION__ &&
//       //   window.__REDUX_DEVTOOLS_EXTENSION__()
//     )
//   );
//   //user contains the TOKEN
//   store.subscribe(() => {
//     store.getState();
//   });
//   return store;
// };

// export default giveMeStore;
