import { Box, Grid } from '@mui/material'
import React from 'react'
import landscapeImg from "../Assets/Image.jpg"
import Card from '../Components/Card'

export default function HomePage() {
    return (
        <Grid container>
            <Box item xs={12} sx={{ backgroundImage: `url(${landscapeImg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "80vh", width: "100vw", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", color: "white", gap: "0.8rem" }}>
                <p className='text-[35px] font-semibold text-center leading-9'>Richird Norton photorealistic <br /> rendering as real photos</p>
                <p className='text-[12px] font-light text-center mt-[0.5rem]'>Progressively incentivize cooperative systems through technically sound <br /> functionalities. The credibly productivate seamless data.</p>
                <p className='text-[12px] font-semibold text-center'>By Jennifer Lawrence</p>
            </Box>
            <Box sx={{padding:"2rem 0", display:"flex", flexDirection:"column"}}>
                <h1 className='text-[30px] font-semibold opacity-75 ml-[3.8rem]'>Popular Blogs</h1>
                <Grid sx={{ width: "100vw", padding: "2rem 4rem", display: "grid", gridTemplateColumns: "repeat(3, 20rem)", justifyContent: "center", columnGap:"4rem", rowGap:"4rem" }} >
                    {[1, 1, 1, 1, 1, 1].map((item) => <Card />)}
                </Grid>
            </Box>

        </Grid>
    )
}
