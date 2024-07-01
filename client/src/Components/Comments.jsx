import { Button, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import React, { useState } from "react";
import Comment from "./Comment";

export default function Comments() {
    const [commentNo, setCommentNo] = useState(2);
    const CommentArray = [1,1,1,1,1,1,1,1,1];
    const handleMoreCommentNo = () => {
        setCommentNo((currentCommentNo) => currentCommentNo + 2);
    }
    return (
        <Grid container xs={12} sx={{marginTop:"2rem"}}>
            <Grid
                item
                xs={12}
                sx={{ display: "flex", alignItems: "center", width: "100%" }}
            >
                <TextField
                    fullWidth
                    required
                    variant="standard"
                    id="standard-basic"
                    label="Write your comment"
                />
                <Button variant="contained">
                    <SendIcon />
                </Button>
            </Grid>
            <Grid item xs={12} sx={{ width: "100%", marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                {CommentArray.slice(0, commentNo).map((item, index) => (
                    <Comment key={index} />
                ))}
                {commentNo < CommentArray.length ?
                    (<Button variant="text" sx={{ width: "8rem", alignSelf: "center" }} onClick={handleMoreCommentNo}>View More</Button>):
                    (<Button variant="text" sx={{ width: "8rem", alignSelf: "center" }} onClick={()=>setCommentNo(2)}>View Less</Button>)
                }
            </Grid>
        </Grid>
    );
}
