import { useLoaderData, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import React from "react";

export function ProductDetail() {
    // hook useLoaderData để lấy dữ liệu sản phẩm từ route
    const categorizedProducts = useSelector(state => state.products);
    const loaderData = useLoaderData();
    const id = loaderData.payload.params.id;
    const product = getProduct(categorizedProducts, id);

    console.log("categorizedProducts", categorizedProducts);
    console.log("id", id, product);

    // hook useNavigate: để điều hướng quay lại trang trước đó khi click "BACK"
    const navigate = useNavigate();
    return (
        <div className="container">
            <div className={"row d-flex justify-content-start m-3"}>
                <button onClick={() => navigate(-1)} className={"col-1 btn btn-outline-primary"}>Quay lại</button>
            </div>
            <div className="row border rounded m-3">
                {product && (
                    <div>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>

                        <div>
                            <img src={product.img}
                                 className={"w-25 h-25 border rounded-3 hover-scale"}/>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

// lấy thông tin 1 sản phẩm từ data
function getProduct(categorizedProducts, id) {
    for (const category of categorizedProducts) {
        console.log(category);
        for (const p of category.products) {
            if (p.id == id) {
                return p;
            }
        }
    }
    return null;
}

export async function loadProduct(categorizedProducts, { params }) {
    const product = await getProduct(categorizedProducts, params.id);
    return product;
}

export default ProductDetail;