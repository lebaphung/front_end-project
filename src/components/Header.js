import './style.css'
import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingBag} from '@fortawesome/free-solid-svg-icons'
// npm install react-fast-marquee
import Marquee from "react-fast-marquee";
// npm install react-bootstrap bootstrap
import {Dropdown} from "react-bootstrap";
// npm install react-router-dom
import {BrowserRouter, Link, useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {searchProducts} from "../redux/Action";
import Cart from "./Cart/Cart";
import Search from "./Search";
import CategoryFilter from "./CategoryFilter";
// npm install react-icons
import { PiList } from "react-icons/pi";
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
    const location = useLocation();
    const [search, setSearch] = useState("");
    const products = useSelector(state => {
        const products = state.products;
        const filter = state.filter;
        const search = state.search;
        return products.filter((p) => {
            const matchsFilter = (filter === "ALL") || (filter !== "ALL" && filter == p.categoryId)//filter co the la str/number nen ==
            const matchsSearch = p.name.toLowerCase().includes(search)
            return matchsFilter && matchsSearch;
        })
    });
    const dispatch = useDispatch();
    const handleSearchChange = (value) => {
        setSearch(value);
        dispatch(searchProducts(value))
    }
    return (
        <header>
            <div>
                <div id="infor" className="d-flex">
                    <Marquee className="w-75">
                        CHÀO MỪNG QUÝ BÀ CON ĐẾN VỚI TRUNG TÂM CÂY GIỐNG
                    </Marquee>
                    <div className="w-50">
                        Địa chỉ: đường 868B, Ấp Mỹ Hòa, Xã Mỹ Hạnh Trung, TX Cai Lậy - Tiền Giang
                    </div>
                </div>
                <div className="header bg-light p-5 text-center w-100 d-flex justify-content-around">
                    <img
                        src="https://trungtamcaygiongtiengiang.com/thumbs/122x100x2/upload/photo/logo-1926.png"
                        alt="Logo"
                    />
                    <div>
                        <h1 className="text-success fw-bold">TRUNG TÂM CÂY GIỐNG</h1>
                        <p className="text-warning fw-bold">"Mang yên tâm đến mọi nhà"</p>
                    </div>
                    <div>
                        <p>Hotline Tư vấn Khách Hàng</p>
                        <div className="d-flex">
                            <div className="d-flex align-items-center">
                                <img
                                    width="40px"
                                    height="30px"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEkYq9eOnHcFex1eaw2QEjCz7k2CsnBq_3IrbUGne6ilXEiWqh7fMl17M1BNv66URcies&usqp=CAU"
                                    alt="Hotline"
                                />
                            </div>
                            <div>
                                <h5 className="text-danger">034567 9887</h5>
                                <h5 className="text-danger">0777403339</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Thanh menu bar */}
            <nav className="navbar navbar-light fixed-div" style={{backgroundColor: "#e3f2fd"}}>
                <div className="container">
                    <div className="link-container">
                        {location.pathname === '/list-product' && (
                            <a className={"link bg-success"} style={{padding: "10px 5px"}} href="/list-product">Danh sách sản phẩm <PiList/></a>
                        )}
                        {location.pathname !== '/list-product' && (
                            <a className={"link bg-success"} style={{padding: "10px 5px"}} href="/list-product">Danh sách sản phẩm <PiList/></a>
                        )}
                        <div className="filter-dropdown">
                            <CategoryFilter/>
                        </div>
                    </div>
                    {location.pathname === '/' && (<a className={"active-link "} href="/">Trang chủ</a>)}
                    {location.pathname !== '/' && (<a className={"link hover-link "} href="/">Trang chủ</a>)}

                    {location.pathname === '/vct' && (<a className={"active-link "} href="/vct">Về chúng tôi</a>)}
                    {location.pathname !== '/vct' && (
                        <a className={"link hover-link "} href="/vct">Về chúng tôi</a>)}

                    {location.pathname === '/services' && (<a className={"active-link "} href="/services">Dịch vụ</a>)}
                    {location.pathname !== '/services' && (
                        <a className={"link hover-link "} href="/services">Dịch vụ</a>)}

                    {location.pathname === '/architecture' && (
                        <a className={"active-link "} href="/architecture">Kiến thức nhà nông</a>)}
                    {location.pathname !== '/architecture' && (
                        <a className={"link hover-link "} href="/architecture">Kiến thức nhà nông</a>)}

                    {location.pathname === '/contact' && (<a className={"active-link "} href="/contact">Liên hệ</a>)}
                    {location.pathname !== '/contact' && (
                        <a className={"link hover-link "} href="/contact">Liên hệ</a>)}

                    <Search/>

                    {/*{location.pathname === '/cart' && (<a className={"active-link "} href="/contact">Giỏ hàng</a>)}*/}
                    {/*{location.pathname !== '/cart' && (*/}

                    {/*// <a className={"link hover-link "} href="/cart">Giỏ hàng</a>*/}

                    <Link to="/cart" className="cart-icon">
                        {/*<FontAwesomeIcon icon={faShoppingBag} className="text-primary me-4 fa-2x text-center"/>*/}
                        <div className="position-relative">
                            <div className="d-flex rounded-circle align-items-center justify-content-center bg-light"
                                 style={{height: "40px", width: "40px"}}>
                                <FaShoppingCart className="fs-3 text-center" style={{fontSize: "24px"}}/>
                            </div>
                            <div
                                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                3<span className="visually-hidden">3</span>
                            </div>
                        </div>

                    </Link>
                    {/*)}*/}
                </div>
            </nav>
        </header>
    )
        ;
}
