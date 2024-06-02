import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider, useDispatch} from "react-redux";
import {store} from "./store/Store";
import {loadProduct} from "./store/Action";
import {Outlet} from "react-router-dom";

function App() {
    const [categorizedProducts, setCategorizedProducts] = useState([]);
    useEffect(() => {
        fetch('/jsondata/homepage_category_products.json')
            .then(response => response.json())
            .then(data => setCategorizedProducts(data));
    }, []);

    const dispatch = useDispatch();
    useEffect(() => { // khi load lên tự động thêm store
        dispatch(loadProduct(categorizedProducts));
    })
  return (
        <div className="App">
            <Outlet></Outlet>
        </div>
  );
}

export default App;
