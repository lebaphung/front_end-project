import './style.css'
import React, {useEffect, useState} from "react";
// npm install react-fast-marquee
import Marquee from "react-fast-marquee";
// npm install react-bootstrap bootstrap
import {Dropdown} from "react-bootstrap";
// npm install react-router-dom
import {BrowserRouter, Link, useLocation} from "react-router-dom";
import {useDispatch} from "react-redux";
import {searchProducts} from "../redux/Action";

export default function Header() {
    const location = useLocation();
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
            <nav className="navbar navbar-light" style={{backgroundColor: "#e3f2fd"}}>
                <div className="container">
                    {/*<div className="dropdown">*/}
                    {/*    <Dropdown>*/}
                    {/*        <Dropdown.Toggle variant="success" id="dropdown-basic">*/}
                    {/*            <a className="navbar-brand fw-bold text-white" href="/list-product">Danh sách sản*/}
                    {/*                phẩm</a>*/}
                    {/*        </Dropdown.Toggle>*/}
                    {/*        <Dropdown.Menu>*/}
                    {/*            {categories.map((c, index) => (*/}
                    {/*                <Dropdown.Item as={Link} to="/action-1" key={c.id}>{c.name}</Dropdown.Item>*/}
                    {/*            ))}*/}
                    {/*        </Dropdown.Menu>*/}
                    {/*    </Dropdown>*/}
                    {/*</div>*/}

                    {location.pathname === '/' && (<a className={"active-link "} href="/">Trang chủ</a>)}
                    {location.pathname !== '/' && (<a className={"link hover-link "} href="/">Trang chủ</a>)}

                    {location.pathname === '/list-product' && (
                        <a className={"active-link "} href="/list-product">Danh sách sản phẩm</a>)}
                    {location.pathname !== '/list-product' && (
                        <a className={"link hover-link "} href="/list-product">Danh sách sản phẩm</a>)}

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

                    {location.pathname === '/cart' && (<a className={"active-link "} href="/contact">Giỏ hàng</a>)}
                    {location.pathname !== '/cart' && (
                        <a className={"link hover-link "} href="/cart">Giỏ hàng</a>)}
                </div>
            </nav>
        </header>
    )
        ;
}
