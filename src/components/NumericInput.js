import React, { useState } from 'react';

const NumericInput = ({ placeholder, value, onChange }) => {
    const handleChange = (e) => {
        const { value } = e.target;
        if (value === '' || (/^\d+$/.test(value) && Number(value) >= 0)) {
            onChange(value);
        }
    };

    const handleKeyPress = (e) => {
        if (!/^\d+$/.test(e.key)) {
            e.preventDefault();
        }
    };

    return (
        <input
            className="price-range-filter_input"
            type="text"
            maxLength="13"
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
        />
    );
};

export default NumericInput;
