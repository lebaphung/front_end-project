import React, {useEffect, useState} from 'react';
// npm install react-slick --save
import Slider from 'react-slick';
import {Link, useNavigate} from "react-router-dom";

import  "./liststyle.css";
import { FaArrowAltCircleRight } from "react-icons/fa";
import {filterProducts} from "../../redux/Action";
import {useDispatch} from "react-redux";
CategoryFeatures.propTypes = {

};

function CategoryFeatures(props) {

    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleFilter = (filter) => {
        navigate(`/list-product`); // Navigate to the desired route
        dispatch(filterProducts(filter))
    }

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
    console.log(categories)

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    };


    return (
        <Slider {...settings}>
            {categories.map(caterogy => (
                <div key={caterogy.id} className="main mb-3 m-5">
                <div  className={"card"}>

                        <div style={{height: "300px"}}>
                        <img
                            src={caterogy.img}
                            alt=""/>
                        </div>


                        <div className="card-content">
                            <h2>
                                {caterogy.name}
                            </h2>

                            <a className="button" onClick={(e) => handleFilter(caterogy.id)}>
                                Khám phá ngay
                                <FaArrowAltCircleRight />
                            </a>
                        </div>
        </div>
                </div>
            ))}
        </Slider>
    );
}

export default CategoryFeatures;