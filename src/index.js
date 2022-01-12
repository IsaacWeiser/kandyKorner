import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import kandyKorner from './KandyKorner.js';
import reportWebVitals from './reportWebVitals';
import {LocationList} from './components/locations/locations.js'
import {ProductList} from './components/products/products.js'

ReactDOM.render(
  <React.StrictMode>
    <LocationList />
    <ProductList />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
