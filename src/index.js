import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import cartReducer from './components/Products/reducers/cartReducer';
import { Provider } from 'react-redux';
// import * as firebase from "firebase";
import { createStore } from 'redux';
const store = createStore(cartReducer);
// var config = {
//     apiKey: "AIzaSyBjxu8fvzv-g7_o_uOigYRwhBvxBt3Q14Q",
//     authDomain: "shop-e6864.firebaseapp.com",
//     databaseURL: "https://shop-e6864.firebaseio.com",
//     projectId: "shop-e6864",
//     storageBucket: "shop-e6864.appspot.com",
//     messagingSenderId: "796864063112",
//     appId: "1:796864063112:web:90ef91f5691d6fac3ba13d",
//     measurementId: "G-F7V2ZZH6B3"};
//     firebase.initializeApp(config);
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
// If you want your app to work offlAppine and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
