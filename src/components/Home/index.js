export default function MenuBar() {
    return (
        // Danh mục sản phẩm
        // Trang chủ
        // Search: Nhập từ khóa tìm kiếm...
        // Về chúng tôi
        <div>
            <div className={"menubar"}>
                <div>
                    Danh mục sản phẩm
                </div>
                <div>
                    Trang chủ
                </div>
                <div>
                    <input id={"search"} type={"text"} placeholder={"Nhập từ khóa tìm kiếm..."}/>
                </div>
            </div>
            <div id={"productList"}>
                <div clas sName={"row"}>
                    <div></div>
                </div>
            </div>
        </div>
    )
}