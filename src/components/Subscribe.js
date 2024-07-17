import React, {useRef, useState} from "react";

export default function Subscribe() {
    const form = useRef();
    const [result, setResult] = useState();

    function handleSubscribe(e) {
        e.preventDefault();

        const formData = new FormData(form.current);
        const name = formData.get('name');
        const tel = formData.get('tel');
        const email = formData.get('email');

        if (name == '' || email == '' || email == '') {
            setResult("Vui lòng điền đầy đủ thông tin");
        }else {
            setResult("Chúng tôi đã ghi nhận đăng ký của bạn!")
        }
    }

    return (
        <div>
            <h5 className="text-uppercase">Đăng ký nhận tin</h5>
            <form
                onSubmit={handleSubscribe}
            >
                <div className="form-group">
                    <input type="text" name={"name"} className="form-control mb-2" placeholder="Họ tên" required/>
                </div>
                <div className="form-group">
                    <input type="tel" name={"tel"} className="form-control mb-2" placeholder="Số điện thoại" required/>
                </div>
                <div className="form-group">
                    <input type="email" name={"email"} className="form-control mb-2" placeholder="Email" required/>
                </div>
                <div className={"text-info"}>{result}</div>
                <button type="submit" className="btn btn-success">Đăng ký</button>
            </form>
        </div>
    )
}