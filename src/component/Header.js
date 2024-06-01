import './style.css'
import React from "react";
// npm install react-fast-marquee
import Marquee from "react-fast-marquee";
// npm install react-bootstrap bootstrap
import {Dropdown} from "react-bootstrap";
import {BrowserRouter, Link} from "react-router-dom";

export default function Header() {
    return (
        <header>
            <BrowserRouter>
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
                        <div className="dropdown">
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    <a className="navbar-brand fw-bold text-white" href="/list-product">Danh sách sản phẩm</a>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} to="/action-1">Giống cây táo</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/action-2">Giống cây Cherry</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/action-3">Giống cây dừa</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/action-4">Giống cây nho</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/action-5">Giống cây bưởi</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/action-6">Giống cây việt quất</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <a className="navbar-brand hover-link" href="/">Trang chủ</a>
                        <a className="navbar-brand hover-link" href="/about">Về chúng tôi</a>
                        <a className="navbar-brand hover-link" href="/services">Dịch vụ</a>
                        <a className="navbar-brand hover-link" href="/architecture">Kiến trúc nhà nông</a>
                        <a className="navbar-brand hover-link" href="/contact">Liên hệ</a>
                        <form className="form-inline d-flex">
                            <input
                                className="form-control mr-sm-2"
                                type="search"
                                placeholder="Nhập từ khóa tìm kiếm..."
                                aria-label="Search"
                            />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                                Tìm
                            </button>
                        </form>
                    </div>
                </nav>
            </BrowserRouter>
        </header>
    );
}
