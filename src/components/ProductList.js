import {useDispatch, useSelector} from "react-redux";
import "./css/style.css";
import React, {useEffect, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {formatCurrency} from '../FormatCurrency';
import DetailFilters from "./DetailFilters";
import {addToCart} from "../redux/Action";

const ProductList = () => {
    const dispatch = useDispatch();
    const search = useSelector(state => state.search)
    const currentFilter = useSelector(state => state.filter)
    const startPrice = useSelector(state => state.startPrice)
    const endPrice = useSelector(state => state.endPrice)
    const products = useSelector(state => {
        const products = state.products;
        const filter = state.filter;
        const search = state.search;
        return products.filter((p) => {
            const matchsFilter = (filter === "ALL") || (filter !== "ALL" && filter == p.categoryId); // filter can be str/number so == is used
            const matchsSearch = p.name.toLowerCase().includes(search);
            const matchsStartPrice = startPrice ? (p.price >= startPrice) : true;
            const matchsEndPrice = endPrice ? (p.price <= endPrice) : true;

            return matchsFilter && matchsSearch && matchsStartPrice && matchsEndPrice;
        });
    });
    const cart = useSelector(state => state.cart);

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://json-server-api-tv8h.onrender.com/api/products')
            .then(response => response.json())
            .then(data => setCategories(data))
            .catch(error => console.error('Error fetching banner items:', error));
    }, []);

    // Phân trang
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(8); // số sản phẩm hiển thị
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
        pageNumbers.push(i);
    }
    //
    const location = useLocation();

    useEffect(() => {
        setCurrentPage(1);
    }, [currentFilter, startPrice, endPrice, search]);

    return (
        <div>
            <div className="container mt-2">
                <DetailFilters/>
                <div className="mb-5 row">
                    <div className="vct_title text-center mt-5">
                        <h2 className={"background-image-vct"}>
                            {search.length > 0 && (<div>Tìm kiếm ({products.length}): "{search}"</div>)}
                        </h2>
                    </div>
                    {currentProducts.map(product => (
                        <div key={product.id} className={"p-2 col-lg-3 col-md-4 col-sm-6 col-12 text-center"}>
                            <div className={"p-2"}>
                                <Link className={"text-decoration-none text-dark"}
                                      to={`/product/${product.id}`}>
                                    <div className={"p-2"}>
                                        <img
                                            src={product.img[0]}
                                            className={"w-100 border rounded-3 hover-scale"}
                                            style={{height: "200px"}}
                                            alt={product.name}/>
                                    </div>
                                    <h3 className={"hover-name"}
                                        style={{height: "60px"}}
                                    >{product.name}</h3>
                                    <div className={"d-flex justify-content-center"}>Giá:&nbsp;
                                        <p className={"text-danger fw-bold"}>{formatCurrency(product.price)}</p>
                                    </div>
                                </Link>
                                <button className={"btn btn-success"}

                                        onClick={() => dispatch(addToCart(
                                            {
                                                id: product.id,
                                                product,
                                                quantity: 1
                                            }
                                        )) }


                                >Thêm vào giỏ hàng</button>
                            </div>
                        </div>
                    ))}
                </div>
                {/*Phân Trang*/}
                <ul className="pagination d-flex justify-content-center">
                    {pageNumbers.map(number => (
                        <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                            <button onClick={() => paginate(number)} className="page-link">
                                {number}
                            </button>
                        </li>
                    ))}
                </ul>
                {/**/}
            </div>
        </div>
    )
}
export default ProductList;
