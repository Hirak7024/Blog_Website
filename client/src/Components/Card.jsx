import { Button, Avatar } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import "./Card.css";

export default function Card({ post }) {
    const navigate = useNavigate();
    const date = parseISO(post.createdAt);
    const formattedDate = format(date, 'MMMM do, yyyy');

    const handleClick = () => {
        navigate(`/blog/${post._id}`)
    }

    return (
        <div onClick={handleClick} className='w-[19rem] flex flex-col gap-y-2 shadow-lg cursor-pointer'>
            <div className='w-[19rem] h-[10rem]'>
                <img className='w-full h-full object-cover object-top' src={post?.imageUrl} alt="" />
            </div>
            <div className='px-4 flex flex-col gap-2 pt-2'>
                <Button variant='text' sx={{ color: "royalblue", alignSelf: "flex-start", fontSize: "11px", backgroundColor: "rgb(241 245 249)" }}>{post?.category}</Button>
                <h1 className='text-lg font-semibold leading-6 pt-1 line-clamp-3'>{post?.title}</h1>
                <p className='text-sm font-light mb-4 line-clamp-2'>{post?.desc.slice(0, 200)}</p>
                <hr />
                <div className='w-full flex items-center justify-between pt-2 pb-5'>
                    <div className='flex items-center gap-x-2 flex-1'>
                        <Avatar sx={{ width: "2rem", height: "2rem", bgcolor: "purple", fontWeight: "500" }}>{post?.username[0].toUpperCase()}</Avatar>
                        <p className='text-sm opacity-80 textOverflow'>{post?.username}</p>
                    </div>
                    <p className='text-sm opacity-70 flex-1 text-right textOverflow'>{formattedDate}</p>
                </div>
            </div>
        </div>
    )
}
