'use client';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import { FormInput } from './componentes/input';
import { AddInput } from './componentes/addinput';

export default function Home(){
    const { handleSubmit, register, formState:{errors} } = useForm();
    const router = useRouter();

    const onSubmit = (data:object) => {
        console.log(data)
        router.push("/finish")
    }

    return(
        <div className="flex items-center justify-center bg-backgroundImage min-h-[100vh] w-screen bg-center bg-clip-content bg-no-repeat bg-cover content-'' before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0  before:bg-filter before:mix-blend-multiply">
            <div className='bg-primary z-10 rounded-xl flex flex-col pb-20 items-center relative max-w-[600px] w-[80%]'>
                <h3 className='my-8 text-4xl text-center'>Dev Form</h3>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center w-full'>
                    <div className='w-[80%]'>
                        <label>Name</label> <br />
                        <input className={`input w-full my-3 bg-white border-black ${!!errors.name ? "input-error" : ""}`} {...register("name", {required:true, pattern:/^[a-zA-Z]+$/})}  />
                    </div>
                    
                    <div className='w-[80%]'>
                        <label>Email</label> <br />
                        <input className={`input w-full my-3 bg-white border-black ${!!errors.email ? "input-error" : ""}`} {...register("email", {required:true, pattern:/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/})}  />
                    </div>

                    <div className='w-[80%]'>
                        <label>Phone</label> <br />
                        <input className={`input w-full my-3 bg-white border-black ${!!errors.phone ? "input-error" : ""}`} {...register("phone", {required:true, pattern:/^[0-9]{7}$/})} />
                    </div>

                    <div className='w-[80%]'>
                        <label>Years of Experience</label> <br />
                        <input className={`input w-full my-3 bg-white border-black ${!!errors.experience ? "input-error" : ""}`} {...register("experience", {required:true, pattern:/^[0-9]+$/})} /> 
                    </div>

                    <FormInput label="Field" options={["Front-End", "Back-End", "Mobile", "Other"]}/>

                    <div className='w-[80%]'>
                        <label>GitHub Profile Link</label> <br />
                        <input className={`input w-full my-3 bg-white border-black ${!!errors.github ? "input-error" : ""}`} {...register("github", {required:true, pattern:/^https:\/\/github\.com\/[a-zA-Z0-9._%+-]+$/})} /> 
                    </div>

                    <div className='w-[80%]'>
                        <label>linkedin Profile Link</label> <br />
                        <input className={`input w-full my-3 bg-white border-black ${!!errors.linkedin ? "input-error" : ""}`} {...register("linkedin", {required:true, pattern:/^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9._%+-\/]+$/})} /> 
                    </div>



                    <AddInput label="Skills(max 3)" />
                    <AddInput label="Projects Link(max 3)" />
                    <button className="btn z-20 absolute bottom-[20px] right-[50%] translate-x-2/4 w-[200px]"  type="submit">Send</button>
                </form>
                
            </div>
        </div>             
    )
}
