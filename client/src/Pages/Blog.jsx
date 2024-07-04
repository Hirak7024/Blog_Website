import { Grid, Avatar, Menu, MenuItem } from '@mui/material'
import React, { useEffect, useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate, useParams } from 'react-router-dom';
import Comments from '../Components/Comments';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost, findPostById } from '../State/Posts/Action';
import { format, parseISO } from 'date-fns';
import { toast } from 'react-toastify';
import CircularProgress from '@mui/material/CircularProgress';

export default function Blog() {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const openUserMenu = Boolean(anchorEl);

    const dispatch = useDispatch();
    const post = useSelector(store => store.post);
    const auth = useSelector(store => store.auth);
    const params = useParams();

    const handleUserClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseUserMenu = (event) => {
        setAnchorEl(null);
    };

    useEffect(() => {
        dispatch(findPostById(params.id));
    }, [])

    const date = post?.post?.createdAt ? parseISO(post.post.createdAt) : null;
    const formattedDate = date ? format(date, 'MMMM do, yyyy') : '';

    const handleEdit = () => {
        if (auth?.user) {
            navigate(`/updateBlog/${params.id}`)
        }
        else {
            toast.error("You need to login first");
        }
    }

    const handleDelete = async() => {
        if(auth?.user){
            const isSuccess = await dispatch(deletePost(params.id));
            if(isSuccess){
                navigate("/");
            }
        }
        else{
            toast.error("You need to login first");
        }
    }
    console.log("Post is :", post)

    return (
        <div className='w-full h-full flex flex-col items-center py-[6rem]'>
            {post?.loading? (<CircularProgress/>) :
            
            <Grid container spacing={3} sx={{ width:{xs:"90vw", sm: "80vw", lg:"70vw"}, display: "flex", flexDirection: "column" }}>
                <Grid item xs={12}>
                    <p className='w-[9rem] h-[2.3rem] rounded flex items-center justify-center bg-blue-500 text-white text-base font-medium'>{post?.post?.category}</p>
                </Grid>
                <Grid item xs={12} sx={{ position: "relative", top: "0px", left: "0px" }}>
                    <h1 className='text-[30px] font-bold'>{post?.post?.title}</h1>

                    <div className='absolute right-[-5vw] top-[4vh] cursor-pointer' >
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
                            <MenuItem onClick={handleEdit}>Edit</MenuItem>
                            <MenuItem onClick={handleDelete}>Delete</MenuItem>
                        </Menu>
                    </div>
                </Grid>
                <Grid xs={12} sx={{ display: "flex", justifyContent: "space-between", padding: "0 2vw", alignItems: "center", marginTop: "1rem" }}>
                    <div className='flex items-center gap-x-2'>
                        <Avatar sx={{ width: "2rem", height: "2rem", bgcolor: "purple", fontWeight: "500" }}>{post?.post?.username[0].toUpperCase()}</Avatar>
                        <p className='text-base opacity-80 '>{post?.post?.username}</p>
                    </div>
                    <p className='text-base opacity-70'>{formattedDate}</p>
                </Grid>
                <div className='w-full h-[25rem] mt-[1.5rem]'>
                    <img src={post?.post?.imageUrl} className='w-full h-full object-cover' alt="" />
                </div>
                <Grid item xs={12}>
                    <p>{post?.post?.desc}</p>
                </Grid>
                <Grid item>
                    <Comments postId={params.id} />
                </Grid>
            </Grid>
            }
        </div>
    )
}
