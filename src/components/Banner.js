import Carousel from 'react-bootstrap/Carousel';
import './css/style.css';
import React, { useState, useEffect } from 'react';
function Banner() {
    const [bannerItems, setBannerItems] = useState([]);
    useEffect(() => {
        fetch('https://json-server-api-tv8h.onrender.com/api/banner_items')
            .then(response => response.json())
            .then(data => setBannerItems(data))
            .catch(error => console.error('Error fetching banner items:', error));
    }, []);
    return (
        <Carousel data-bs-theme="light" className="custom-carousel" interval={3000}>
            {bannerItems.map((item, index) => (
                <Carousel.Item key={index}>
                    <img
                        className="d-block w-100"
                        src={item.path}
                        alt={item.name}
                    />
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default Banner;
