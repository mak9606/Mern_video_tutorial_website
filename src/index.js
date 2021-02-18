import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware,compose,createStore } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import reducers  from "./reducers/userreducers/index";
import {initialState}  from "./reducers/userreducers/index";



const store=createStore(reducers,initialState,compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


reportWebVitals();
