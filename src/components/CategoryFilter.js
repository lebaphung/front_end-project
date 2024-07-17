import './css/style.css'
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {filterProducts, searchProducts, sort} from "../redux/Action";
import {useLocation, useNavigate} from "react-router-dom";

export default function CategoryFilter() {
    const location = useLocation();
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
        fetch('https://json-server-api-tv8h.onrender.com/api/categories')
            .then(response => response.json())
            .then(data => setCategories(data))
            .catch(error => console.error('Error fetching banner items:', error));
    }, []);

    const handleFilter = (filter) => {
        navigate(`/list-product`); // Navigate to the desired route
        dispatch(filterProducts(filter))
    }
    return (
        <div className={"fw-bold p-3"} style={{borderRadius: "0px 0px 10px 10px", backgroundColor: "#f8f9fa"}}>
            {categories.map((c, index) => (
                <div key={c.id} className={"mb-2  hover-category"} style={{cursor: "pointer"}}
                    onClick={(e) => handleFilter(c.id)} //bắn action
                >{c.name}</div>
            ))}
        </div>
    )
}