import { Grid,Box, Avatar } from '@mui/material'
import demoImage from "../Assets/Image.jpg"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react'

export default function Comment() {
  return (
    <Grid conatiner sx={{display:"flex", gap:"0.5rem",position:"relative", top:"0px", left:"0px"}}>
      <Box>
        <Avatar sx={{objectFit:"cover"}} src={demoImage}/>
      </Box>
      <Box sx={{display:"flex", flexDirection:"column", gap:"0.4rem"}}>
        <h1 className='text-base font-semibold'>Hirak Jyoti Das</h1>
        <p className='text-sm opacity-70'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex minima fugit asperiores ea officia error ullam perspiciatis animi quam id provident ab, qui maiores molestias incidunt exercitationem nobis quia dolores vitae placeat, nulla quos! Eos necessitatibus vero numquam sed, ipsam inventore libero quod, a eligendi esse at officiis, itaque labore.</p>
      </Box>
      <Box sx={{position:"absolute", top:"0px", right:"0px", display:"flex", gap:"1rem"}}>
        <EditIcon sx={{width:"1rem", height:"1rem" , cursor:"pointer"}}/>
        <DeleteIcon sx={{width:"1rem", height:"1rem" , cursor:"pointer"}}/>
      </Box>
    </Grid>
  )
}
