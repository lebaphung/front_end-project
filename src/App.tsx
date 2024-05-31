import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider, useDispatch} from "react-redux";
import {store} from "./store/Store";
import ProductList from "./component/ProductList";
import {loadProduct} from "./store/Action";
import {products} from "./data/ProductData";
import {Outlet} from "react-router-dom";

function App() {
    const dispatch = useDispatch();
    useEffect(() => { // khi load lên tự động thêm store
        dispatch(loadProduct(products));
        // dispatch(loadProduct(products));
    })
  return (
        <div className="App">
            <Outlet></Outlet>
        </div>
  );
}

export default App;
