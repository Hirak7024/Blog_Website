import { Button, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import { useDispatch, useSelector } from "react-redux";
import { createComment, findCommentByPostId } from "../State/Comments/Action";

export default function Comments({ postId }) {
    const [commentNo, setCommentNo] = useState(2);
    const dispatch = useDispatch();
    const comment = useSelector(store => store.comment);
    const handleMoreCommentNo = () => {
        setCommentNo((currentCommentNo) => currentCommentNo + 2);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);
        const commentData = {
            comment: data.get("comment"),
            postId: postId
        };
        try {
            await dispatch(createComment(commentData)); // Await the createComment action
            dispatch(findCommentByPostId(postId)); // Dispatch findCommentByPostId after createComment
        } catch (error) {
            console.error("Failed to create comment and fetch comments: ", error);
        }
    };

    useEffect(() => {
        dispatch(findCommentByPostId(postId));
    }, [dispatch, postId])

    console.log("Comments are : ", comment)

    return (
        <Grid container xs={12} sx={{ marginTop: "2rem" }}>
            <form className="w-full" onSubmit={handleSubmit}>
                <Grid
                    item
                    xs={12}
                    sx={{ display: "flex", alignItems: "center", width: "100%" }}
                >
                    <TextField
                        fullWidth
                        required
                        variant="standard"
                        id="comment"
                        name="comment"
                        label="Write your comment"
                    />
                    <Button variant="contained" type="submit">
                        <SendIcon />
                    </Button>
                </Grid>
            </form>
            <Grid item xs={12} sx={{ width: "100%", marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                {comment?.comments?.map((item, index) => (
                    <Comment key={index} comment={item} />
                ))}
                {/* {commentNo < comment?.comments?.length ?
                    (<Button variant="text" sx={{ width: "8rem", alignSelf: "center" }} onClick={handleMoreCommentNo}>View More</Button>) :
                    (<Button variant="text" sx={{ width: "8rem", alignSelf: "center" }} onClick={() => setCommentNo(2)}>View Less</Button>)
                } */}
            </Grid>
        </Grid>
    );
}
