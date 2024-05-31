import React from 'react';
import {Link} from 'react-router-dom';
// npm install react-slick slick-carousel
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// Dữ liệu mẫu của sản phẩm phân loại
import {categorizedProducts} from '../data/categories'

const Home = () => {
    // Cấu hình của carousel
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Số lượng sản phẩm hiển thị trên mỗi slide
        slidesToScroll: 1
    };
    return (
        <div>
            {/* Danh sách sản phẩm phân loại */}
            <div className="container mt-5">
                {categorizedProducts.map(category => (
                    <div key={category.category} className="mb-4">
                        <h2 className={"p-3"}>{category.category}</h2>
                        <Slider {...settings}>
                            {category.products.map(product => (
                                <div key={product.id} className={"p-2"}>
                                    {/* Hiển thị thông tin sản phẩm */}
                                    <Link className={"text-decoration-none text-dark"} to={`/product/${product.id}`}>
                                        <img src={product.img}/>
                                        <h3>{product.name}</h3>
                                        <div className={"d-flex"}>Giá:&nbsp;
                                            <p className={"text-danger"}>{product.price}đ</p>
                                        </div>
                                    </Link>
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
