'use client';

import React from 'react';
import 'tailwindcss/tailwind.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { Container, Button, Box } from "@mui/material";
import { useForm } from 'react-hook-form';


import { FormInput } from './components/input';
import { AddInput } from './components/addinput';

export default function Home(){
    const { handleSubmit,register, formState:{errors} } = useForm();
    const router = useRouter();

    const onSubmit = (data:object) => {
        console.log("a")
    }



    return(
        <React.Fragment>
            <Box className="flex items-center bg-backgroundImage min-h-formHeight w-screen bg-center bg-clip-content bg-no-repeat bg-cover content-'' before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0  before:bg-filter before:mix-blend-multiply">
                <Container className='bg-primary z-10 rounded-xl flex flex-col pb-20 items-center relative ' maxWidth="sm">
                    <h3 className='my-8 text-4xl'>Dev Form</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center w-full'>
                        <FormInput label="Name" validation={/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/} error={errors.name} register={register}/>
                        <FormInput label="Email" validation={/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/}  error={errors.email} register={register}/>
                        <FormInput label="Phone" validation={/^[0-9]{7}$/}  error={errors.phone} register={register}/>
                        <FormInput label="Years of experience" validation={/^[0-9]+$/}  register={register}/>
                        <FormInput label="Field" type='select' options={["Front-End", "Back-End", "Mobile", "Other"]}/>
                        <FormInput label="GitHub Profile Link" validation={/^github\.com\/[a-zA-Z0-9._%+-]+$/}  register={register}/>
                        <FormInput label="Linkedin Profile Link" validation={/^github\.com\/[a-zA-Z0-9._%+-]+$/}   register={register}/>
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
