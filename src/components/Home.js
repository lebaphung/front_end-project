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
import {useDispatch} from "react-redux";
import {addToCart, showMiniCart} from "../redux/Action";
import CategoryFeatures from "./utils/categoryFeatures";

const Home = () => {
    const urlAPI = "https://json-server-api-tv8h.onrender.com/api/products"
    const [topSellingProducts, setTopSellingProducts] = useState([]);
    const [recentProducts, setRecentProducts] = useState([]);
    const [categorySixProducts, setCategorySixProducts] = useState([]);
    const dispatch = useDispatch();

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


    return (
        <div>
            <div className={"container"}>
                <Banner/>
            </div>


            <div className={"container"}>
                <CategoryFeatures/>
            </div>

            {/* Danh sách sản phẩm phân loại theo bán ra*/}
            <div className="container mt-5 ">
                <div className="mb-5">
                    <div className="vct_title text-center mt-5">
                        <h2 className={"background-image-vct"}>Giống cây bán chạy nhất</h2>
                    </div>
                    <Slider {...settings}>
                        {topSellingProducts.map(product => (
                            <div key={product.id} className={"p-2 text-center"}>
                                <div className={"p-2"}>
                                    <div className={"p-2"}>
                                        <img
                                            src={product.img[0]}
                                            className={"w-100 border rounded-3 hover-scale"}
                                            style={{height: "200px"}}
                                            alt={product.name}/>
                                    </div>
                                    <Link className={"text-decoration-none text-dark"}
                                          to={`/product/${product.id}`}>
                                        <h3 className={"hover-name"}
                                            style={{height: "50px"}}
                                        >{product.name}</h3>

                                    </Link>
                                    <div className={"d-flex justify-content-center"}>Giá:&nbsp;
                                        <p className={"text-danger fw-bold"}>{formatCurrency(product.price)}</p>
                                    </div>
                                    <button className={"btn btn-success"}
                                            onClick={() => dispatch(addToCart(
                                                {
                                                    id: product.id,
                                                    product,
                                                    quantity: 1
                                                }
                                            ))}

                                    >Thêm vào giỏ hàng
                                    </button>
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
                                    <div className={"p-2"}>
                                        <img
                                            src={product.img[0]}
                                            //{product.img}
                                            className={"w-100 border rounded-3 hover-scale"}
                                            style={{height: "200px"}}
                                            alt={product.name}/>
                                    </div>
                                    <Link className={"text-decoration-none text-dark"}
                                          to={`/product/${product.id}`}>
                                        <h3 className={"hover-name"}
                                            style={{height: "60px"}}
                                        >{product.name}</h3>
                                    </Link>
                                    <div className={"d-flex justify-content-center"}>Giá:&nbsp;
                                        <p className={"text-danger fw-bold"}>{formatCurrency(product.price)}</p>
                                    </div>
                                    <button className={"btn btn-success"}
                                            onClick={() => dispatch(addToCart(
                                                {
                                                    id: product.id,
                                                    product,
                                                    quantity: 1
                                                }
                                            ))


                                            }

                                    >Thêm vào giỏ hàng
                                    </button>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}
export default Home;