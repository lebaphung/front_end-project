import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMapMarker, faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons'
import styles from './vct.module.css';
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
                                   <strong> NongLamSprout</strong> là công ty chuyên cung cấp các loại cây giống chất lượng cao cho khách
                                    hàng trồng trọt.
                                    Chúng tôi cam kết mang đến những sản phẩm tốt nhất để hỗ trợ khách hàng trong việc
                                    phát triển khu vườn của mình.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="h-100 rounded">
                                <iframe
                                    className="rounded w-100"
                                    style={{height: '400px'}}
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125404.30380710536!2d106.70744878678997!3d10.820150574123575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d85e042bf04b%3A0xbb26baec1664394d!2zVGjhu6cgxJDhu6ljLCBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1718867157578!5m2!1svi!2s"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Google Map"
                                ></iframe>

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
                                    <p className="mb-2 fst-italic">Khu phố 10, Linh Trung, Thủ Đức, TP. Hồ Chí Minh</p>
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
                                    <p className="mb-2 fst-italic">(+84) 371 455 082</p>
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