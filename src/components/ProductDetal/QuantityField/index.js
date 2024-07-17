import React from 'react';
import PropTypes from 'prop-types';
import {Controller} from "react-hook-form";
import { FaMinus, FaPlus } from "react-icons/fa";




QuantityField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    disabled: PropTypes.bool,

};


function QuantityField(props) {
    const {form, name, label, disabled} = props;
    const {errors} = form;
    const hasError = !!errors[name];



    return (
       <div className="input-group quantity mb-3 " style={{display:'flex', flexDirection:'column'}} >
           <div style={{display: 'flex', alignItems: 'center', flexDirection: 'row', width: 200 }}>

               {label && <label className="col-lg-4 me-3" htmlFor={name}> <strong>{label} </strong> </label>}



               <Controller name={name}
                           control={form.control}
                           render={({field}) => (
                               <>
                                   <div className="col-lg-8" style={{display: 'flex', alignItems: 'center', flexDirection: 'row', width: 100}}>
                                   <button type="button"
                                           onClick={() => field.onChange(Math.max(1, Number(field.value) - 1))}
                                           disabled={disabled}
                                           style={{cursor: 'pointer'}}
                                           className="btn btn-sm btn-minus rounded-circle bg-light border"
                                   >
                                       <FaMinus/>
                                   </button>
                                   <input
                                       className="form-control form-control-sm text-center border-0"
                                       id={name} type="text" disabled={disabled} {...field}
                                   />

                                   <button type="button"
                                           onClick={() => field.onChange( Number(field.value) + 1)}
                                           disabled={disabled}
                                           style={{cursor: 'pointer'}}
                                           className="btn btn-sm btn-plus rounded-circle bg-light border">
                                       <FaPlus/>
                                   </button>

                                   </div>


                               </>
                           )}
               />


           </div>
           {hasError && <p className="mt-2 mb-0" style={{color: 'red', fontStyle: 'italic', fontSize: '14px'}}>
               {errors[name]?.message}
           </p>}
       </div>
           );
}

           {/*// export default QuantityField;*/}
           {/*// QuantityField.propTypes = {*/}
//     form: PropTypes.object.isRequired,
//     name: PropTypes.string.isRequired,
//     label: PropTypes.string,
//     disabled: PropTypes.bool,
//
// };
//
// function QuantityField(props) {
//     const {form, name, label, disable} = props;
//     const {errors, setValue} = form;
//     const hasError = !!errors[name];
//
//
//     return (
//         <FormControl error={hasError} fullWidth margin="normal" variant="outlined" >
//             <InputLabel htmlFor={name}>{label}</InputLabel>
//             <Controller name={name} control={form.control} render={({onChange, onBlur, value, name}) => (
//                 <Box>
//                     <IconButton onClick={() => setValue(name, Number.parseInt(value) ? 1 : Number.parseInt(value) -1)}>
//
//                     </IconButton>
//                 <OutLineInput
//                     id={name}
//                     type="number"
//                     label={label}
//                     disabled={disabled}
//                     value={value}
//                     onChange={onChange}
//                     onBlur={onBlur}
//                 />
//                 </Box>
//                 <IconButton onClick={() => setValue(name, Number.parseInt(value) ? 1 : Number.parseInt(value) +1)}>
//
//             </IconButton>
//
//             )} />
//             <FormHelperText>{errors[name]?.message}</FormHelperText>
//
//         </FormControl>
//     );
// }
export default QuantityField;