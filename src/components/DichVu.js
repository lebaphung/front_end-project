import React from "react";
import styles from './dv.module.css'
import VeChungToi from "./VeChungToi";
const DichVu = () => {
    return(
        <div className={styles.DVContainer}>
            <div className={"DV_title text-center mt-5"}>
                <h1 className={styles.background_images_DV}>DỊCH VỤ</h1>
            </div>
            <div>
                <div className={styles.content_left}>
                    <a className={styles.ax} href={"https://youtu.be/avt8aZgq5Aw"}>
                        <img className={styles.img}
                            src={"https://trungtamcaygiongtiengiang.com/thumbs/472x354x1/upload/news/z3842390171577004151bc6d7f97c6ed26418ce855e201-8894.jpg"}/>
                    </a>
                    <div className={styles.div_content}>
                        <a className={styles.a} href={"https://youtu.be/avt8aZgq5Aw"}>HỖ TRỢ THU HOACH THU MUA TẠI VƯỜN</a>
                        <p className={styles.pDate}>Ngày đăng: 13/6/2024</p>
                        <p>Trung Tâm Cây Giống ngoài cung cấp giống cây trồng chất lượng cho bà con chúng tôi còn hỗ trợ
                            bà con thu hoạch và thu mua
                            trái với giá tốt nhất thị trường.
                        </p>
                    </div>
                </div>
                <div className={styles.content_right}>
                    <a className={styles.ax} href={"https://youtu.be/XS4jvMf4-D4"}>
                        <img className={styles.img}
                            src={"https://trungtamcaygiongtiengiang.com/thumbs/472x354x1/upload/news/z3842390192563b57cd1ed6ecd20b704842296415ea5bc-2272.jpg"}/>
                    </a>
                    <div className={styles.div_content}>
                        <a className={styles.a} href={"https://youtu.be/XS4jvMf4-D4"}>TƯ VẤN GIỐNG CÂY TRỒNG TẠI VƯỜN</a>
                        <p className={styles.pDate}>Ngày đăng: 1/7/2024</p>
                        <p>Kiểm tra thổ dưỡng tận nơi và đưa ra giải pháp giống cây trồng phù hợp nhất với quý bà
                            con.</p>
                    </div>
                </div>
                <div className={styles.content_left2}>
                    <a className={styles.ax} href={"https://youtu.be/CGqOCVAYFUs"}>
                        <img className={styles.img}
                            src={"https://trungtamcaygiongtiengiang.com/thumbs/472x354x1/upload/news/z3842390171220dbbcf5399368f96997fa1fb364923158-2802.jpg"}/>
                    </a>
                    <div className={styles.div_content}>
                        <a className={styles.a} href={"https://youtu.be/CGqOCVAYFUs"}>DỊCH VỤ VẬN CHUYỂN GIAO HÀNG TOÀN QUỐC</a>
                        <p className={styles.pDate}>Ngày đăng: 1/7/2024</p>
                        <p>Ship hàng toàn quốc dù quý khách hàng ở đâu - đảm bảo mang chất lượng tốt nhất đến tay người dùng.</p>
                    </div>
                </div>
                <div className={styles.content}>
                    <a className={styles.ax}>
                        <img className={styles.img}
                            src={"https://trungtamcaygiongtiengiang.com/thumbs/472x354x1/upload/news/z384239000319139c0cb8525990d6e5cfd9de76f4c7e5a-8524.jpg"}/>
                    </a>
                    <div className={styles.div_content}>
                        <p className={styles.p2}>CUNG CẤP CÂY GIỐNG CHẤT LƯỢNG TOÀN QUỐC</p>
                        <p className={styles.pDate}>Ngày đăng: 1/7/2024</p>
                        <p>Nguồn giống của TRUNG TÂM CÂY GIỐNG luôn tuân thủ tiêu chuẩn chất lượng cao, song song với chất lượng cây giống luôn được chăm sóc tốt, luôn áp dụng khoa học kỹ thuật tiên tiến.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DichVu;