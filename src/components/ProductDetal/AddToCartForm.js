import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import PropTypes from "prop-types";
import QuantityField from "./QuantityField";
// import QuantityField from "./QuantityField";

// const schema = yup.object().shape({
//     quantity: yup.number().required('Please enter quantity').min(1, 'Số lượng phải ít nhất bằng 1').typeError('Vui lòng nhập số!'),
// });
//
// const AddToCartForm = ({ onSubmit = null }) => {
//     const { register, handleSubmit, formState: { errors }, setValue } = useForm({
//         resolver: yupResolver(schema),
//         defaultValues: {
//             quantity: 1,
//         },
//     });
//
//     const handleQuantityChange = (e) => {
//         const value = parseInt(e.target.value, 10); // Đảm bảo giá trị là số nguyên
//         setValue('quantity', value); // Cập nhật giá trị vào react-hook-form
//     };
//
//     const handleFormSubmit = async (data) => {
//         if (onSubmit) {
//             await onSubmit(data);
//         }
//     };
//
//     return (
//         <form onSubmit={handleSubmit(handleFormSubmit)}>
//             <input
//                 type="number"
//                 {...register('quantity')}
//                 onChange={handleQuantityChange}
//                 defaultValue={1}
//             />
//             {errors.quantity && <p>{errors.quantity.message}</p>}
//
//             <button type="submit">Mua</button>
//         </form>
//     );
// };
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
            {/*<Controller name="quantity" control={control} render={({field}) => (*/}
            {/*    <>*/}
            {/*    <input{...field} />*/}
            {/*        {errors.quantity && <p >{errors.quantity.message}</p>}*/}
            {/*    </>*/}

            {/*)} />*/}
            {/*<QuantityField form={form} name="quantity" label="quantity" />*/}
            {/*<input name="quantity" label="quantity" form={form}/>*/}
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