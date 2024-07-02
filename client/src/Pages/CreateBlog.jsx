import { Grid, TextField, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createPost } from '../State/Posts/Action';

export default function CreateBlog() {
  const category = ["Lifestye", "Technology", "Travel", "Business", "Economy", "Sports"];
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async(event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const userData = {
      title: data.get("title"),
      imageUrl: data.get("imageUrl"),
      category: data.get("category"),
      desc: data.get("description"),
    };

    console.log(userData);
    const isSuccess = await dispatch(createPost(userData))
    if(isSuccess){
      navigate("/");
    }
    
  };

  return (
    <div className='flex justify-center bg-orange-50 pt-[6rem] pb-[4rem]'>
      <form onSubmit={handleSubmit} className='w-[60vw] px-[3rem] py-[2rem] border-2 border-gray-100 bg-white'>
        <Grid container spacing={2} sx={{ display: "flex", flexDirection: "column" }}>
        <Grid item sx={{alignSelf:"center" , marginBottom:"0.5rem"}}>
                <h1 className='text-[30px] font-bold text-gray-700'>Create New Blog</h1>
            </Grid>
          <Grid item xs={12}>
            <TextField
              id="title"
              name="title"
              label="Title"
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="imageUrl"
              name="imageUrl"
              label="Image URL"
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
              <Select
                name="category"
                // value={productData.topLevelCategory}
                // onChange={handleChange}
                label="Category"
                required
              >
                {category.map((item, index) =>
                  <MenuItem value={item} key={index}>{item}</MenuItem>
                )}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="description"
              name="description"
              label="Description"
              multiline
              rows={5}
              required
            // onChange={handleChange}
            // value={productData.description}
            />
          </Grid>
          <Grid item xs={12} textAlign="center" sx={{marginTop:"0.5rem"}}>
                <Button type='submit' variant='contained' sx={{fontSize:"14px" , padding:"0.5rem 2rem", bgcolor:"rgb(23 37 84)"}}>Submit</Button>
            </Grid>
        </Grid>
      </form>
    </div>
  )
}
