import { Grid } from '@mui/material'
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import React from 'react'

export default function Footer() {
    const quickLinks =["Home","About", "Blog","Archived", "Author", "Contact"];
    const category = ["Lifestye", "Technology", "Travel","Business", "Economy", "Sports"];
    const connections = [<FaFacebook/>,<FaYoutube/>,<FaTwitter/>,<FaPinterest/>]
    return (
        <div>
            <Grid container sx={{width:"100vw",display:"flex", gap:"1rem", backgroundColor:"rgb(33,37,41)", color:"white", padding:"1rem 4rem" }}>
                <Grid item md={5} xs={12} lg={5} sx={{ display:"flex",flexDirection:"column", gap:"10px", paddingRight:"1rem"}}>
                    <h1 className='text-[17px] font-semibold'>About</h1>
                    <p className='text-[12px] font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptates enim suscipit aspernatur distinctio dignissimos. Vero praesentium et unde omnis?</p>
                    <p className='text-[12px]'><strong>Email : </strong>info@gmail.com</p>
                    <p className='text-[12px]'><strong>Phone : </strong>9876564543</p>
                </Grid>
                <Grid item md={2} xs={12} lg={2}>
                    <h1 className='text-[17px] font-semibold'>Quick Links</h1>
                    <ul className='flex flex-col gap-1 mt-2'>
                        {quickLinks.map((item, index)=><li className='text-[14px] font-light' key={index}>{item}</li>)}
                    </ul>
                </Grid>
                <Grid item md={2} xs={12} lg={2} >
                    <h1 className='text-[17px] font-semibold'>Category</h1>
                    <ul className='flex flex-col gap-1 mt-2'>
                        {category.map((item, index)=><li className='text-[14px] font-light' key={index}>{item}</li>)}
                    </ul>
                </Grid>
                <Grid item md={2} xs={12} lg={2}>
                    <h1 className='text-[17px] font-semibold'>Connections</h1>
                    <ul className='flex gap-4 mt-3'>
                        {connections.map((item, index)=><li className='w-[1rem] h-[1rem]' key={index}>{item}</li>)}
                    </ul>
                </Grid>
            </Grid>
        </div>
    )
}
