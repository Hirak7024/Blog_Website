import React, { useState } from 'react'
import { FormControl, Select, InputLabel, MenuItem, Grid } from "@mui/material"
import Card from '../Components/Card';

export default function AllBlogs() {
  const [category, setCategory] = useState("");

  const handleCategory = (event) => {
    setCategory(event.target.value);
  };

  const categoryList = ["Lifestye", "Technology", "Travel", "Business", "Economy", "Sports"];
  return (
    <div className='mt-[6rem] pb-[2rem]'>
      <Grid sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0rem 3rem 0rem 5rem", }}>
        <h1 className='text-[35px] font-semibold'>All Blogs</h1>
        <FormControl sx={{ width: "12rem" }}>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="Category"
            onChange={handleCategory}
          >
            {categoryList.map((item, index) =>
              <MenuItem value={item.toLowerCase()} key={index}>{item}</MenuItem>
            )}
          </Select>
        </FormControl>
      </Grid>
      <Grid sx={{ width: "100vw", padding: "2rem 4rem", display: "grid", gridTemplateColumns: "repeat(3, 20rem)", justifyContent: "center", columnGap:"4rem", rowGap:"4rem"}}>
        {[1, 1, 1, 1, 1, 1].map((item, index) =>
          <Card key={index} />
        )}
      </Grid>
    </div>
  )
}
