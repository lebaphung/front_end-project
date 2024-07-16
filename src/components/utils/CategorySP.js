import React, { useState, useEffect } from 'react';
import { FaArrowAltCircleRight } from "react-icons/fa";
import  "./liststyle.css";
import PropTypes from 'prop-types';
// npm install react-slick --save
import Slider from 'react-slick';
// npm install slick-carousel --save
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {filterProducts} from "../../redux/Action";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

const CategorySp = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://json-server-api-tv8h.onrender.com/api/categories');
                if (!response.ok) {
                    throw new Error('Failed to fetch categories');
                }
                const data = await response.json();
                setCategories(data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchData();
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Số lượng sản phẩm hiển thị trên mỗi slide
        slidesToScroll: 1
    };
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleToProductsPage = () => {
        dispatch(filterProducts('ALL'))
        navigate(`/list-product`)
    }
    return (
<div className="mainSlider">
            <Slider {...settings}>
                {categories.map(category => (

                    <div className="px-1">
                    <div key={category.id} className="card">
                            <img
                                src={category.img}
                                alt=""/>
                            <div className="card-content">
                                <h2>
                                    {category.name}
                                </h2>
                                <a href="#" className="button">
                                    Khám phá ngay
                                    <span className="material-symbols-outlined">
                                    <FaArrowAltCircleRight />
                                </span>
                                </a>
                            </div>
                    </div>

                    </div>







                    // <div key={category.id}>
                    //     <img src={category.img} alt={category.name} style={{width: '100%', height: 'auto'}}/>
                    //     <p>{category.name}</p>
                    // </div>
                ))}
            </Slider>
</div>
    );

};
export default CategorySp;