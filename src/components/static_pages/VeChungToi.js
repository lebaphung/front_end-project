import React from 'react';
import styles from '../css/vct.module.css';

const VeChungToi = () => {
    return (
            <div className="vct_container">
                <div className="vct_title text-center mt-5">
                    <h1 className={"background-image-vct"}>Giới Thiệu</h1>
                </div>
                <div className={styles.border_bottom}>
                    <div>
                        <span className={styles.text_italic}>Trước tiên </span>
                        <strong className={"text-primary"}>Trung Tâm Cây Giống </strong>
                        <span className={styles.text_italic}>xin gửi tới Quý khách hàng lời chào trân trọng và cảm ơn sâu sắc đối với sự quan tâm mà Quý khách hàng đã dành cho chúng tôi suốt thời gian qua.</span>
                    </div>
                    <div>
                        <p className={styles.text_green}>TRUNG TÂM CÂY GIỐNG</p>
                    </div>
                </div>
                <div className={styles.content_2}>
                    <div>
                        <p>Xuất phát từ nhu cầu thị trường, tận dụng điều kiện tự nhiên, trong những năm qua, việc mở các cơ sở giống cây trồng đã trở thành phong trào và được nhân rộng ở nhiều tỉnh thành trên toàn quốc ... </p>
                        <p>Bước đầu khởi nghiệp, khó khăn là không thể tránh khỏi. Trải qua bao thăng trầm của cuộc sống, đến nay Nguyễn Quang Toàn thành lập ra <strong className={"text-primary"}>TRUNG TÂM CÂY GIỐNG</strong>. Đơn vị  hoạt động trong lĩnh vực chuyên cung các loại giống cây trồng ... uy tín trên địa bàn Tiền Giang nói chung và cả nước nói riêng,... </p>
                        <p>Nhằm phát triển ngành trồng trọt đem lại thu nhập cao cho người dân, sự ổn định của thị trường <strong className={"text-primary"}>TRUNG TÂM CÂY GIỐNG</strong> đã nghiên cứu và phát triển thành công đơn vị mình theo quy mô công nghiệp. Đảm bảo cung cấp được số lượng lớn các giống cây có những ưu điểm vượt trội -  uy tín chất lượng đến khắp các tỉnh thành Việt Nam</p>
                        <p>Nguồn giống của <strong className={"text-primary"}>TRUNG TÂM CÂY GIỐNG</strong> luôn tuân thủ tiêu chuẩn chất lượng cao, song song với chất lượng cây giống luôn được chăm sóc tốt, luôn áp dụng khoa học kỹ thuật tiên tiến</p>
                        <p>Với tôn chỉ <strong className={"text-danger"}>“sự hài lòng của Khách hàng là chìa khóa của Thành công”</strong></p>
                        <p><strong className={"text-primary"}>TRUNG TÂM CÂY GIỐNG</strong> cam kết luôn nỗ lực không ngừng để đáp ứng hoàn hảo nhất mọi nhu cầu của Khách hàng. Kinh doanh những sản phẩm về các cây giống cây trồng như cây ăn quả, cây nông nghiệp...đảm bảo về chất lượng và giá cả, chúng tôi tin tưởng sẽ mang lại cho Khách hàng sự hài lòng ngay từ lần mua hàng đầu tiên. Hãy đến với chúng tôi để nhận được sự phục vụ tận tình và chu đáo nhất!</p>
                        <p>Với kinh nghiệm có được trong quá trình trồng trọt chúng tôi sẵn sàng chia sẻ những kinh nghiệm, tư vấn hướng dẫn kỹ thuật chăm sóc cây trồng cho các khách hàng có nhu cầu, nhằm đạt hiệu quả kinh tế cao nhất, tránh rủi ro trong quá trình trồng các giống cây</p>
                        <p>Ngoài những thành công của chúng tôi phải kể đến là sự tin tưởng của quý khách đã tin tưởng và ủng hộ cho đơn vị chúng tôi về đầu ra  Rất mong nhận được sự ủng hộ của quý cơ quan, đoàn thể, cá nhân đã và đang ủng hộ chúng tôi.</p>
                    </div>
                    <div>
                        <div>
                            <img className={"m-3 w-100"}
                                 src={"https://trungtamcaygiongtiengiang.com/upload/filemanager/e559e47ca215644b3d04.jpg"}
                                 alt="Image1"/>
                        </div>
                        <div>
                            <img className={"m-3 w-100"}
                                 src={"https://trungtamcaygiongtiengiang.com/upload/filemanager/e554450f0066c6389f77.jpg"}
                                 alt="Image2"/>
                        </div>
                    </div>
                </div>
            </div>

    )
}

export default VeChungToi;