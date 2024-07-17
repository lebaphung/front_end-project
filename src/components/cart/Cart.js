import './CartStyle.css'
import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from "react-redux";
import {cartTotalSelector} from "./selectors";
import {FaMinus, FaPlus, FaTimes} from "react-icons/fa";
import styles from "../css/dv.module.css";
import {hideMiniCart, removeFromCart, setQuantity} from "../../redux/Action";
import {formatCurrency} from "../../FormatCurrency";
import {Link, useNavigate} from "react-router-dom";
import {IoMdArrowRoundBack} from "react-icons/io";

Cart.propTypes = {

};


function Cart(props) {

    const cartTotal = useSelector(cartTotalSelector);
    const cartItems = useSelector(state => state.cartItems);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1); // Điều hướng trở lại trang trước
    };

    return (
        <div class="container py-5">

            <div className={"DV_title text-center ms-2 mt-3"} style={{position: "relative"}} >
                <span style={{fontSize: "30px", position: "absolute", left: "0", cursor: "pointer", color: "green"}} onClick={handleBack}>
                <IoMdArrowRoundBack/>
            </span>
                <h1 className={styles.background_images_DV}>GIỎ HÀNG CỦA TÔI</h1>
            </div>

            {cartItems.length === 0 ? (
                <div className="d-flex flex-column align-items-center ">
                    <img style={{maxWidth: "300px"}}
                         src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-7359557-6024626.png?f=webp"
                         alt="Giỏ đang trống"/>
                    <span style={{fontSize: "20px", fontStyle: "italic"}}>"Tưởng tượng một giỏ hàng sẵn sàng chờ bạn đổ đầy, nhưng hiện tại đang trống vắng."</span>
                </div>
            ) : (


                <div class="container py-5">
                    <div class="table-responsive">
                        <table class="table">
                            <thead>
                            <tr>
                                <th scope="col">Sản phẩm</th>
                                <th scope="col">Tên sản phẩm</th>
                                <th scope="col">Đơn giá</th>
                                <th scope="col" className="text-center">Số lượng</th>
                                <th scope="col">Thành tiền</th>
                                <th scope="col">Xoá</th>
                            </tr>
                            </thead>
                            <tbody>

                            {cartItems.map(item => (

                                <tr key={item.id}>
                                    <th scope="row">
                                        <div class="d-flex align-items-center">
                                            <img src={item.product.img[0]}
                                                 className="img-fluid me-5"
                                                 style={{width: 50, height: 50}} alt=""/>
                                        </div>
                                    </th>
                                    <td><Link to={`/product/${item.product.id}`}>
                                        <p class="mb-0 mt-4"><strong>{item.product.name}</strong></p>
                                    </Link>
                                    </td>
                                    <td>
                                        <p class="mb-0 mt-4">{formatCurrency(item.product.price)}</p>
                                    </td>
                                    <td>
                                        <p className="mb-0 mt-3 mx-auto"
                                           style={{display: 'flex', flexDirection: 'row', width: 100}}>


                                            <button type="button"
                                                    style={{cursor: 'pointer'}}
                                                    className="btn btn-sm btn-minus rounded-circle bg-light border"
                                                    onClick={() => {
                                                        if (item.quantity > 1) {
                                                            dispatch(
                                                                setQuantity(item.id, item.quantity - 1)
                                                            )
                                                        }
                                                    }}
                                            >
                                                <FaMinus/>
                                            </button>
                                            <input
                                                className="form-control form-control-sm text-center border-0"
                                                type="text" value={item.quantity}
                                            />

                                            <button type="button"
                                                    style={{cursor: 'pointer'}}
                                                    className="btn btn-sm btn-plus rounded-circle bg-light border"
                                                    onClick={() => dispatch(
                                                        setQuantity(item.id, item.quantity + 1)
                                                    )}
                                            >


                                                <FaPlus/>
                                            </button>
                                        </p>
                                    </td>
                                    <td>
                                        <p class="mb-0 mt-4">{formatCurrency(item.product.price * item.quantity)}</p>
                                    </td>
                                    <td>
                                        <button class="btn btn-sm rounded-circle bg-danger border mt-3 text-light"
                                                onClick={() => dispatch(removeFromCart(item.id)
                                                )}

                                        >
                                            <FaTimes/>
                                        </button>
                                    </td>

                                </tr>

                            ))}
                            </tbody>
                        </table>
                    </div>

                    <div class="row g-4 justify-content-end">
                        <div class="col-8"></div>
                        <div class="col-sm-8 col-md-7 col-lg-6 col-xl-4">
                            <div class="bg-light rounded">
                                <div class="p-4">
                                    <h1 class="display-6 mb-4">Tổng Tiền</h1>
                                    <div class="d-flex justify-content-between mb-4">
                                        <h5 class="mb-0 me-4">Tạm tính:</h5>
                                        <p class="mb-0">{formatCurrency(cartTotal)}</p>
                                    </div>
                                    <div class="d-flex justify-content-between">
                                        <h5 class="mb-0 me-4">Phí vận chuyển</h5>
                                        <div class="">
                                            <p className="mb-0">{formatCurrency(30000)}</p>
                                        </div>
                                    </div>
                                    <p class="mb-0 text-end">Giao hàng tận nơi trên toàn quốc.</p>
                                </div>
                                <div class="py-4 mb-4 border-top border-bottom d-flex justify-content-between">
                                    <h5 class="mb-0 ps-4 me-4">Tổng</h5>
                                    <p class="mb-0 pe-4 text-danger"
                                       style={{fontSize: "20px", fontWeight: "bold"}}
                                    >{formatCurrency(cartTotal + 30000)}</p>
                                </div>
                                <a class="btn border-secondary rounded-pill px-4 py-3 bg-danger text-light text-uppercase mb-4 ms-4"
                                   href={"http://localhost:3000/Checkout"}>Thanh Toán</a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;