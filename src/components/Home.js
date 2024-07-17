import "./css/style.css";
import React, {useEffect, useState} from 'react';
import {Link, useOutletContext} from 'react-router-dom';
// npm install react-slick --save
import Slider from 'react-slick';
// npm install slick-carousel --save
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Banner from './Banner'
import {formatCurrency} from '../FormatCurrency';
import DetailFilters from "./DetailFilters";

const Home = () => {
    const urlAPI = "https://json-server-api-tv8h.onrender.com/api/products"
    const [topSellingProducts, setTopSellingProducts] = useState([]);
    const [recentProducts, setRecentProducts] = useState([]);
    const [categorySixProducts, setCategorySixProducts] = useState([]);
    useEffect(() => {
        fetch(urlAPI)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                // Sort by amountSold to get top selling products
                const topSelling = [...data].sort((a, b) => b.amountSold - a.amountSold).slice(0, 5);
                setTopSellingProducts(topSelling);

                // Sort by dateAdded to get most recent products
                const recent = [...data].sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded)).slice(0, 5);
                setRecentProducts(recent);

                // CategoryFilter products by categoryId 6
                const categorySix = data.filter(product => product.categoryId === 0);
                setCategorySixProducts(categorySix);
            })
            .catch(error => console.error('Error fetching banner items:', error));
    }, []);
    console.log(topSellingProducts)
    // Cấu hình của carousel
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4, // Số lượng sản phẩm hiển thị trên mỗi slide
        slidesToScroll: 1,
    };

    const [recommentProducts, setRecommentProducts] = useState([]);
    useEffect(() => {
        fetch('https://json-server-api-tv8h.onrender.com/api/products')
            .then(response => response.json())
            .then(data => setRecommentProducts(data))
            .catch(error => console.error('Error fetching banner items:', error));
    }, []);
    // Phân trang
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(6); // số sản phẩm hiển thị
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = recommentProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(recommentProducts.length / productsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div>
            <div className={"container"}>
                <Banner/>
            </div>
            {/* Danh sách sản phẩm phân loại theo bán ra*/}
            <div className="container mt-5">
                <div className="mb-5">
                    <div className="vct_title text-center mt-5">
                        <h2 className={"background-image-vct"}>Giống cây bán chạy nhất</h2>
                    </div>
                    <Slider {...settings}>
                        {topSellingProducts.map(product => (
                            <div key={product.id} className={"p-2 text-center"}>
                                <div className={"p-2"}>
                                    <div>
                                        <div className={"p-2"}>
                                            <img
                                                src={product.img}
                                                className={"w-100 h-100 border rounded-3 hover-scale"}
                                                alt={product.name}/>
                                        </div>
                                        <Link className={"text-decoration-none text-dark"}
                                              to={`/product/${product.id}`}>
                                            <h3 className={"hover-name"}>{product.name}</h3>
                                        </Link>
                                        <div className={"d-flex justify-content-center"}>Giá:&nbsp;
                                            <p className={"text-danger fw-bold"}>{formatCurrency(product.price)}</p>
                                        </div>
                                    </div>
                                    <button className={"btn btn-success"}>Thêm vào giỏ hàng</button>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                {/* Theo date */}
                <div className="mb-5">
                    <div className="vct_title text-center mt-5">
                        <h2 className={"background-image-vct"}>Giống cây mới</h2>
                    </div>
                    <Slider {...settings}>
                        {recentProducts.map(product => (
                            <div key={product.id} className={"p-2 text-center"}>
                                {/* Hiển thị thông tin sản phẩm */}
                                <div className={"p-2"}>
                                    <div>
                                        <div className={"p-2"}>
                                            <img
                                                src={product.img}
                                                //{product.img}
                                                className={"w-100 h-100 border rounded-3 hover-scale"}
                                                alt={product.name}/>
                                        </div>
                                        <Link className={"text-decoration-none text-dark"}
                                              to={`/product/${product.id}`}>
                                            <h3 className={"hover-name"}>{product.name}</h3>
                                        </Link>
                                        <div className={"d-flex justify-content-center"}>Giá:&nbsp;
                                            <p className={"text-danger fw-bold"}>{formatCurrency(product.price)}</p>
                                        </div>
                                    </div>
                                    <button className={"btn btn-success"}>Thêm vào giỏ hàng</button>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                {/*    độc lạ*/}
                <div className="mb-5">
                    <div className="vct_title text-center mt-5">
                        <h2 className={"background-image-vct"}>Gợi ý cho bạn</h2>
                    </div>
                    <ul className="pagination d-flex justify-content-center">
                        {pageNumbers.map(number => (
                            <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                                <button onClick={() => paginate(number)} className="page-link">
                                    {number}
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div>
                        <div className="mb-5 row">
                            {currentProducts.map(product => (
                                <div key={product.id} className="p-2 col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                                    <div className="p-2">
                                        <Link className="text-decoration-none text-dark" to={`/product/${product.id}`}>
                                            <div className="p-2">
                                                <img
                                                    src={product.img}
                                                    className="w-100 h-100 border rounded-3 hover-scale"
                                                    alt={product.name}
                                                />
                                            </div>
                                            <h3 className="hover-name" style={{height: "60px"}}>{product.name}</h3>
                                            <div className="d-flex justify-content-center">
                                                Giá:&nbsp;
                                                <p className="text-danger fw-bold">{formatCurrency(product.price)}</p>
                                            </div>
                                        </Link>
                                        <button className="btn btn-success">Thêm vào giỏ hàng</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;