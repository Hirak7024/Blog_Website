import { Grid, Button, Avatar } from '@mui/material'
import React from 'react'
import demoImage from "../Assets/Image1.jpg";

export default function Card() {
    return (
        <div className='w-[19rem] flex flex-col gap-y-2 shadow-lg'>
            <div className='w-full h-[10rem]'>
                <img className='w-full h-full object-cover object-top' src={demoImage} alt="" />
            </div>
            <div className='px-4 flex flex-col gap-2 pt-2'>
            <Button variant='text' sx={{ color: "royalblue", alignSelf: "flex-start", fontSize: "11px", backgroundColor: "rgb(241 245 249)" }}>Technology</Button>
            <h1 className='text-lg font-semibold leading-6 pt-1'>Dream destinations to visit this year in Paris</h1>
            <p className='text-sm font-light mb-4'>Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.</p>
            <hr />
            <div className='w-full flex items-center justify-between pt-2 pb-5'>
                <div className='flex items-center gap-x-2'>
                    <Avatar sx={{ width: "2rem", height: "2rem" }}><img className='h-full w-full object-cover' src={demoImage} alt="" /></Avatar>
                    <p className='text-sm opacity-80'>Hirak Jyoti Das</p>
                </div>
                <p className='text-sm opacity-70'>August 20, 2023</p>
            </div>
            </div>
        </div>
    )
}
