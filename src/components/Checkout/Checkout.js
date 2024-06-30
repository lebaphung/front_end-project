import React from 'react';
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
                            <th>
                                Hình Ảnh
                            </th>
                            <th>
                                Tên Sản Phẩm
                            </th>
                            <th>
                                Số Lượng
                            </th>
                            <th>
                                Thành Tiền
                            </th>
                        </tr>
                        <tr>
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
                    </table>
                </div>
                <div className={styles.totalBill}>
                    <p className={"mt-3 ms-3"}>Tổng Tiền:</p>
                    <p className="text-danger mt-3 me-3">180.000đ</p>
                </div>
            </div>
            <div className={"solid"}></div>
        {/*    Phan 2*/}
            <div className={styles.left}>
                <p>HÌNH THỨC THANH TOÁN:</p>
                <div className={"solid_httt"}></div>
                <div className={"d-flex"}>
                    <input type={"radio"} id={"option1"} name={"pttt"} value={"option1"}/>
                    <p>Thanh Toán Khi Nhận Hàng (COD)</p>
                </div>
                <div className={"d-flex"}>
                    <input type={"radio"} id={"option2"} name={"pttt"} value={"option2"}/>
                    <p>Thanh Toán Chuyển Khoản Ngân Hàng</p>
                </div>
                {/*Thong tin nhan hang*/}
                <p>THÔNG TIN NHẬN HÀNG:</p>
                <div className={"solid_httt"}></div>
                <div>
                    <input type={"text"} placeholder={"Họ Và Tên"}/>
                    <input type={"text"} placeholder={"Số Điện Thoại"}/>
                </div>
                <div>
                    <input type={"email"} placeholder={"Email"}/>
                </div>
                <div>
                    <input type={"text"} placeholder={"Địa Chỉ"}/>
                </div>
                <div>
                    <input type={"text"} placeholder={"Ghi Chú (Không bắt buộc)"}/>
                </div>
                <div className={"btn border-secondary rounded-pill px-4 py-3 text-primary text-uppercase mb-4 ms-4"}>
                    <a>Thanh Toán</a>
                </div>
            </div>
        </div>
    )
}
export default Checkout;