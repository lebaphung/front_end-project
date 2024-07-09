import React from 'react';

const PurchaseGuide = () => {
    return (
        <div className="container">
            <div className={"d-flex justify-content-center"}>
                <img src="https://caygiongsaigon.com/wp-content/uploads/2019/08/huong-dan-mua-hang.jpg" alt="anh minh hoa"/>
            </div>
            <h1>Quý khách hàng quý mến !</h1>
            <p>Các hình thức thanh toán được áp dụng như sau:</p>

            <h2>I. Tại Tp.HCM</h2>
            <p>Quý khách nhận hàng và thanh toán trực tiếp.<br />
                Xin vui lòng liên hệ:<br />
                <strong>Hotline: 0336677141</strong></p>

            <h2>II. Mua hàng thu tiền tại nhà (COD)</h2>
            <p>Giao hàng thu tiền tại nhà là hình thức mua hàng rất tiện lợi cho quý khách mua hàng mà không có tài khoản ngân hàng online và không gần cửa hàng của chúng tôi.</p>
            <ol>
                <li>Quý khách có thể gọi điện thoại hoặc nhắn tin, chúng tôi sẽ xác nhận đơn hàng và vận chuyển.</li>
                <li>Quý khách đặt hàng trực tuyến tại website: <a href="http://www.caygiongtiengiang.com" target="_blank" rel="noopener noreferrer">www.caygiongtiengiang.com</a></li>
            </ol>

            <h2>III. Ngoài ra Qúy khách có thể thanh toán bằng cách chuyển tiền qua tài khoản ngân hàng của chúng tôi</h2>
            <p><strong>NGÂN HÀNG BIDV</strong><br />
                Chủ tài khoản: Kiên Phụng Nghĩa<br />
                Số tài khoản: 0531002586369</p>
            <p>Quý khách vui lòng ghi rõ nội dung như sau:</p>
            <ul>
                <li>Họ tên:</li>
                <li>Số điện thoại:</li>
                <li>Tên sản phẩm:</li>
                <li>Số lượng:</li>
            </ul>
            <p>Chúng tôi sẽ liên hệ xác nhận khi nhận được chuyển khoản.</p>

            <h2>IV. Vận Chuyển và thời gian nhận hàng</h2>
            <ul>
                <li>Chúng tôi gửi chuyển phát nhanh đảm bảo qua bưu điện và một số dịch vụ chuyển phát khác trên toàn quốc.</li>
                <li>Hàng sẽ nhận được 2-3 ngày sau khi xác nhận đơn hàng.</li>
            </ul>

            <p>Xin chân thành cám ơn Quý Khách hàng quan tâm và ủng hộ.</p>
        </div>
    );
};

export default PurchaseGuide;
