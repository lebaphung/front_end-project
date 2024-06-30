import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { priceFilter, sort } from '../redux/Action';
import NumericInput from './NumericInput';
import './style.css';

export default function DetailFilters() {
    const [startPrice, setStartPrice] = useState('');
    const [endPrice, setEndPrice] = useState('');
    const [typeSort, setTypeSort] = useState('');
    const dispatch = useDispatch();
    const [activeSort, setActiveSort] = useState('default'); // Track the active sort type

    const handleRangePriceFilter = () => {
        const start = startPrice !== '' ? Number(startPrice) : 0;
        const end = endPrice !== '' ? Number(endPrice) : Infinity;

        if (startPrice !== '' || endPrice !== '') {
            document.getElementById("rangePriceValidation").innerHTML = '';
            dispatch(priceFilter(start, end));
        } else {
            document.getElementById("rangePriceValidation").innerHTML = 'Vui lòng điền khoảng giá phù hợp';
        }
    };


    const handleSort = (value) => {
        setTypeSort(value)
        setActiveSort(value);//active button gui
        dispatch(sort(value));
    };

    return (
        <div className="d-flex">
            <div className="w-25 price-filter-group bg-light">
                <div>Khoảng giá</div>
                <div className="price-range-filter">
                    <NumericInput
                        placeholder="₫ TỪ"
                        value={startPrice}
                        onChange={(value) => setStartPrice(value)}
                    />
                    <div className="price-range-line"></div>
                    <NumericInput
                        placeholder="₫ ĐẾN"
                        value={endPrice}
                        onChange={(value) => setEndPrice(value)}
                    />
                </div>
                <div id="rangePriceValidation" className="text-center text-danger"></div>
                <div>
                    <button type="button" className="w-100 btn btn-outline-success" onClick={handleRangePriceFilter}>
                        Áp Dụng
                    </button>
                </div>
            </div>
            <div className="w-75 d-flex">
                <div className="sort-group h-50 bg-light">
                    <div className="sort-item">Sắp xếp theo:</div>
                    <div className="sort-item">
                        <button type="button"
                                className={`btn ${activeSort === 'default' ? 'btn-success' : 'btn-outline-success'}`}
                                onClick={(e) => handleSort("default")}
                        >
                            Mặc định
                        </button>
                    </div>
                    <div className="sort-item">
                        <button type="button"
                                className={`btn ${activeSort === 'newest' ? 'btn-success' : 'btn-outline-success'}`}
                                onClick={(e) => handleSort("newest")}
                        >
                            Mới nhất
                        </button>
                    </div>
                    <div className="sort-item">
                        <button type="button"
                                className={`btn ${activeSort === 'bestselling' ? 'btn-success' : 'btn-outline-success'}`}
                                onClick={(e) => handleSort("bestselling")}
                        >
                            Bán chạy
                        </button>
                    </div>
                    <div className="sort-item">
                        <select
                            className="form-select"
                            aria-label="Default select example"
                            value={typeSort}
                            onChange={(e) => handleSort(e.target.value)}
                        >
                            <option value="default">Giá</option>
                            <option value="price_asc">Giá: Thấp đến cao</option>
                            <option value="price_desc">Giá: Cao đến thấp</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}
