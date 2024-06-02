import "./style.css";
import React from 'react';
import {Link} from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {useSelector} from "react-redux";
import Banner from './Banner'

// Component cho nút điều khiển trái
const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", left: "-25px" }}
            onClick={onClick}
        />
    );
};

// Component cho nút điều khiển phải
const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", right: "-25px" }}
            onClick={onClick}
        />
    );
};

const Home = () => {
    // Get data from Redux store
    const categorizedProducts = useSelector(state => state.products);

    // Cấu hình của carousel
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Số lượng sản phẩm hiển thị trên mỗi slide
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    return (
        <div>
            <div>
                <Banner/>
            </div>
            {/* Danh sách sản phẩm phân loại */}
            <div className="container mt-5">
                {categorizedProducts.map(category => (
                    <div key={category.category} className="mb-4">
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
                                                <p className={"text-danger fw-bold"}>{product.price}đ</p>
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
