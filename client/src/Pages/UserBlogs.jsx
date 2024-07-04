import React, { useEffect, useState } from 'react'
import { Grid, Typography } from "@mui/material"
import Card from '../Components/Card';
import { useDispatch, useSelector } from 'react-redux';
import { findPostByUserId } from '../State/Posts/Action';
import CircularProgress from '@mui/material/CircularProgress';


export default function UserBlogs() {
  const dispatch = useDispatch();
  const post = useSelector(store => store.post);
  const auth = useSelector(store => store.auth);


  useEffect(() => {
    if (auth?.user) {
      dispatch(findPostByUserId());
    }
  }, [auth?.user]);

  return (
    <div className='mt-[6rem] pb-[2rem]'>
      <Grid>
        <h1 className='text-[35px] font-semibold ml-[5rem]'>My Blogs</h1>
      </Grid>
      <Grid
        sx={{
          width: "100vw",
          padding: "2rem 4rem",
          display: "grid",
          gridTemplateColumns: { xs: "repeat(1, 18rem)", sm: "repeat(2, 18rem)", lg: "repeat(3, 18rem)" },
          justifyContent: "center",
          columnGap: { xs: "2rem", md: "4rem" },
          rowGap: "4rem"
        }}
      >
        {post?.loading ? (
          <CircularProgress sx={{ marginLeft: "35vw" }} />
        ) : post?.error ? (
          <Typography variant="h6" color="error">
            {post.error}
          </Typography>
        ) : post?.posts?.length === 0 ? (
          <Typography variant="h6">
            No posts available
          </Typography>
        ) : (
          post?.userPosts.map((item, index) => (
            <Card key={index} post={item} />
          ))
        )}
      </Grid>
    </div>
  )
}
