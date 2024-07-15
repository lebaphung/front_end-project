import './css/style.css'
import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingBag} from '@fortawesome/free-solid-svg-icons'
import {CiLogout} from "react-icons/ci";
import {FaUser} from "react-icons/fa";
import {FaHistory} from "react-icons/fa";

// npm install react-fast-marquee
import Marquee from "react-fast-marquee";
// npm install react-bootstrap bootstrap
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "react-bootstrap";
// npm install react-router-dom
import {BrowserRouter, Link, useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {filterProducts, searchProducts} from "../redux/Action";
import Cart from "./cart/Cart";
import Search from "./Search";
import CategoryFilter from "./CategoryFilter";
// npm install react-icons
import {PiList} from "react-icons/pi";
import {FaShoppingCart} from "react-icons/fa";

export default function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    const [search, setSearch] = useState("");
    const [isSticky, setIsSticky] = useState(false);
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

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    useEffect(() => {
        window.scrollTo(0, 100);
    }, [location.pathname]);

    //Lấy tên của tài khoản
    const [name, setName] = useState('');
    useEffect(() => {
        const login = JSON.parse(localStorage.getItem("loginInUser"));
        if (login) {
            const {name} = login;
            setName(name);
        }
    });
    //   toggle
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);
    // Đăng xuất
    // Hàm xử lý đăng xuất
    const handleLogout = () => {
        // Xóa thông tin đăng nhập từ Local Storage
        localStorage.removeItem('loginInUser');
        setName('');
    };
    const handleToProductsPage = () => {
        dispatch(filterProducts('ALL'))
        navigate(`/list-product`)
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
            <nav className={`navbar navbar-light ${isSticky ? "sticky" : ""}`}
                 style={{backgroundColor: "rgb(25,135, 84)"}}>
                <div className="container">
                    <div className="link-container">
                        {location.pathname === '/list-product' && (
                            <div to="/list-product" className={"active-link"} onClick={handleToProductsPage}
                                  style={{padding: "10px 5px", background: "white", color: "black", cursor: "pointer"}}>
                                Danh sách sản phẩm <PiList/>
                            </div>
                        )}
                        {location.pathname !== '/list-product' && (
                            <div to="/list-product" className={"link hover-link"} onClick={handleToProductsPage}
                                  style={{padding: "10px 5px", background: "white", color: "black", cursor: "pointer"}}>
                                Danh sách sản phẩm <PiList/>
                            </div>
                        )}
                        <div className="filter-dropdown">
                            <CategoryFilter/>
                        </div>
                    </div>
                    {location.pathname === '/' && (
                        <Link to="/" className={"active-link"} style={{padding: "10px 5px"}}>
                            Trang chủ
                        </Link>
                    )}
                    {location.pathname !== '/' && (
                        <Link to="/" className={"link hover-link"} style={{padding: "10px 5px"}}>
                            Trang chủ
                        </Link>
                    )}

                    {location.pathname === '/vct' && (
                        <Link to="/vct" className={"active-link"} style={{padding: "10px 5px"}}>
                            Về chúng tôi
                        </Link>
                    )}
                    {location.pathname !== '/vct' && (
                        <Link to="/vct" className={"link hover-link"} style={{padding: "10px 5px"}}>
                            Về chúng tôi
                        </Link>
                    )}

                    {location.pathname === '/DichVu' && (
                        <Link to="/DichVu" className={"active-link"} style={{padding: "10px 5px"}}>
                            Dịch vụ
                        </Link>
                    )}
                    {location.pathname !== '/DichVu' && (
                        <Link to="/DichVu" className={"link hover-link"} style={{padding: "10px 5px"}}>
                            Dịch vụ
                        </Link>
                    )}

                    {location.pathname === '/KTNN' && (
                        <Link to="/KTNN" className={"active-link"} style={{padding: "10px 5px"}}>
                            Kiến thức nhà nông
                        </Link>
                    )}
                    {location.pathname !== '/KTNN' && (
                        <Link to="/KTNN" className={"link hover-link"} style={{padding: "10px 5px"}}>
                            Kiến thức nhà nông
                        </Link>
                    )}

                    {location.pathname === '/contact' && (
                        <Link to="/contact" className={"active-link"} style={{padding: "10px 5px"}}>
                            Liên hệ
                        </Link>
                    )}
                    {location.pathname !== '/contact' && (
                        <Link to="/contact" className={"link hover-link"} style={{padding: "10px 5px"}}>
                            Liên hệ
                        </Link>
                    )}
                    <Search/>
                    {name ? (
                        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                            <DropdownToggle tag="span" data-toggle="dropdown" aria-expanded={dropdownOpen}>
                                <button type="button" className="btn btn-sm btn-primary">
                                    <FaUser/> <p className="d-inline">{name}</p>
                                </button>
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem onClick={handleLogout}><CiLogout/> Đăng xuất</DropdownItem>
                                <DropdownItem>
                                    <Link to={"/orderHistory"} className={"text-decoration-none text-dark"}>
                                        <FaHistory/> Lịch Sử Đơn Hàng
                                    </Link>
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    ) : (
                        <a className="link hover-link" href="/login">Đăng Nhập</a>
                    )}
                    <Link to="/cart" className="cart-icon">
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
                </div>
            </nav>
        </header>
    )
        ;
}