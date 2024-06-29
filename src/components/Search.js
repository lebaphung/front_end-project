import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {filterProducts, searchProducts} from "../redux/Action";
import { useNavigate } from "react-router-dom";

export default function Search () {
    const navigate = useNavigate();
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
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('/jsondata/categories.json')
            .then(response => response.json())
            .then(data => setCategories(data))
            .catch(error => console.error('Error fetching banner items:', error));
    }, []);

    const handleSearchChange = (value) => {
        navigate(`/list-product`); // Navigate to the desired route
        setSearch(value);
        dispatch(searchProducts(value))
    }
    const handleFilter = (filter) => {
        navigate(`/list-product?filter=${filter}`); // Navigate to the desired route
        dispatch(filterProducts(filter))
    }
    return (
        <div className={"d-flex justify-content-center my-4 fs-5"}>
            <input
                className="form-control"
                type="search"
                placeholder="Nhập từ khóa cần tìm..."
                aria-label="Search"
                value={search}
                onChange={(e) => handleSearchChange(e.target.value)}
            />
        </div>
    )
}