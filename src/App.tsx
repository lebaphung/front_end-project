import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider, useDispatch} from "react-redux";
import store from "./redux/Store";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {loadProducts} from "./redux/Action";
import {Outlet, Route, RouterProvider, Routes} from "react-router-dom";
import {router} from "./router/web";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import VeChungToi from "./components/VeChungToi";
import {SendMailDemo} from "./service.mail/DemoSendEmail";

function App() {
    // lấy dữ liệu từ product.json
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('/jsondata/products.json')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Lỗi khi tải dữ liệu:', error));
    }, []);
    //
    console.log("product for load", products)
    const dispatch = useDispatch();
    // bắn action loadProducs
    useEffect(() => {
        if (products.length > 0) {
            dispatch(loadProducts(products));
        }
    }, [dispatch, products]);

    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/list-product" element={<ProductList/>}/>
                <Route path="/vct" element={<VeChungToi/>}/>
                <Route path="/sendMailDemo" element={<SendMailDemo/>}/>
                {/*<Route path="/:id" element={<ProductDetail/>} loader={loadProduct}/>*/}
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
