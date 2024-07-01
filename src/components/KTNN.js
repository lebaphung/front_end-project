import React from "react";
import styles from './KTNN.module.css'
const KTNN = () => {
    return(
        <div className={styles.KTNNContainer}>
            <div className={"KTNN_title text-center mt-5"}>
                <h1 className={styles.background_images_KTNN}>KIẾN THỨC NHÀ NÔNG</h1>
            </div>
            <div>
                <div className={styles.content_left}>
                    <a className={styles.ax} href={"https://www.youtube.com/watch?v=hBlQFuPrK90&ab_channel=TrungT%C3%A2mC%C3%A2yGi%E1%BB%91ng"}>
                        <img className={styles.img}
                             src={"https://trungtamcaygiongtiengiang.com/thumbs/472x354x1/upload/news/z48611129206071ff2da6b060b4d864ff25a46d60381f4-1366.jpg"}/>
                    </a>
                    <div className={styles.div_content}>
                        <a className={styles.a} href={"https://www.youtube.com/watch?v=hBlQFuPrK90&ab_channel=TrungT%C3%A2mC%C3%A2yGi%E1%BB%91ng"}>TRỒNG VÀ CHĂM SÓC MÍT RUỘT ĐỎ SƠ VÀNG INDO NHANH CHO TRÁI</a>
                        <p className={styles.pDate}>Ngày đăng: 1/6/2024</p>
                        <p>Bạn đang cần đầu tư trồng cây ăn quả nhưng không biết lựa chọn giống cây nào sẽ phù hợp với thị trường hiện tại thì hôm nay chúng tôi sẽ giới thiệu.
                        </p>
                    </div>
                </div>
                <div className={styles.content_right}>
                    <a className={styles.ax} href={"https://www.youtube.com/watch?v=uAvD51anRjc"}>
                        <img className={styles.img}
                             src={"https://trungtamcaygiongtiengiang.com/thumbs/472x354x1/upload/news/untitled-design-5233.png"}/>
                    </a>
                    <div className={styles.div_content}>
                        <a className={styles.a} href={"https://www.youtube.com/watch?v=uAvD51anRjc"}>THÔNG TIN VỀ GIỐNG CÂY VÚ SỮA MICA</a>
                        <p className={styles.pDate}>Ngày đăng: 1/6/2024</p>
                        <p>Đây là giống vú sữa đột biến, chịu mặn tốt. Khi chín thịt ăn giòn, không có mủ ở phần vỏ, rất ngon.</p>
                    </div>
                </div>
                <div className={styles.content_left2}>
                    <a className={styles.ax} href={"https://www.youtube.com/watch?v=-w3KBHxvjxM"}>
                        <img className={styles.img}
                             src={"https://trungtamcaygiongtiengiang.com/thumbs/472x354x1/upload/news/thiet-ke-chua-co-ten-7861.png"}/>
                    </a>
                    <div className={styles.div_content}>
                        <a className={styles.a} href={"https://www.youtube.com/watch?v=-w3KBHxvjxM"}>THÔNG TIN VỀ GIỐNG CÂY LỰU ĐỎ ẤN ĐỘ</a>
                        <p className={styles.pDate}>Ngày đăng: 1/6/2024</p>
                        <p>Ở Việt Nam hay gọi là lựu đỏ lùn Ấn Độ.  Nhiệt độ sinh trưởng tốt nhất từ 25-35 độ nên giống lựu đỏ lùn rất phù hợp để trồng ở Việt Nam. Các loại đất thịt, đất cát, phù sa, đất đỏ đều trồng được. Trồng được những nơi bị hạn, mặn và phèn.</p>
                    </div>
                </div>
                <div className={styles.content}>
                    <a href={"https://www.youtube.com/watch?v=dgriJhD-g2Y"} className={styles.ax}>
                        <img className={styles.img}
                             src={"https://trungtamcaygiongtiengiang.com/thumbs/472x354x1/upload/news/tai-xuong-7414.jpeg"}/>
                    </a>
                    <div className={styles.div_content}>
                       <a className={styles.a} href={"https://www.youtube.com/watch?v=dgriJhD-g2Y"}>THÔNG TIN GIỐNG CÂY TÁO TÀU</a>
                        <p className={styles.pDate}>Ngày đăng: 1/6/2024</p>
                        <p>Táo Tàu là loại cây có nguồn gốc từ các nước Trung á nhưng hiện nay loại cây này đã được trồng khắp mọi nơi. Khi nhắc đến cây táo Tàu người ta sẽ nghĩ ngay đến nước Trung Quốc. Có thể nói đây là nơi có khí hậu phù hợp nhất cho sự phát triển của cây táo. Chính vì vậy mà dân ta gọi chúng là cây táo tàu.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default KTNN;