'use client';

import React from 'react';
import 'tailwindcss/tailwind.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { Container, Button, Box, TextField } from "@mui/material";
import { useForm } from 'react-hook-form';


import { FormInput } from './components/input';
import { AddInput } from './components/addinput';

export default function Home(){
    const { handleSubmit, register, formState:{errors} } = useForm();
    const router = useRouter();

    const onSubmit = (data:object) => {
        console.log(data)
        router.push("/finish")
    }

    return(
        <React.Fragment>
            <Box className="flex items-center bg-backgroundImage min-h-formHeight w-screen bg-center bg-clip-content bg-no-repeat bg-cover content-'' before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0  before:bg-filter before:mix-blend-multiply">
                <Container className='bg-primary z-10 rounded-xl flex flex-col pb-20 items-center relative ' maxWidth="sm">
                    <h3 className='my-8 text-4xl text-center'>Dev Form</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center w-full'>
                        <TextField id="outlined-basic" label={"Name"} variant='outlined'  error={!!errors.name} className="w-inputWidth mt-3 mb-3"
                        {...register("name", {required:true, pattern:/^[a-zA-Z]+$/})}  />

                        <TextField id="outlined-basic" label={"Email"} variant='outlined'  error={!!errors.email} className="w-inputWidth my-3"
                        {...register("email", {required:true, pattern:/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/})}  />

                        <TextField id="outlined-basic" label={"Phone"} variant='outlined'  error={!!errors.phone} className="w-inputWidth my-3"
                        {...register("phone", {required:true, pattern:/^[0-9]{7}$/})} />

                        <TextField id="outlined-basic" label={"Years of Experience"} variant='outlined'  error={!!errors.experience} className="w-inputWidth my-3" {...register("experience", {required:true, pattern:/^[0-9]+$/})} /> 

                        <FormInput label="Field" options={["Front-End", "Back-End", "Mobile", "Other"]}/>

                        <TextField id="outlined-basic" label={"Git Hub Profile Link"} variant='outlined'  error={!!errors.github} className="w-inputWidth my-3" {...register("github", {required:true, pattern:/^https:\/\/github\.com\/[a-zA-Z0-9._%+-]+$/})} /> 

                        <TextField id="outlined-basic" label={"Linkedin Profile Link"} variant='outlined'  error={!!errors.linkedin} className="w-inputWidth my-3" {...register("linkedin", {required:true, pattern:/^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9._%+-\/]+$/})} /> 

                        <AddInput label="Skills(max 3)" />
                        <AddInput label="Projects Link(max 3)" />
                        <Button variant='outlined' className="z-20"  type="submit" sx={{
                        position:"absolute",
                        bottom:"20px",
                        left:"50%",
                        transform:"translateX(-50%)",
                        width:"200px",
                        }}>Send</Button>
                    </form>
                    
                </Container>
            </Box>
        </React.Fragment>
                 
    )
}
