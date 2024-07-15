import React, {useEffect, useState} from 'react';
import { CiSquarePlus } from "react-icons/ci";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useParams} from "react-router-dom";
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
        console.log('Form submit: ' + formValues)
    }


    return (



        <div className="row g-4 my-3">
        <div className="col-lg-12">
            <div className="row g-4 container-intro ">
                <div className="col-lg-6 d-flex flex-row justify-content-around">
                <div className="col-lg-2">
                    <div className="small-img-col d-flex flex-column  ">
                        {product.img.map((image,index) => (
                            <img  key={index} src={image} alt={`Thumbnail ${index +1}`}
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
                    <div className="input-group quantity mb-3 " style={{width: 100}}>

                        <div className="input-group-btn">
                            <button className="btn btn-sm btn-minus rounded-circle bg-light border">
                                <FaMinus/>
                            </button>
                        </div>
                        <input
                            type="text"
                            className="form-control form-control-sm text-center border-0"
                            defaultValue={1}
                        />
                        <div className="input-group-btn">
                            <button className="btn btn-sm btn-plus rounded-circle bg-light border">
                                <FaPlus/>
                            </button>
                        </div>
                    </div>


                    {/*<AddToCartForm onSubmit={handleAddToCartSubmit}></AddToCartForm>*/}
                    <button className={"btn btn-success"}>Thêm vào giỏ hàng</button>
                    <button className={"ms-3 btn btn-danger"}>Mua ngay</button>

                </div>
                <div className="col-lg-12">
                    <nav>
                        <div className="nav nav-tabs mb-3">
                            <button
                                className="nav-link active border-white border-bottom-0"
                                type="button"
                                role="tab"
                                id="nav-about-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#nav-about"
                                aria-controls="nav-about"
                                aria-selected="true"
                            >
                                Description
                            </button>
                            <button
                                className="nav-link border-white border-bottom-0"
                                type="button"
                                role="tab"
                                id="nav-mission-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#nav-mission"
                                aria-controls="nav-mission"
                                aria-selected="false"
                            >
                                Reviews
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
                            <p>
                                The generated Lorem Ipsum is therefore always free from repetition
                                injected humour, or non-characteristic words etc. Susp endisse
                                ultricies nisi vel quam suscipit{" "}
                            </p>
                            <p>
                                Sabertooth peacock flounder; chain pickerel hatchetfish,
                                pencilfish snailfish filefish Antarctic icefish goldeye aholehole
                                trumpetfish pilot fish airbreathing catfish, electric ray sweeper.
                            </p>
                            <div className="px-2">
                                <div className="row g-4">
                                    <div className="col-6">
                                        <div
                                            className="row bg-light align-items-center text-center justify-content-center py-2">
                                            <div className="col-6">
                                                <p className="mb-0">Weight</p>
                                            </div>
                                            <div className="col-6">
                                                <p className="mb-0">1 kg</p>
                                            </div>
                                        </div>
                                        <div
                                            className="row text-center align-items-center justify-content-center py-2">
                                            <div className="col-6">
                                                <p className="mb-0">Country of Origin</p>
                                            </div>
                                            <div className="col-6">
                                                <p className="mb-0">Agro Farm</p>
                                            </div>
                                        </div>
                                        <div
                                            className="row bg-light text-center align-items-center justify-content-center py-2">
                                            <div className="col-6">
                                                <p className="mb-0">Quality</p>
                                            </div>
                                            <div className="col-6">
                                                <p className="mb-0">Organic</p>
                                            </div>
                                        </div>
                                        <div
                                            className="row text-center align-items-center justify-content-center py-2">
                                            <div className="col-6">
                                                <p className="mb-0">Сheck</p>
                                            </div>
                                            <div className="col-6">
                                                <p className="mb-0">Healthy</p>
                                            </div>
                                        </div>
                                        <div
                                            className="row bg-light text-center align-items-center justify-content-center py-2">
                                            <div className="col-6">
                                                <p className="mb-0">Min Weight</p>
                                            </div>
                                            <div className="col-6">
                                                <p className="mb-0">250 Kg</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="tab-pane"
                            id="nav-mission"
                            role="tabpanel"
                            aria-labelledby="nav-mission-tab"
                        >
                            <div className="d-flex">
                                <img
                                    src="img/avatar.jpg"
                                    className="img-fluid rounded-circle p-3"
                                    style={{width: 100, height: 100}}
                                    alt=""
                                />
                                <div className="">
                                    <p className="mb-2" style={{fontSize: 14}}>
                                        April 12, 2024
                                    </p>
                                    <div className="d-flex justify-content-between">
                                        <h5>Jason Smith</h5>
                                        <div className="d-flex mb-3">
                                            <i className="fa fa-star text-secondary"/>
                                            <i className="fa fa-star text-secondary"/>
                                            <i className="fa fa-star text-secondary"/>
                                            <i className="fa fa-star text-secondary"/>
                                            <i className="fa fa-star"/>
                                        </div>
                                    </div>
                                    <p>
                                        The generated Lorem Ipsum is therefore always free from
                                        repetition injected humour, or non-characteristic words etc.
                                        Susp endisse ultricies nisi vel quam suscipit{" "}
                                    </p>
                                </div>
                            </div>
                            <div className="d-flex">
                                <img
                                    src="img/avatar.jpg"
                                    className="img-fluid rounded-circle p-3"
                                    style={{width: 100, height: 100}}
                                    alt=""
                                />
                                <div className="">
                                    <p className="mb-2" style={{fontSize: 14}}>
                                        April 12, 2024
                                    </p>
                                    <div className="d-flex justify-content-between">
                                        <h5>Sam Peters</h5>
                                        <div className="d-flex mb-3">
                                            <i className="fa fa-star text-secondary"/>
                                            <i className="fa fa-star text-secondary"/>
                                            <i className="fa fa-star text-secondary"/>
                                            <i className="fa fa-star"/>
                                            <i className="fa fa-star"/>
                                        </div>
                                    </div>
                                    <p className="text-dark">
                                        The generated Lorem Ipsum is therefore always free from
                                        repetition injected humour, or non-characteristic words etc.
                                        Susp endisse ultricies nisi vel quam suscipit{" "}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane" id="nav-vision" role="tabpanel">
                            <p className="text-dark">
                                Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor
                                sit. Aliqu diam amet diam et eos labore. 3
                            </p>
                            <p className="mb-0">
                                Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos
                                labore. Clita erat ipsum et lorem et sit
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


)


};

// function ProductDetail() {
//     const product = useLoaderData();
//     console.log(product);
//     const navigate = useNavigate();
//     return product ? (<section id="productDetail" className="pb-5">
//
//
//     </section>) : (<div>Loading..</div>);
// }

export default ProductDetail;