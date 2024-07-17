import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import PropTypes from "prop-types";
import QuantityField from "./QuantityField";

AddToCartForm.propTypes = {
    onSubmit : PropTypes.func,
};

function AddToCartForm({onSubmit = null}) {
    const schema = yup.object().shape({
        quantity: yup.number()
            .required('Vui lòng nhập số lượng')
            .min(1, 'Số lượng nhỏ nhất bằng 1').typeError('Trường số lượng phải là số!'),

    });
    const { handleSubmit, control,formState: {errors} } = useForm({
        defaultValues: {
            quantity:1,
        },
        resolver: yupResolver(schema),
    });

    const handleFormSubmit = async (values) => {
        if(onSubmit) {
            await onSubmit(values);
        }
    };

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)}>
            <QuantityField form={{control,errors}}
                           name="quantity"
                           label="Số lượng"/>
            <button type="submit"
                    className={"btn btn-success"}
            >
                Thêm vào giỏ hàng
            </button>
        </form>
    );
}

export default AddToCartForm;