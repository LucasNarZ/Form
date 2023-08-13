

import 'tailwindcss/tailwind.css';
import React, { useState} from 'react';
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
            <div className="flex flex-col cursor-pointer items-center justify-center w-[calc(86%-30px)]">
                <label className='self-start'>{label}</label> 
                <div className='w-full flex items-center'>
                    <input value={newAdd} className="input w-full my-3 bg-white border-black"
                    onChange={e => {
                        setNewAdd(e.target.value);
                        }} />
                    <AddIcon fontSize='large' onClick={(e) => {
                        if(list.length < 3 && !list.includes(newAdd) && newAdd !== ""){
                            create(newAdd);
                            setNewAdd("");
                        }
                        
                    }}/>
                </div>
                
            </div>
            {list.map((name, index) => {
                return(
                        <div className="flex items-center justify-center w-full" key={index}>
                            <input value={name}  className='input w-[calc(80%-38px)] my-2 bg-white border-black ' disabled onKeyDown={e => {
                                if(e.key === "Enter") create(newAdd);setNewAdd("");
                            }}/>
                            <CloseIcon fontSize='large' className="cursor-pointer" onClick={() => {
                                const updatedList = list.filter((_, i) => i !== index);
                                setList(updatedList)
                            }}/>
                        </div>
                        
                )
            })}
            

        </React.Fragment>
    )
}