import React, {useEffect, useState} from 'react';
import './App.css';
import {Provider, useDispatch} from "react-redux";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {loadProducts} from "./redux/Action";
import {Outlet, Route, RouterProvider, Routes, BrowserRouter, redirect} from "react-router-dom";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import VeChungToi from "./components/VeChungToi";
import {SendMailDemo} from "./service.mail/DemoSendEmail";
import ContactUs from "./components/ContactUs";
import Cart from "./components/Cart/Cart";
import 'bootstrap/dist/css/bootstrap.min.css';
import Checkout from "./components/Checkout/Checkout";
import DichVu from "./components/DichVu";
import KTNN from "./components/KTNN";
import LoginCG from "./components/login/LoginCG";

function App() {
    // Lấy dữ liệu từ file json => đưa vào mảng.
    const [products, setProducts] = useState([]);

    /**
     * 1. useEffect(callback) - ít dùng trong thực tế.
     * - Gọi callback mỗi khi component re-render.
     * - Gọi callback sau khi component thêm element vào dom
     * 2. useEffect(callback, [])
     * - Chỉ gọi callback 1 lần sau khi component mounted
     * => Gọi API 1 lần để hiển thị dữ liệu product.
     * 3. useEffect(callback, [deps]
     *
     * --------------- Chung
     * 1. Callback luôn được gọi sau khi component mounted
     */
    useEffect(() => {
        fetch('/jsondata/products.json')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Lỗi khi tải dữ liệu:', error));
    }, []);

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
                <Route path="contact" element={<ContactUs/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/sendMailDemo" element={<SendMailDemo/>}/>
                <Route path="/Checkout" element={<Checkout/>}/>
                <Route path="/DichVu" element={<DichVu/>}/>
                <Route path="/KTNN" element={<KTNN/>}/>

                {/*<Route path="/:id" element={<ProductDetail/>} loader={loadProduct}/>*/}
            </Routes>
            <Footer/>
        </div>

    );
}

export default App;
