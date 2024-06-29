import { Button, Grid, TextField } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate();
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
     <form className='shadow-xl px-[1rem] py-[2rem]'>
        <Grid container xs={12} spacing={2} sx={{display:"flex" ,flexDirection:"column", width:"25rem"}}>
            <Grid item sx={{alignSelf:"center" , marginBottom:"0.5rem"}}>
                <h1 className='text-[30px] font-bold text-gray-700'>Register</h1>
            </Grid>
            <Grid item xs={12} sx={{marginLeft:"1rem"}}> 
                <TextField
                  id="name"
                  name="name"
                  label="Name"
                  required
                  fullWidth
                />
            </Grid>
            <Grid item xs={12} sx={{marginLeft:"1rem"}}>
                <TextField 
                  id="email"
                  name="email"
                  label="Email"
                  required
                  fullWidth
                />
            </Grid>
            <Grid item xs={12} sx={{marginLeft:"1rem"}}>
                <TextField 
                  id="password"
                  name="password"
                  label="Password"
                  required
                  fullWidth
                />
            </Grid>
            <Grid item xs={12} textAlign="center" sx={{marginTop:"0.5rem"}}>
                <Button variant='contained' sx={{fontSize:"14px" , padding:"0.5rem 2rem"}}>Register</Button>
            </Grid>
            <Grid item sx={{display:"flex", alignItems:"center", justifyContent:"center", gap:"4px"
            }}>
                <p className='text-sm'>Already Have an Account ?</p>
                <p className='text-sm text-blue-500 font-medium cursor-pointer' onClick={()=> navigate("/")}>Login</p>
            </Grid>
        </Grid>
     </form>
    </div>
  )
}

export default Register
