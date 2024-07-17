import React, {useState} from 'react';
import styles from './Checkout.module.css'
import { CiCircleRemove } from "react-icons/ci";
import {useDispatch, useSelector} from "react-redux";
import {cartTotalSelector} from "../cart/selectors";
import {formatCurrency} from "../../FormatCurrency";
const Checkout = () => {

    const cartTotal = useSelector(cartTotalSelector);
    const cartItems = useSelector(state => state.cartItems);
    const dispatch = useDispatch();

    return(
        <div>
            <div className={"DV_title text-center mt-5"}>
                <h1 className={styles.background_images_DV}>THANH TOÁN</h1>
            </div>


    <div className={styles.container}>


        {/*Phan 1*/}
        <div className={styles.right}>
            <p className={styles.TitleGH}>
                    GIỎ HÀNG CỦA BẠN:
                </p>
                <div className={styles.solidR}></div>
                <div className={styles.tableProduct}>
                    <table className={styles.table}>
                        <tr className={styles.TitleTR}>
                            <th scope={"col"}>
                                Hình Ảnh
                            </th>
                            <th scope={"col"}>
                                Tên Sản Phẩm
                            </th>
                            <th scope={"col"}>
                                Số Lượng
                            </th>
                            <th scope={"col"}>
                                Thành Tiền
                            </th>
                        </tr>
                        {cartItems.map(item => (


                            <tr className={styles.tr} key={item.id}>
                                <td>
                                    <img style={{maxWidth: "100px"}} className={"m-3 w-100"}
                                         src={item.product.img[0]}
                                         alt={item.product.img[1]}/>
                                </td>
                                <td>
                                    {item.product.name}
                                </td>
                                <td>
                                    {item.quantity}
                                </td>
                                <td className={"text-danger"}>
                                    {formatCurrency(item.quantity * item.product.price)}
                                </td>
                            </tr>
                        ))}
                    </table>
                </div>
                <div className={styles.totalBill}>
                    <p className={"mt-3 ms-3"}>Tổng Tiền:</p>
                    <p className="text-danger mt-3 me-3">{formatCurrency(cartTotal+30000)}</p>
                </div>
            </div>
            <div className={styles.solidBetween}></div>
            {/*    Phan 2*/}
            <div className={styles.left}>
                <p className={"my-0"}>HÌNH THỨC THANH TOÁN:</p>
                <div className={styles.solidR}></div>
                <div className={"d-flex"}>
                    <input type={"radio"} id={"option1"} name={"pttt"} value={"option1"}/>
                    <p className={styles.pPTTT}>Thanh Toán Khi Nhận Hàng (COD)</p>
                </div>
                <div className={"d-flex"}>
                    <input type={"radio"} id={"option2"} name={"pttt"} value={"option2"}/>
                    <p className={styles.pPTTT}>Thanh Toán Chuyển Khoản Ngân Hàng</p>
                </div>
                {/*Thong tin nhan hang*/}
                <p className={"mt-3 my-0"}>THÔNG TIN NHẬN HÀNG:</p>
                <div className={styles.solidR}></div>
                <div className={"mt-3 d-flex"}>
                    <input className={styles.inputHVT} type={"text"} placeholder={"Họ Và Tên"}/>
                    <input className={styles.inputSDT} type={"text"} placeholder={"Số Điện Thoại"}/>
                </div>
                <div>
                    <input className={styles.inputEmail} type={"email"} placeholder={"Email"}/>
                </div>
                <div>
                    <input className={styles.inputEmail} type={"text"} placeholder={"Địa Chỉ"}/>
                </div>
                <div>
                    <input className={styles.inputGC} type={"text"} placeholder={"Ghi Chú (Không bắt buộc)"}/>
                </div>
                <div className={styles.buttonTT}>
                    <a>Thanh Toán</a>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Checkout;