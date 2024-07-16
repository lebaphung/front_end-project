import React, {useEffect, useState} from 'react';
import {Outlet, NavLink, useParams, Route, useMatch} from "react-router-dom";
import {formatCurrency} from '../../FormatCurrency';
import  "./pdstyle.css";
import AddToCartForm from "./AddToCartForm";
const ProductDetail = () => {
    const  {id} = useParams(); // Lấy id từ URL.
    const [product, setProduct] =  useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
        // xu ly anh :
    const [mainImage, setMainImage] = useState('');

    useEffect(() => {
        const fetchProduct = async () => {
            try {
            const response = await  fetch(`https://json-server-api-tv8h.onrender.com/api/products/${id}`);
            if(!response.ok) {
                throw new Error('Failed to fetch Product');
            }
            const  data = await  response.json();
            setProduct(data);
            setMainImage(data.img[0]);
            setLoading(false);


            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchProduct(); // Khi component mount / id thay doi.
        return () => {};
    }, [id]);

    if(!product) {
        return <div>Không tìm thấy sản phẩm.</div>
    }
    const handleThumbnailClick = (image) => {
        setMainImage(image);
    }

    // thêm vào giỏ hàng.
    const handleAddToCartSubmit = (formValues) => {
        console.log('Form submit: ' + JSON.stringify(formValues));
    }


    const renderDescription = () => {
        return (
            <>
                {product.description.split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                        {line}
                        <br/>
                    </React.Fragment>

                ))}
            </>

        )
    }

    return (


        <div className="row g-4 my-3">
        <div className="col-lg-12">
            <div className="row g-4 container-intro ">
                <div className="col-lg-6 d-flex flex-row justify-content-around">
                    <div className="col-lg-2">
                        <div className="small-img-col d-flex flex-column  ">
                            {product.img.map((image, index) => (
                                <img key={index} src={image} alt={`Thumbnail ${index + 1}`}
                                     onClick={() => handleThumbnailClick(image)}/>
                            ))}
                        </div>

                    </div>
                    <div className="border rounded image-wrapper col-lg-10">
                        <a href="#">
                            <img
                                src={mainImage}
                                className="img-fluid rounded w-100 object-fit-cover m-auto"
                                alt="Image"
                            />
                        </a>
                    </div>
                </div>
                <div className="col-lg-6">
                    <h3 className="fw-bold mb-3">{product.name}</h3>
                    <p className="mb-3">Đã bán : {product.amountSold}</p>
                    <h4 className="fw-bold text-danger mb-3">{formatCurrency(product.price)}</h4>
                    <p className="mb-3 fst-italic">
                        Giao hàng tận nơi trên toàn quốc. <br/>
                        Nếu quý khách có nhu cầu mua sỉ với số lượng cực lớn, cần tư vấn vui lòng liên hệ trực tiếp với
                        thông tin ở cuối trang.
                    </p>


                    <AddToCartForm onSubmit={handleAddToCartSubmit}></AddToCartForm>


                </div>


                <div className="col-lg-12">
                    <nav>
                        <div className="nav nav-tabs mb-3">
                            <button
                                className="nav-link border-white border-bottom-0"
                                type="button"
                                role="tab"
                                id="nav-about-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#nav-about"
                                aria-controls="nav-about"
                                aria-selected="true"
                                style={{color: "black", fontSize: "20px", fontWeight: "bold"}}
                            >
                                Thông tin sản phẩm
                            </button>

                        </div>
                    </nav>
                    <div className="tab-content mb-5">
                        <div
                            className="tab-pane active"
                            id="nav-about"
                            role="tabpanel"
                            aria-labelledby="nav-about-tab"
                        >
                            <p style={{fontSize: "16px"}}>
                                {renderDescription()}
                            </p>
                        </div>


                    </div>
                </div>
                <div className="col-lg-12">
                    <nav>
                        <div className="nav nav-tabs mb-3 p-3" style={{fontSize: "20px", fontWeight:"bold"}}>
                           Khám phá các giống cây
                        </div>




                    </nav>
                </div>
            </div>
        </div>
        </div>


    )


};


export default ProductDetail;