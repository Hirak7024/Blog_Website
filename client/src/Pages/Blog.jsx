import { Grid, Avatar, Menu, MenuItem } from '@mui/material'
import demoImage from "../Assets/Image.jpg";
import demoImage2 from "../Assets/Image2.jpg";
import React, { useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom';
import Comments from '../Components/Comments';

export default function Blog() {
    const navigate = useNavigate();
    const [isSignedIn, setIsSignedIn] = useState(true);
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const openUserMenu = Boolean(anchorEl);

    const handleUserClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseUserMenu = (event) => {
        setAnchorEl(null);
    };
    return (
        <div className='w-screen flex flex-col items-center'>
            <Grid container spacing={3} sx={{ width: "70vw", padding: "6rem 0rem", display: "flex", flexDirection: "column" }}>
                <Grid item xs={12}>
                    <p className='w-[9rem] h-[2.3rem] rounded flex items-center justify-center bg-blue-500 text-white text-base'>Technology</p>
                </Grid>
                <Grid item xs={12} sx={{ position: "relative", top: "0px", left: "0px" }}>
                    <h1 className='text-[30px] font-bold'>The Impact of Technology on the Workplace: How Technology is Changing</h1>

                    <div className='absolute right-[-5vw] top-[5vh] cursor-pointer' >
                        <MoreVertIcon
                            onClick={handleUserClick}
                            aria-controls={open ? "basic-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                        />
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={openUserMenu}
                            onClose={handleCloseUserMenu}
                            MenuListProps={{
                                "aria-labelledby": "basic-button",
                            }}
                        >
                            <MenuItem onClick={() => navigate("/updateBlog")}>Edit</MenuItem>
                            <MenuItem>Delete</MenuItem>
                        </Menu>
                    </div>
                </Grid>
                <Grid xs={12} sx={{ display: "flex", justifyContent: "space-between", padding: "0 2vw", alignItems: "center", marginTop: "1rem" }}>
                    <div className='flex items-center gap-x-2'>
                        <Avatar sx={{ width: "2rem", height: "2rem" }}><img className='h-full w-full object-cover' src={demoImage} alt="" /></Avatar>
                        <p className='text-sm opacity-80'>Hirak Jyoti Das</p>
                    </div>
                    <p className='text-sm opacity-70'>August 20, 2023</p>
                </Grid>
                <div className='w-full h-[25rem] mt-[1.5rem]'>
                    <img src={demoImage2} className='w-full h-full object-cover' alt="" />
                </div>
                <Grid item xs={12}>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, doloribus, labore veritatis ipsum iste tempora voluptate numquam perspiciatis necessitatibus perferendis asperiores ea quia tempore odio, ut animi porro blanditiis cupiditate laborum voluptatem aliquid reprehenderit incidunt! Magni saepe veniam libero nostrum quo reiciendis, illo enim dolore maxime earum, ut quae atque, fugit natus dolorem! Quas soluta optio illum sequi sunt perferendis, sapiente distinctio officiis ab fuga at dolore expedita! Consequuntur doloribus ad iusto necessitatibus eum qui deleniti ratione fuga, sint, quis ex in atque libero blanditiis quibusdam reiciendis dignissimos voluptate ipsum natus. Labore vitae sed minima sit alias consequuntur quae enim pariatur, cumque, necessitatibus dolore nostrum magni illo? Eius excepturi, autem similique possimus dolorem obcaecati sapiente nisi ratione cum quibusdam. Nostrum vitae minus maxime, dolorum reprehenderit eius repudiandae omnis dolores similique, id est necessitatibus. Quam eligendi similique debitis? Esse numquam cupiditate velit voluptatum quisquam quas ab exercitationem, veniam quidem nobis necessitatibus, sunt sequi in dolores voluptate unde, laboriosam ducimus autem. Hic doloremque, nemo doloribus assumenda rem delectus alias quasi modi deserunt enim sit explicabo magnam laboriosam eos dolore soluta adipisci! Dicta necessitatibus laborum porro natus consequuntur rerum? Porro sapiente ab ipsa ea maxime, accusamus iure atque, sed error facilis delectus? Aliquam.</p>
                </Grid>
                <Grid item>
                    <Comments />
                </Grid>
            </Grid>
        </div>
    )
}
