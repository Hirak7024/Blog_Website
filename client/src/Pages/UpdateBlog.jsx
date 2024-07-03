import { Grid, TextField, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { findPostById, updatePost } from '../State/Posts/Action';

export default function UpdateBlog() {
  const category = ["Lifestye", "Technology", "Travel", "Business", "Economy", "Sports"];
  const [postData, setPostData] = useState({
    title: "",
    imageUrl: "",
    category: "",
    desc: ""
  })

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const post = useSelector(store => store.post);
  const params = useParams();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostData((prevState) => ({ ...prevState, [name]: value, }));
  };

  useEffect(() => {
    const handlePostToUpdate = async () => {
      await dispatch(findPostById(params.id));
      setPostData(post?.post);
    }
    handlePostToUpdate();
  }, [])

  const handleSubmit = async(e) => {
    e.preventDefault();

    const isSuccess = await dispatch(updatePost(params.id, postData));
    if(isSuccess){
      navigate(`/blog/${params.id}`)
    }
  }

  return (
    <div className='flex justify-center bg-orange-50 pt-[6rem] pb-[4rem]'>
      <form onSubmit={handleSubmit} className='sm:w-[80vw] w-[90vw] px-[3rem] py-[2rem] border-2 border-gray-100 bg-white'>
        <Grid container spacing={2} sx={{ display: "flex", flexDirection: "column" }}>
          <Grid item sx={{ alignSelf: "center", marginBottom: "0.5rem" }}>
            <h1 className='text-[30px] font-bold text-gray-700'>Update Blog</h1>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="title"
              name="title"
              value={postData.title}
              onChange={handleChange}
              label="Title"
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="imageUrl"
              name="imageUrl"
              value={postData.imageUrl}
              onChange={handleChange}
              label="Image URL"
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
              <Select
                id='category'
                name="category"
                value={postData.category}
                onChange={handleChange}
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
              id="desc"
              name="desc"
              value={postData.desc}
              label="Description"
              multiline
              rows={5}
              required
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} textAlign="center" sx={{ marginTop: "0.5rem" }}>
            <Button type='submit' variant='contained' sx={{ fontSize: "14px", padding: "0.5rem 2rem", bgcolor: "rgb(23 37 84)" }}>Submit</Button>
          </Grid>
        </Grid>
      </form>
    </div>
  )
}
