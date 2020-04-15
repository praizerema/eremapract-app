import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import * as serviceWorker from "./serviceWorker";
import cartReducer from './components/Products/reducers/cartReducer';
import { Provider } from "react-redux";
// import * as firebase from "firebase";
import Firebase, { FirebaseContext } from "./components/Firebase";
// import giveMeStore from "./store";
// ReactDOM.render(
//   <Provider store={giveMeStore()}>
//     <FirebaseContext.Provider value={new Firebase()}>
//       <App />
//     </FirebaseContext.Provider>
//   </Provider>,
import { createStore } from 'redux';
const store = createStore(cartReducer);
ReactDOM.render(
<Provider store={store}>
<FirebaseContext.Provider value={new Firebase()}>
<App />
</FirebaseContext.Provider>
</Provider>,
  document.getElementById("root")
);
// If you want your app to work offlAppine and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
