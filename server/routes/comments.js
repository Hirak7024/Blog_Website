const express = require('express')
const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')
const Post = require('../models/Post')
const Comment = require('../models/Comment')
const verifyToken = require('../verifyToken')

//CREATE
router.post("/create", verifyToken, async (req, res) => {
    const user = await req.user;
    const { comment, postId } = req.body;
    try {
        const userId = user._id.toString();
        const author = user.name; 
        const newComment = new Comment({comment, author, postId, userId})
        const savedComment = await newComment.save()
        res.status(200).json({savedComment, message:"Comment Created"})
    }
    catch (error) {
        res.status(500).json({message:error.message});
    }

})

//UPDATE
router.put("/:id", verifyToken, async (req, res) => {
    const user = await req.user;
    try {
        const {userId} = await Comment.findById(req.params.id);
        if(userId.toString()!== user._id.toString()){
            res.status(400).json({message:"You cannot edit this comment"});
        }
        else{
            const updatedComment = await Comment.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
            res.status(200).json({updatedComment, message:"Comment Updated"});
        }

    }
    catch (error) {
        res.status(500).json({message:error.message});
    }
})


//DELETE
router.delete("/delete/:id", verifyToken, async (req, res) => {
    const user = await req.user;
    try {
        const {userId} = await Comment.findById(req.params.id);
        if(userId.toString()!== user._id.toString()){
            res.status(400).json({message:"You cannot delete this comment"});
        }
        else{
            await Comment.findByIdAndDelete(req.params.id)
            res.status(200).json({message:"Comment has been deleted!"})
        }

    }
    catch (error) {
        res.status(500).json({message:error.message});
    }
})


//GET POST COMMENTS
router.get("/post/:postId", async (req, res) => {
    try {
        const comments = await Comment.find({ postId: req.params.postId })
        res.status(200).json(comments)
    }
    catch (error) {
        res.status(500).json({message:error.message});
    }
})


module.exports = router