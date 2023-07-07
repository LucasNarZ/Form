'use client';

import 'tailwindcss/tailwind.css';
import { TextField, MenuItem } from "@mui/material"
import { RegisterOptions, useForm } from 'react-hook-form';
import { UseFormRegister, FieldErrors } from 'react-hook-form';


import React, { useEffect, useState } from 'react';

interface InputProps{
    label: string;
    validation?: RegExp;
    type?: string;
    options?: Array<any>;
    register?: any;
    error?: any;
}

export const FormInput = ({ label, validation = /^$/, type = "write", options = [], error = true, register}:InputProps):JSX.Element => {
    return (
        <React.Fragment>    
                {type === "write" && 
                <TextField id="outlined-basic" label={label} variant='outlined'  error={!!error} className="w-inputWidth my-3"
                {...register(label, {required:true, pattern:validation})}  />}
            
            {type === "select" &&
            <TextField select id="outlined-basic" label={label} variant='outlined' className="w-inputWidth my-3">
                {options.map((item) => {
                    return(
                        <MenuItem key={item} value={item}>{item}</MenuItem>
                    )
                })}
            </TextField>
            }
        </React.Fragment>
        
    )
}