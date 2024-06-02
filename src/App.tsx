import React, { useEffect, useState } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { store } from './store/Store';
import {loadProduct} from './store/Action';
import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
    const [homeCategorizedProducts, setHomeCategorizedProducts] = useState([]);
    const [productPageCategorizedProducts, setProductPageCategorizedProducts] = useState([]);

    useEffect(() => {
        fetch('/jsondata/homepage_category_products.json')
            .then(response => response.json())
            .then(data => setHomeCategorizedProducts(data))
            .catch(error => console.error('Lỗi khi tải dữ liệu:', error));
    }, []);

    useEffect(() => {
        fetch('/jsondata/productpage_category_products.json')
            .then(response => response.json())
            .then(data => setProductPageCategorizedProducts(data))
            .catch(error => console.error('Lỗi khi tải dữ liệu:', error));
    }, []);

    const dispatch = useDispatch();
    useEffect(() => {
        if (productPageCategorizedProducts.length > 0) {
            dispatch(loadProduct(productPageCategorizedProducts));
        }
    }, [dispatch, productPageCategorizedProducts]);


    return (
        <div className="App">
            <Outlet context={{ homeCategorizedProducts, productPageCategorizedProducts }} />
        </div>
    );
}

export default App;
