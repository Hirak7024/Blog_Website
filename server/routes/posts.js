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
    try {
        const { title, desc, category, imageUrl } = req.body;
        const trimmedTitle = title.trim();
        const existingTitle = await Post.findOne({ title: trimmedTitle });
        if (existingTitle) {
            res.status(400).json({ message: "Title already exists. Please write another one" });
        }
        else {
            const newPostData = {
                title: trimmedTitle,
                desc,
                category,
                imageUrl,
                username: user.name,
                userId: user._id
            }
            const newPost = new Post(newPostData);
            const savedPost = await newPost.save();
            res.status(200).json({ savedPost, message: "Post Created Successfully" });
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }

})

//UPDATE
router.put("/:id", verifyToken, async (req, res) => {
    const user = await req.user;
    try {
        const postId = req.params.id;
        const { userId } = await Post.findById(postId);
        if (userId.toString() !== user._id.toString()) {
            res.status(400).json({ message: "You cannot edit this post" });
        }
        else {
            const updatedPost = await Post.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
            res.status(200).json({ updatedPost, message: "Post Updated Successfully" })
        }

    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})


//DELETE
router.delete("/:id", verifyToken, async (req, res) => {
    const user = await req.user;
    try {
        const { userId } = await Post.findById(req.params.id);
        if (userId.toString() !== user._id.toString()) {
            res.status(400).json({ message: "You cannot delete this post" });
        }
        else {
            await Post.findByIdAndDelete(req.params.id)
            await Comment.deleteMany({ postId: req.params.id })
            res.status(200).json({ message: "Post has been deleted!" })
        }

    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})


//GET POST DETAILS BY ID
router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        res.status(200).json(post)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//GET POSTS
// router.get("/", async (req, res) => {
//     const query = req.query

//     try {
//         const searchFilter = {
//             title: { $regex: query.search, $options: "i" }
//         }
//         const posts = await Post.find(query.search ? searchFilter : null)
//         res.status(200).json(posts)
//     }
//     catch (err) {
//         res.status(500).json(err)
//     }
// })

// GET USER POSTS
router.post("/user", verifyToken, async (req, res) => {
    const user = await req.user;
    try {
        const userId = user._id;
        const posts = await Post.find({ userId })
        res.status(200).json(posts)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// GET POSTS BY CATEGORY
router.get("/getAll/posts" , async (req, res) => {
    try {
        const { category } = req.query;
        
        let posts;
        if (category !== "None") {
            posts = await Post.find({ category });
        } else {
            posts = await Post.find({});
        }

        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});



module.exports = router