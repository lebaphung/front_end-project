import React, {useEffect, useState} from "react"
import styles from "./register.module.css";
import { useNavigate } from 'react-router-dom';
import {FaFacebook, FaGoogle} from "react-icons/fa";
const Register = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [users,setUsers] = useState([]);
    const [emailList,setEmailList] = useState([]);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [messageSuccess, setMessageSucess] = useState('');
    const navigate = useNavigate();

    // dùng để setpassword để kiểm tra vs confirm
    const handleNameChage = (e) => {
        setName(e.target.value);
    };
    const handleEmailChage = (e) => {
        setEmail(e.target.value);
    };
    const handlePasswordChage = (e) => {
        setPassword(e.target.value);
    };
    const handleConfirmPasswordChage = (e) => {
        setConfirmPassword(e.target.value);
    };
    // Lấy dữ liệu user trên fetchAPI để validation
    useEffect(() => {
        fetch('https://json-server-api-tv8h.onrender.com/api/users')
            .then(reponse => reponse.json())
            .then(data => {
                setUsers(data); //lưu danh sách ng dùng vào state
                const emailAPI = data.map(users => users.email);
                setEmailList(emailAPI);
            })
            .catch(error => console.error('Error fetching data:', error));
    },[]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (name == '' || email == '' || password == '' || confirmPassword == '') {
            setMessage("Chưa điền đầy đủ thông tin!")
        } else {
            if (password != confirmPassword) {
                setMessage("Xác thực mật khẩu không chính xác!")
            } else {
                if (emailList.includes(email)) {
                    setMessage("Email đã tồn tại!")
                    return;
                }
                try {
                    const response = await fetch('https://json-server-api-tv8h.onrender.com/api/users', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({email, password, name}),
                    });

                    const data = await response.json();

                    if (response.ok) {
                        setMessageSucess("Đăng ký thành công!");
                        setMessage("");
                        setTimeout(() => {
                            navigate("/login");//chuyển trang
                        },1000);
                    } else {
                        setMessage(`Failed to submit email: ${data.message}`);
                    }
                } catch (error) {
                    setMessage(`Error: ${error.message}`);
                }

            }
        }

    }
    return (
        <div className={styles.body}>
            <div className={styles.overlay}></div>
            <form className={styles.container} onSubmit={handleSubmit}>
                <div className={styles.login_title}>
                    <a href={"http://localhost:3000"}><img className={styles.login_title_img}
                                                           src="https://trungtamcaygiongtiengiang.com/thumbs/122x100x2/upload/photo/logo-1926.png"
                                                           alt={"Logo"}/></a>
                    <h3 className={styles.login_title_h3}>Đăng Ký</h3>
                </div>
                <div className={styles.form}>
                    <input className={styles.form_input} type={"text"} onChange={handleNameChage} placeholder={"Họ Và Tên"}/>
                    <input className={styles.form_input} type={"email"} onChange={handleEmailChage} placeholder={"Email"}/>
                    <input className={styles.form_input} type={"password"} onChange={handlePasswordChage}
                           placeholder={"Password"}/>
                    <input className={styles.form_input} type={"password"} onChange={handleConfirmPasswordChage}
                           placeholder={"Xác thực Password"}/>
                </div>
                {/*Thông báo lỗi*/}
                {message && <p className={"text-danger"}>{message}</p>}
                {messageSuccess && <p className={"text-success"}>{messageSuccess}</p>}
                <div className={styles.btnDN}>
                    <button type={"submit"} className={styles.btnDN_button}>Đăng Ký</button>
                </div>
                <div className={styles.signup}>
                    <p className={"me-2"}>Bạn đã có tài khoản?</p>
                    <a href={"/login"}>Đăng Nhập</a>
                </div>
                <div className={styles.solid}></div>
                <div className={styles.social}>
                    <a><FaGoogle className={styles.icon_google}/></a>
                    <a><FaFacebook className={styles.icon_facebook}/></a>
                </div>
            </form>
        </div>
    )
}
export default Register;