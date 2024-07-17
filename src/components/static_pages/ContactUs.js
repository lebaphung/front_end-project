import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMapMarker, faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons'
import styles from '../css/vct.module.css';
const ContactUs = () => {
    return (
        <div className="container-fluid contact py-5">
            <div className="container py-5">
                <div className="p-5 bg-light rounded">
                    <div className="row g-4">
                        <div className="col-12">
                            <div className="text-center mx-auto" style={{maxWidth: '700px'}}>
                                <div className="vct_title text-center">
                                    <h1 className={"background-image-vct"}>Liên hệ chúng tôi</h1>
                                </div>
                                <p className="mb-2 font-monospace">
                                   <strong> TrungTamCayGiong</strong> là công ty chuyên cung cấp các loại cây giống chất lượng cao cho khách
                                    hàng trồng trọt.
                                    Chúng tôi cam kết mang đến những sản phẩm tốt nhất để hỗ trợ khách hàng trong việc
                                    phát triển khu vườn của mình.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="h-100 rounded">
                                <iframe className={"w-100 h-100"}
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.9539780619984!2d106.1381382742672!3d10.425226865575059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310a97b382425caf%3A0xe9abebb04082f771!2zxJDGsOG7nW5nIDg2OGIsIENhaSBM4bqteSwgVGnhu4FuIEdpYW5nLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2sus!4v1720512158825!5m2!1svi!2sus"
                                    style={{border:'0'}} allowFullScreen="" loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <form action="" className="">
                                <input type="text" className="w-100 form-control border-0 py-3 mb-4"
                                       placeholder="Tên hiển thị"/>
                                <input type="email" className="w-100 form-control border-0 py-3 mb-4"
                                       placeholder="Email của bạn"/>
                                <textarea className="w-100 form-control border-0 mb-4" rows="5" cols="10"
                                          placeholder="Nội dung"></textarea>
                                <button className="w-100 btn form-control border-secondary py-3 bg-white text-break"
                                        type="submit">Gửi
                                </button>
                            </form>
                        </div>
                        <div className="col-lg-5">
                            <div className="d-flex p-4 rounded mb-4 bg-white">
                                <FontAwesomeIcon icon={faMapMarker} className="text-primary me-4 fa-2x"/>
                                <div>
                                    <h4>Địa chỉ</h4>
                                    <p className="mb-2 fst-italic">đường 868B, Ấp Mỹ Hòa, Xã Mỹ Hạnh Trung, TX Cai Lậy - Tiền Giang</p>
                                </div>
                            </div>
                            <div className="d-flex p-4 rounded mb-4 bg-white">
                                <FontAwesomeIcon icon={faEnvelope} className="text-primary me-4 fa-2x text-center"/>
                                <div>
                                    <h4>Email</h4>
                                    <p className="mb-2 fst-italic">nonglamsprout2003@gmail.com</p>
                                </div>
                            </div>

                            <div className="d-flex p-4 rounded bg-white">
                                <FontAwesomeIcon icon={faPhone} className="text-primary me-4 fa-2x"/>
                                <div>
                                    <h4>Số điện thoại</h4>
                                    <p className="mb-2 fst-italic">(+84) 34567 9887</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;