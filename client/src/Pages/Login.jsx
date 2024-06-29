import { Button, Grid, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import React from 'react'

const Login = () => {
    const navigate = useNavigate();
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
     <form className='shadow-xl px-[1rem] py-[2rem]'>
        <Grid container xs={12} spacing={2} sx={{display:"flex" ,flexDirection:"column", width:"25rem"}}>
            <Grid item sx={{alignSelf:"center" , marginBottom:"0.5rem"}}>
                <h1 className='text-[30px] font-bold text-gray-700'>Login</h1>
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
                <Button variant='contained' sx={{fontSize:"14px" , padding:"0.4rem 2rem"}}>Login</Button>
            </Grid>
            <Grid item sx={{display:"flex", alignItems:"center", justifyContent:"center", gap:"4px"
            }}>
                <p className='text-sm'>Don't Have an Account ?</p>
                <p className='text-sm text-blue-500 font-medium cursor-pointer' onClick={()=>navigate("/register")}>Register</p>
            </Grid>
        </Grid>
     </form>
    </div>
  )
}

export default Login
