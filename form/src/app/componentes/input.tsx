'use client';

import 'tailwindcss/tailwind.css';
import { TextField, MenuItem } from "@mui/material"

import React from 'react';

interface InputProps{
    label: string;
    options?: Array<string | number>;
}

export const FormInput = ({ label, options = []}:InputProps):JSX.Element => {
    return (
        <React.Fragment>    
            <TextField select id="outlined-basic" label={label} variant='outlined' className="w-inputWidth my-3">
                {options.map((item) => {
                    return(
                        <MenuItem key={item} value={item}>{item}</MenuItem>
                    )
                })}
            </TextField>
        </React.Fragment>
        
    )
}