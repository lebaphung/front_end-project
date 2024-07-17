import React from "react";
import {Link} from "react-router-dom";
import Subscribe from "./Subscribe";

export default function Footer() {
    return (
        <footer className="bg-light text-center text-lg-start">
            <div className="container p-4">
                <div className="row">
                    <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Thông tin liên hệ</h5>
                        <p>
                            Địa chỉ: đường 868B, Ấp Mỹ Hòa, Xã Mỹ Hạnh Trung, TX Cai Lậy - Tiền Giang
                            <br/>
                            Hotline: 034567 9887 - 0777403339
                            <br/>
                            Email: nonglamsprout2003@gmail.com
                        </p>
                        <Link to={"/purchaseGuide"} className={"btn btn-success"}>
                            Hướng dẫn mua hàng
                        </Link>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <Subscribe/>
                    </div>
                </div>
            </div>
            <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                &copy; 2024 Trung Tâm Cây Giống.
            </div>
        </footer>
    )
}