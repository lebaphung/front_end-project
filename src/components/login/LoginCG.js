import React,{useState} from "react"
import styles from "./LoginCG.module.css";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import {useNavigate} from "react-router-dom";
const LoginCG = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [messageSuccess, setMessageSucess] = useState('');
    const Login = () => {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userEmail = users.find(user => user.email === email);
        const user = users.find(user => user.email === email && user.password === password);
        if(userEmail){
            if(user){
                localStorage.setItem('loginInUser',email);
                setMessageSucess("Đăng Nhập thành công!");
                setMessage("");
                setTimeout(() => {
                    navigate("/");//chuyển trang
                },1000);
            }else{
                setMessage("Password không chính xác!")
            }
        }else{
            setMessage("Email không tồn tại!")
        }
    }


    return(
        <div className={styles.body}>
            <div className={styles.overlay}></div>
            <div className={styles.container} >
                <div className={styles.login_title}>
                    <a href={"http://localhost:3000"}><img className={styles.login_title_img}
                        src="https://trungtamcaygiongtiengiang.com/thumbs/122x100x2/upload/photo/logo-1926.png"
                        alt={"Logo"}/></a>
                    <h3 className={styles.login_title_h3}>Đăng Nhập</h3>
                </div>
                <div className={styles.form}>
                    <input className={styles.form_input} type={"email"} onChange={(e) => setEmail(e.target.value)} placeholder={"Email"} />
                    <input className={styles.form_input} type={"password"} onChange={(e) => setPassword(e.target.value)} placeholder={"Password"}/>
                </div>
                <div className={styles.forgetPassword}>
                    <a href={"#"}>Quên Mật Khẩu?</a>
                </div>
                {/*Thông báo lỗi*/}
                {message && <p className={styles.message}>{message}</p>}
                {messageSuccess && <p className={styles.messageSuccess}>{messageSuccess}</p>}
                <div className={styles.btnDN}>
                    <button type={"submit"} onClick={Login} className={styles.btnDN_button}>Đăng Nhập</button>
                </div>
                <div className={styles.signup}>
                    <p className={"me-2"}>Bạn chưa có tài khoản?</p>
                    <a href={"/register"}>Đăng ký</a>
                </div>
                <div className={styles.solid}></div>
                <div className={styles.social}>
                    <a ><FaGoogle className={styles.icon_google}/></a>
                    <a ><FaFacebook className={styles.icon_facebook}/></a>
                </div>
            </div>
        </div>
    )
}
export default LoginCG;