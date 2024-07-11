import React, { useEffect, useState } from 'react';
import styles from './OrderHistory.module.css'
import {Link} from "react-router-dom";

const OrderHistory = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const sessionUser = JSON.parse(localStorage.getItem("loginInUser"));
    useEffect(() => {
        const fetchOrders = async () => {
            try {
                if (sessionUser) {
                    const response = await fetch(`https://json-server-api-tv8h.onrender.com/api/users/${sessionUser.id}/orders`);
                    const data = await response.json();
                    setOrders(data);
                }
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchOrders();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (

        <div>
            <div className={"mt-3"}>
                <h1 className={styles.background_images_OrderHistory}>Lịch Sử Đơn Hàng</h1>
            </div>
            {orders.map((order) => (
                <OrderDetails key={order.id} order={order}/>
            ))}
        </div>
    );
};

const OrderDetails = ({order}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProductDetails = async () => {
            const productDetails = await Promise.all(
                order.orderItems.map(async (item) => {
                    const response = await fetch(`https://json-server-api-tv8h.onrender.com/api/products/${item.productId}`);
                    return response.json();
                })
            );
            setProducts(productDetails);
        };
        fetchProductDetails();
    }, [order]);

    return (
        <div className={"container"}>
            <div className={styles.div_infor}>
                {/**/}
                <div className={styles.left}>
                    <p className={styles.TitleGH}>
                        ĐƠN HÀNG CỦA BẠN #{order.id}:
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
                            {order.orderItems.map((item, index) => (
                                <tr key={item.productId} className={styles.tr}>
                                    {products[index] && (
                                        <>
                                            <td>
                                                <Link to={`/product/${products[index].id}`}> <img className={"m-3 w-75"} src={products[index].img} alt={products[index].img}/></Link>
                                            </td>
                                            <td>
                                            {products[index].name}
                                            </td>
                                            <td>
                                                x{item.quantity}
                                            </td>
                                            <td className={"text-danger"}>
                                                {item.finalPrice}
                                            </td>
                                        </>
                            )}
                        </tr>
                        ))}
                    </table>
                </div>
            </div>
            {/**/}
                <div className={styles.right}>
                    <p className={styles.TitleGH}>
                        THÔNG TIN NGƯỜI NHẬN:
                    </p>
                    <div className={styles.solidR}></div>
                    <div className={"mt-3"}>
                        <p>Tên Người Nhận: {order.userName}</p>
                        <p>Số Điện Thoại: {order.phoneNumber}</p>
                        <p>Địa Chỉ: {order.address}</p>
                        <p>Ghi Chú: {order.note}</p>
                        <p>Ngày Đặt Hàng: {order.dateAdded}</p>
                    </div>
                    <div className={styles.totalBill}>
                        <p className={"mt-3 ms-3"}>Tổng Tiền:</p>
                        <p className="text-danger mt-3 me-3">{order.totalPrice}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderHistory;
