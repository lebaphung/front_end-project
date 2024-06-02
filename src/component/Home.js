import "./style.css";
import React from 'react';
import {Link,useOutletContext} from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {useSelector} from "react-redux";
import Banner from './Banner'
import { formatCurrency } from '../FormatCurrency';
const Home = () => {
    // Get data from Redux store
    const { homeCategorizedProducts, productPageCategorizedProducts } = useOutletContext();

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
            <div>
                <Banner/>
            </div>
            {/* Danh sách sản phẩm phân loại */}
            <div className="container mt-5">
                {homeCategorizedProducts.map(category => (
                    <div key={category.category} className="mb-5">
                        <h2 className={"p-3"}>{category.category}</h2>
                        <Slider {...settings}>
                            {category.products.map(product => (
                                <div key={product.id} className={"p-2"}>
                                    {/* Hiển thị thông tin sản phẩm */}
                                    <div className={"p-2 border rounded-3"}>
                                        <Link className={"text-decoration-none text-dark"} to={`/product/${product.id}`}>
                                            <div>
                                                <img src={product.img} className={"w-100 h-100 border rounded-3 hover-scale"} alt={product.name} />
                                            </div>
                                            <h3>{product.name}</h3>
                                            <div className={"d-flex justify-content-center"}>Giá:&nbsp;
                                                <p className={"text-danger fw-bold"}>{formatCurrency(product.price)}</p>
                                            </div>
                                        </Link>
                                        <button className={"btn btn-success"}>Thêm vào giỏ hàng</button>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Home;
