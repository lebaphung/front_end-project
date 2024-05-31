import "./productDetail.css";
import {useLoaderData, useNavigate} from "react-router-dom";
import {products} from "../data/ProductData";
// lấy thông tin 1 sản phẩm từ data
export async function getProduct(id){
    return products.find( (product)=>product.id == id);
}

export async function loadProduct({params}) {
    const product = await getProduct(params.id);
    return product;
}

export function ProductDetail(){
    // hook useLoaderData  để lấy dữ liệu sản phẩm từ route
    const product=useLoaderData();
    // hook useNavigate: để điều hướng quay lại trang trước đó khi click "BACK"
    const navigate= useNavigate();
    return (<div className="container">
        <div><button onClick={()=>{navigate(-1)}} className={"btn btn-primary"}>BACK</button></div>
        <div className="card">
            <div className="container-fliud">
                <div className="wrapper row">
                    <div className="preview col-md-6">

                        <div className="preview-pic tab-content">
                            <div className="tab-pane active" id="pic-1"><img src={product.img} alt=""/>
                            </div>
                            <div className="tab-pane" id="pic-2"><img src={product.img} alt=""/></div>
                            <div className="tab-pane" id="pic-3"><img src={product.img} alt=""/></div>
                            <div className="tab-pane" id="pic-4"><img src={product.img} alt=""/></div>
                            <div className="tab-pane" id="pic-5"><img src={product.img} alt=""/></div>
                        </div>
                        <ul className="preview-thumbnail nav nav-tabs">
                            <li className="active"><a data-target="#pic-1" data-toggle="tab"><img src={product.img}
                                                                                                  alt=""/></a></li>
                            <li><a data-target="#pic-2" data-toggle="tab"><img src={product.img} alt=""/></a></li>
                            <li><a data-target="#pic-3" data-toggle="tab"><img src={product.img} alt=""/></a></li>
                            <li><a data-target="#pic-4" data-toggle="tab"><img src={product.img} alt=""/></a></li>
                            <li><a data-target="#pic-5" data-toggle="tab"><img src={product.img} alt=""/></a></li>
                        </ul>

                    </div>
                    <div className="details col-md-6">
                        <h3 className="product-title">{product.name}</h3>
                        <div className="rating">
                            <div className="stars">
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                            </div>
                            <span className="review-no">41 reviews</span>
                        </div>
                        <div>
                            {product.des}
                        </div>
                        <h5 className="sizes">sizes:
                            <span className="size" data-toggle="tooltip" title="small">s</span>
                            <span className="size" data-toggle="tooltip" title="medium">m</span>
                            <span className="size" data-toggle="tooltip" title="large">l</span>
                            <span className="size" data-toggle="tooltip" title="xtra large">xl</span>
                        </h5>
                        <h5 className="colors">colors:
                            <span className="color orange not-available" data-toggle="tooltip"
                                  title="Not In store"></span>
                            <span className="color green"></span>
                            <span className="color blue"></span>
                        </h5>
                        <div className="action">
                            <button className="add-to-cart btn btn-default" type="button">add to cart</button>
                            <button className="like btn btn-default" type="button"><span className="fa fa-heart"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}