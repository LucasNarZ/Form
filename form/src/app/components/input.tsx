'use client';

import 'tailwindcss/tailwind.css';
import { TextField, MenuItem } from "@mui/material"
import { useForm } from 'react-hook-form';


type InputProps = {
    label: string;
    validation?: RegExp;
    type?: string;
    options?: Array<any>;
}

export const FormInput = ({ label, validation = /^$/, type = "write", options = [] }:InputProps):JSX.Element => {
    const { register, formState:{errors} } = useForm();

    return (
        <>      
            {type === "write" && 
            <TextField id="outlined-basic" label={label} variant='outlined' className="w-inputWidth my-3"
            {...register(label, {required:true, pattern:validation })}  />}
            {type === "select" &&
            <TextField select id="outlined-basic" label={label} variant='outlined' className="w-inputWidth my-3">
                {options.map((item) => {
                    return(
                        <MenuItem key={item} value={item}>{item}</MenuItem>
                    )
                })}
            </TextField>
            }
        </>
        
    )
}