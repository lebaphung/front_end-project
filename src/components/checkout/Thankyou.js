import React from 'react';
import PropTypes from 'prop-types';
import { FaTruck } from "react-icons/fa6";

Thankyou.propTypes = {
    
};

function Thankyou(props) {
    return (
            <div className="d-flex flex-column align-items-center " style={{backgroundColor: "#FFD35A"}}>
                <img style={{maxWidth: "300px"}}
                     src="https://cdni.iconscout.com/illustration/premium/thumb/thank-you-4618439-3827357.png?f=webp"
                     alt="Giỏ đang trống"/>
                <h2>ĐƠN HÀNG ĐÃ TẠO THÀNH CÔNG</h2>
                <span className="mb-5" style={{fontSize: "20px", fontStyle: "italic"}}>"Cảm ơn quý khách đã mua hàng. Chúng tôi sẽ chuẩn bị ngay! "</span>
            </div>
    );
}

export default Thankyou;