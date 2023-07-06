'use client';

import 'tailwindcss/tailwind.css';
import { Container, TextField, Typography, Button, Box } from "@mui/material"

import React from 'react';

import Head from 'next/head'
import { FormInput } from './components/input'
import { AddInput } from './components/addinput'

export default function Home(){
    return(
        <React.Fragment>
            <Head>
                <meta charSet="UTF-8"/>
                <link rel="icon" href="icon.svg" type="image/svg+xml"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="keywords" content="dev developers form front-end search"/>
                <meta name="title" content='Developers Form'/>
                <meta name="description" content='Form for developers and a dashboard for data.'/>
            </Head>
            <Box className="flex items-center bg-backgroundImage w-formHeight bg-center bg-clip-content bg-no-repeat bg-cover content-'' before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0  before:bg-filter before:mix-blend-multiply">
                <Container className='bg-primary z-10 rounded-xl flex flex-col items-center relative ' maxWidth="sm">
                    <h3 className='mt-5 font-xl'>Dev Form</h3>
                    <FormInput label="Name" validation={/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/} />
                    <FormInput label="Email" validation={/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/} />
                    <FormInput label="Phone" validation={/^[0-9]{7}$/} />
                    <FormInput label="Years of experience" validation={/^[0-9]+$/}/>
                    <FormInput label="Field" type='select' options={["Front-End", "Back-End", "Mobile", "Other"]} />
                    <FormInput label="GitHub Profile Link" validation={/^github\.com\/[a-zA-Z0-9._%+-]+$/} />
                    <FormInput label="Linkedin Profile Link" validation={/^github\.com\/[a-zA-Z0-9._%+-]+$/} />
                    <AddInput label="Skills(max 3)" />
                    <AddInput label="Projects Link(max 3)" />
                    <Button variant='outlined' className="z-20"sx={{
                        position:"absolute",
                        bottom:"20px",
                        left:"50%",
                        transform:"translateX(-50%)",
                        width:"200px",
                    }}>Send</Button>
                </Container>
            </Box>
        </React.Fragment>
                 
    )
}