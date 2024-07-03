import React, { useEffect, useState } from 'react'
import { Grid } from "@mui/material"
import Card from '../Components/Card';
import { useDispatch, useSelector } from 'react-redux';
import { findPostByUserId } from '../State/Posts/Action';
import { store } from '../State/store';
import { useLocation } from 'react-router-dom';

export default function UserBlogs() {
  const dispatch = useDispatch();
  const post = useSelector(store => store.post);
  const auth = useSelector(store=>store.auth);
  const jwt = localStorage.getItem("jwt");
  const location = useLocation();


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
      <Grid sx={{ width: "100vw", padding: "2rem 4rem", display: "grid", gridTemplateColumns: "repeat(3, 20rem)", justifyContent: "center", columnGap: "4rem", rowGap: "4rem" }}>
        {post?.userPosts.map((item, index) =>
          <Card key={index} post={item} />
        )}
      </Grid>
    </div>
  )
}
