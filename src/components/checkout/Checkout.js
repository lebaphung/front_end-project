import React, {useState} from 'react';
import styles from './Checkout.module.css'
const Checkout = () => {
    return(
        <div className= {styles.container}>
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
                        <tr className={styles.tr}>
                            <td>
                                <img className={"m-3 w-100"}
                                     src={"https://trungtamcaygiongtiengiang.com/watermark/product/540x540x1/upload/product/z5353502009320c2555d812b8b632f254cdee9acec48c4-4104.jpg"}
                                     alt="Image1"/>
                            </td>
                            <td>
                                Táo Thái Xanh
                            </td>
                            <td>
                                1
                            </td>
                            <td className={"text-danger"}>
                                100.000đ
                            </td>
                        </tr>
                        <tr className={styles.tr}>
                            <td>
                                <img className={"m-3 w-100"}
                                     src={"https://trungtamcaygiongtiengiang.com/watermark/product/289x289x1/upload/product/1accc77c-2dcc-4bb0-b2b9-8e363e553ff4-4020.jpeg"}
                                     alt="Image1"/>
                            </td>
                            <td>
                                Cherry Brazil
                            </td>
                            <td>
                                2
                            </td>
                            <td className={"text-danger"}>
                                200.000đ
                            </td>
                        </tr>
                    </table>
                </div>
                <div className={styles.totalBill}>
                    <p className={"mt-3 ms-3"}>Tổng Tiền:</p>
                    <p className="text-danger mt-3 me-3">180.000đ</p>
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
    )
}
export default Checkout;