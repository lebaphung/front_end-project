import {useDispatch, useSelector} from "react-redux";
import "./style.css";
import React, {useEffect, useState} from 'react';
import {Link, useOutletContext} from 'react-router-dom';
import {formatCurrency} from '../FormatCurrency';
import {Dropdown} from "react-bootstrap";
import {filterProducts, searchProducts} from "../redux/Action";

const ProductList = () => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");
    const currentFilter = useSelector(state => state.filter)
    const products = useSelector(state => {
        const products = state.products;
        const filter = state.filter;
        const search = state.search;
        return products.filter((p) => {
            const matchsFilter = (filter === "ALL") || (filter !== "ALL" && filter == p.categoryId)//filter co the la str/number nen ==
            const matchsSearch = p.name.toLowerCase().includes(search)
            return matchsFilter && matchsSearch;
        })
    });
    const cart = useSelector(state => state.cart);

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('/jsondata/categories.json')
            .then(response => response.json())
            .then(data => setCategories(data))
            .catch(error => console.error('Error fetching banner items:', error));
    }, []);

    const handleSearchChange = (value) => {
        setSearch(value);
        dispatch(searchProducts(value))
    }
    const handleFilter = (filter) => {
        dispatch(filterProducts(filter))
    }
    return (
        <div>
            <div className={"d-flex justify-content-center my-4"}>
                <input
                    className="form-control w-50"
                    type="search"
                    placeholder="Nhập để tìm cây giống..."
                    aria-label="Search"
                    value={search}
                    onChange={(e) => handleSearchChange(e.target.value)}
                />
                <select className={"text-center rounded fw-bold bg-success text-white"}
                        value={currentFilter}//1,2,3,.... else all
                        onChange={(e) => handleFilter(e.target.value)} //bắn action
                >
                    <option value="ALL">Tất cả</option>
                    {categories.map((c, index) => (
                        <option value={c.id}>{c.name}</option>
                    ))}
                </select>
            </div>
            <div className="container mt-5">
                <div className="mb-5 row">
                    {products.map(product => (
                        <div key={product.id} className={"p-2 col-3 text-center"}>
                            <div className={"p-2 border rounded-3"}>
                                <Link className={"text-decoration-none text-dark"}
                                      to={`/product/${product.id}`}>
                                    <div>
                                        <img
                                            src="https://trungtamcaygiongtiengiang.com/watermark/product/289x289x1/upload/product/z468507245738775565b9433db55df9e7e1ab61c0d949a-2025.jpg"
                                            //{product.img}
                                            className={"w-100 h-100 border rounded-3 hover-scale"}
                                            alt={product.name}/>
                                    </div>
                                    <h3>{product.name}</h3>
                                    <div className={"d-flex justify-content-center"}>Giá:&nbsp;
                                        <p className={"text-danger fw-bold"}>{formatCurrency(product.price)}</p>
                                    </div>
                                </Link>
                                <button className={"btn btn-success"}>Thêm vào giỏ hàng</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default ProductList;