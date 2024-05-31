import React from "react";
import {Link} from "react-router-dom";

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
                            Hotline: 034567 9887, 0777403339
                            <br/>
                            Email: info@trungtamcaygiongtiengiang.com
                        </p>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Đăng ký nhận tin</h5>
                        <form
                            // onSubmit={handleSubscribe}
                        >
                            <div className="form-group">
                                <input type="text" className="form-control mb-2" placeholder="Họ tên" required/>
                            </div>
                            <div className="form-group">
                                <input type="tel" className="form-control mb-2" placeholder="Số điện thoại" required/>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control mb-2" placeholder="Email" required/>
                            </div>
                            <button type="submit" className="btn btn-success">Đăng ký</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                &copy; 2023 Trung Tâm Cây Giống. All rights reserved.
            </div>
        </footer>
    )
}