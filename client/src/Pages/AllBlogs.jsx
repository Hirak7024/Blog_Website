import React, { useEffect, useState } from 'react'
import { FormControl, Select, InputLabel, MenuItem, Grid,Typography } from "@mui/material"
import Card from '../Components/Card';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from '../State/Posts/Action';
import CircularProgress from '@mui/material/CircularProgress';

export default function AllBlogs() {
  const [category, setCategory] = useState("None");
  const dispatch = useDispatch();
  const post = useSelector(store => store.post);

  const handleCategory = (event) => {
    setCategory(event.target.value);
  };
  
  useEffect(() => {
    dispatch(getAllPosts(category));
    console.log("All Posts are : ", post);
  }, [category])

  const categoryList = ["None","Lifestye", "Technology", "Travel", "Business", "Economy", "Sports"];
  return (
    <div className='mt-[6rem] pb-[2rem]'>
      <Grid sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: {xs:"0rem 1rem" ,sm:"0rem 3rem 0rem 5rem"}, }}>
        <h1 className='text-[25px] sm:text-[35px] font-semibold'>All Blogs</h1>
        <FormControl sx={{ width: "12rem" }}>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="Category"
            default="None"
            onChange={handleCategory}
          >
            {categoryList.map((item, index) =>
              <MenuItem value={item} key={index}>{item}</MenuItem>
            )}
          </Select>
        </FormControl>
      </Grid>
      <Grid
      sx={{
        width: "100vw",
        padding: "2rem 4rem",
        display: "grid",
        gridTemplateColumns: {xs:"repeat(1, 18rem)", sm:"repeat(2, 18rem)", lg: "repeat(3, 18rem)"},
        justifyContent: "center",
        columnGap: {xs: "2rem", md:"4rem"},
        rowGap: "4rem",
      }}
    >
      {post?.loading ? (
        <CircularProgress sx={{marginLeft:"35vw" }} />
      ) : post?.error ? (
        <Typography variant="h6" color="error">
          {post.error}
        </Typography>
      ) : post?.posts?.length === 0 ? (
        <Typography variant="h6">
          No posts available
        </Typography>
      ) : (
        post?.posts.map((item, index) => (
          <Card key={index} post={item} />
        ))
      )}
    </Grid>
    </div>
  )
}
