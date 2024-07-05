import React from "react";

const loginCG = () => {
    return(
        <div className={"container"}>
            <div>
                <a href={"http://localhost:3000"}><img src="https://trungtamcaygiongtiengiang.com/thumbs/122x100x2/upload/photo/logo-1926.png" alt={"Logo"}/></a>
                <h3>Đăng Nhập</h3>
            </div>
            <div>
                <input type={"email"} placeholder={"Email"} value={"email"}/>
                <input type={"password"} placeholder={"Password"} value={"password"}/>
            </div>
            <div>
                <button>Đăng Nhập</button>
            </div>
            <div className={"solid"}></div>
            <div>
                <a href={"/google"}><img
                    src={"https://i.pinimg.com/originals/74/65/f3/7465f30319191e2729668875e7a557f2.png"}/></a>
                <a href={"/facebook"}><img
                    src={"https://cdn.pixabay.com/photo/2020/07/21/02/07/facebook-5424833_1280.png"}/></a>
            </div>
        </div>
    )
}
export default loginCG;