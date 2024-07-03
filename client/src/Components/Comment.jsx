import { Grid,Box, Avatar, TextField, Button } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useState } from 'react'

export default function Comment({comment}) {
  const [commentEdit, setCommentEdit] = useState(false);
  
  return (
    <Grid conatiner sx={{display:"flex", gap:"0.5rem",position:"relative", top:"0px", left:"0px"}}>
      <Box>
        <Avatar sx={{bgcolor:"purple", fontWeight:"500", width:"2rem", height:"2rem"}}>{comment?.author[0].toUpperCase()}</Avatar>
      </Box>
      <Box sx={{width:"100%",display:"flex", flexDirection:"column", gap:"0.4rem"}}>
        <h1 className='text-base font-semibold'>{comment?.author}</h1>
        {!commentEdit ? (<p className='text-sm opacity-70'>{comment?.comment}</p>):
        (<Box sx={{display:"flex", flexDirection:"column", gap:"0.5rem"}}>
            <TextField 
            id="updatedComment"
            name="updatedComment"
            placeholder='Write new comment'
            variant='standard'
            required
            fullWidth
            />
            <div className='flex gap-[0.5rem] self-end'>
              <Button variant='text' sx={{fontSize:"10px", width:"5rem", height:"1.5rem"}}>Update</Button>
              <Button variant='text' sx={{fontSize:"10px",width:"5rem", height:"1.5rem"}} onClick={()=>setCommentEdit(false)}>Cancel</Button>
            </div>
          </Box>
        )}
      </Box>
      {!commentEdit &&
      <Box sx={{position:"absolute", top:"0px", right:"0px", display:"flex", gap:"1rem"}}>
        <EditIcon sx={{width:"1rem", height:"1rem" , cursor:"pointer"}} onClick={()=>setCommentEdit(true)}/>
        <DeleteIcon sx={{width:"1rem", height:"1rem" , cursor:"pointer"}}/>
      </Box>
      }
    </Grid>
  )
}
