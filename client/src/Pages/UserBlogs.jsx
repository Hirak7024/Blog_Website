import React from 'react'
import { Grid } from "@mui/material"
import Card from '../Components/Card';

export default function UserBlogs() {

  return (
    <div className='mt-[6rem] pb-[2rem]'>
      <Grid>
        <h1 className='text-[35px] font-semibold ml-[5rem]'>My Blogs</h1>
      </Grid>
      <Grid sx={{ width: "100vw", padding: "2rem 4rem", display: "grid", gridTemplateColumns: "repeat(3, 20rem)", justifyContent: "center", columnGap:"4rem", rowGap:"4rem"}}>
        {[1, 1, 1, 1, 1, 1].map((item, index) =>
          <Card key={index} />
        )}
      </Grid>
    </div>
  )
}
