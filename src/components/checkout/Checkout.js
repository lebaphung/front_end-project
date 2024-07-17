import React, {useState} from 'react';
import styles from './Checkout.module.css'
import {useDispatch, useSelector} from "react-redux";
import {cartTotalSelector} from "../cart/selectors";
import {formatCurrency} from "../../FormatCurrency";
import PropTypes from "prop-types";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from 'yup'
import {clearCart} from "../../redux/Action";
import {useNavigate} from "react-router-dom";
import {IoMdArrowRoundBack} from "react-icons/io";







const Checkout = () => {
    const user = JSON.parse(localStorage.getItem('loginInUser'));
    const cartTotal = useSelector(cartTotalSelector);
    const cartItems = useSelector(state => state.cartItems);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const phoneRegExp = /^0[0-9]{9}$/;
    const schema = yup.object().shape({
        title: yup.string().required('Vui lòng nhập tên').min(5, 'Tên quá ngắn.'),
        phone: yup.string().required('Vui lòng nhập số điện thoại').matches(phoneRegExp, 'Số điện thoại không hợp lệ.'),
        address: yup.string().required('Vui lòng nhập địa chỉ'),
        note: yup.string(),
    });
    const {handleSubmit: hookFormSubmit, register, formState: {errors}} =
    useForm({
        defaultValues: {
            title: user? user.name: '',
            phone: '',
            address: '',
            note: '',
        },
        resolver: yupResolver(schema),
    });

    const handleBack = () => {
        navigate(-1); // Điều hướng trở lại trang trước
    };

    const onSubmit = async (values) => {
        const orderData = {
            userId: user.id,
            phoneNumber: values.phone,
            userName: values.title,
            address: values.address,
            note: values.note,
            totalPrice: cartTotal + 30000,
            orderItems: cartItems.map(item => ({
                productId: item.id,
                quantity: item.quantity,
                unitPrice: item.product.price,
                finalPrice: item.product.price * item.quantity,
            })),
        };



        try {
            const response =  await
            fetch('https://json-server-api-tv8h.onrender.com/api/orders',
                {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderData),
            });
            if(response.ok){
                const result = await response.json();
                localStorage.removeItem('cartItems');
                dispatch(clearCart());
                navigate('/thankyou');



            } else {
                const error = await response.json();
                alert(`Loi: ${error.message}`);
            }

        } catch (error) {
            alert(`Lỗi: ${error.message}`);
        }



        hookFormSubmit();


    }

    return(




        <div>
            <div className={"DV_title text-center mt-5"}>
                <span style={{fontSize: "30px", position: "absolute", left: "150px", cursor: "pointer", color: "green"}}
                onClick={handleBack}>
                <IoMdArrowRoundBack/>
            </span>
                <h1 className={styles.background_images_DV}>THANH TOÁN</h1>
            </div>

            {user? (

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
                <div className={"d-flex pick"}>
                    <input type={"radio"} id={"option1"} name={"pttt"} value={"option1"}/>
                    <p className={styles.pPTTT}>Thanh Toán Khi Nhận Hàng (COD)</p>
                </div>
                <div className={"d-flex pick"}>
                    <input type={"radio"} id={"option2"} name={"pttt"} value={"option2"}/>
                    <p className={styles.pPTTT}>Thanh Toán Chuyển Khoản Ngân Hàng</p>
                </div>
                {/*Thong tin nhan hang*/}
                <p className={"mt-3 my-0"}>THÔNG TIN NHẬN HÀNG:</p>


                <div className={styles.solidR}></div>

                <form onSubmit={hookFormSubmit(onSubmit)} >
                <div className={"mt-3 "}>
                    <input className={styles.inputHVT} type={"text"} placeholder={"Họ Và Tên"}
                           {...register('title')}
                    />
                    {errors.title && <p className="text-danger" style={{fontSize: "15px", fontStyle: "italic" }}>{errors.title.message}</p>}

                </div>
                <div className="mt-3">
                    <input className={styles.inputSDT} type={"text"} placeholder={"Số Điện Thoại"}
                           {...register('phone')}/>
                    {errors.phone && <p className="text-danger" style={{fontSize: "15px", fontStyle: "italic" }}>{errors.phone.message}</p>}
                </div>
                <div>
                    <input className={styles.inputEmail} type={"text"} placeholder={"Địa Chỉ"}
                           {...register('address')}
                    />
                    {errors.address && <p className="text-danger" style={{fontSize: "15px", fontStyle: "italic" }}>{errors.address.message}</p>}
                </div>
                <div>
                    <input className={styles.inputGC} type={"text"}
                           placeholder={"Ghi Chú (Không bắt buộc)"}
                           {...register('note')}
                    />
                </div>

                <div>
                    <button className={styles.buttonTT} type="submit">Đặt hàng</button>
                </div>

                </form>
            </div>
        </div>

            ) : (
                <div className="p-5  my-5 d-flex justify-content-center">

                    <span className="mx-auto" style={{
                        fontSize: "20px",
                        fontStyle: "italic"
                    }}>Bạn chưa đăng nhập? Hãy <a className="text-primary" href="/login">đăng nhập tại đây</a> để mua hàng!</span>
                </div>
            )}
        </div>


    );
}
export default Checkout;