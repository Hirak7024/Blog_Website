import { Grid } from '@mui/material'
import React from 'react'
import landscapeImg from "../Assets/Image.jpg"

export default function HomePage() {
  return (
    <Grid container>
        <Grid item xs={12}>
            <img src={landscapeImg} alt="" />
        </Grid>
        
    </Grid>
  )
}
