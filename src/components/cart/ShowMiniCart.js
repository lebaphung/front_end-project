import React from 'react';
import PropTypes from 'prop-types';
import { FaRegCheckCircle, FaTimes } from "react-icons/fa";
import {useDispatch} from "react-redux";
import {addToCart, hideMiniCart} from "../../redux/Action";
import {Link} from "react-router-dom";

ShowMiniCart.propTypes = {


};

function ShowMiniCart(props) {

    const dispatch = useDispatch()
    return (
        <div className="container d-flex justify-content-end" >
            <div className="w-25 d-flex justify-content-center align-items-center flex-column rounded p-2"
                 style={{backgroundColor: "#f8f9fa", position: "absolute" , top: 80}} >
            <span
                onClick={() => dispatch(hideMiniCart()
                )}
                    className="text-danger" style={{position: "absolute", top: 0, right:10, fontSize: "15"}}><FaTimes  /> </span>

            <p className="text-success"> <FaRegCheckCircle /> Thêm vào giỏ hàng thành công.</p>
                <Link to="/cart" className="w-75 d-flex justify-content-center text-decoration-none">
                <button type="submit"
                    className={"btn btn-danger "}
                        onClick={() => dispatch(hideMiniCart()
                        )}
                  >
                Xem giỏ hàng và thanh toán
                 </button>
                </Link>
            </div>
        </div>
    );
}

export default ShowMiniCart;