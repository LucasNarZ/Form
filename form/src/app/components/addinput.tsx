

import 'tailwindcss/tailwind.css';
import React, { useState} from 'react';
import { TextField, MenuItem, Box } from "@mui/material"
import { useForm } from 'react-hook-form';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

interface AddInputProps{
    label:string;
}

export function AddInput({ label }:AddInputProps):JSX.Element{
    const [newAdd, setNewAdd] = useState<string>("");
    const [list, setList] = useState<string[]>([])

    const create = (newAdd:string) =>{
        setList([...list, newAdd])
        
    }

    return(
        <React.Fragment>
            <Box className="flex cursor-pointer items-center justify-center w-full">
                <TextField id="outlined-basic" label={label} variant='outlined' value={newAdd} className="w-[calc(80%-38px)] my-3"
                onChange={e => {
                    setNewAdd(e.target.value);
                    }} />
                <AddIcon fontSize='large' onClick={(e) => {
                    if(list.length < 3 && !list.includes(newAdd) && newAdd !== ""){
                        create(newAdd);
                        setNewAdd("");
                    }
                    
                }}/>
            </Box>
            {list.map((name, index) => {
                return(
                        <Box className="flex items-center justify-center w-full">
                            <TextField value={name} key={index}  className='w-[calc(80%-38px)] my-2' disabled onKeyDown={e => {
                                console.log("AAAAAA");if(e.key === "Enter") create(newAdd);setNewAdd("");
                            }}/>
                            <CloseIcon fontSize='large' className="cursor-pointer" onClick={() => {
                                const updatedList = list.filter((_, i) => i !== index);
                                setList(updatedList)
                            }}/>
                        </Box>
                        
                )
            })}
            

        </React.Fragment>
    )
}