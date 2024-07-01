const express = require('express')
const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


//REGISTER
router.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body
        const existingEmail = await User.findOne({ email });
        if (existingEmail) {
            res.status(400).json({ message: "Email already exists" });
        }
        else{
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password, salt)
            const newUser = new User({ name, email, password: hashedPassword })
            const savedUser = await newUser.save()
            const token = jwt.sign({ _id: savedUser._id, name: savedUser.name, email: savedUser.email }, process.env.JWT_KEY, { expiresIn: 60 * 60 * 24 })
            const userResponse = {
                _id: savedUser._id,
                name: savedUser.name,
                email: savedUser.email
            }
            res.status(200).json({ userResponse, token, message: "User Registered Successfully" });
        }
    }
    catch (error) {
        res.status(500).json({message:error.message})
    }
})


//LOGIN
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (user) {
            const validity = await bcrypt.compare(password, user.password);

            if (!validity) {
                res.status(400).json({ message: "Incorrect Password" })
            }
            else {
                const token = jwt.sign({ _id: user._id, name: user.name, email: user.email }, process.env.JWT_KEY, { expiresIn: 60 * 60 * 24 })
                const userResponse = {
                    _id: user._id,
                    name: user.name,
                    email: user.email
                }

                res.status(200).json({ userResponse, token , message: "Login Successful" })
            }
        }
        else {
            res.status(404).json({ message: "User doesn't exist"})
        }

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})



//LOGOUT
// router.get("/logout", async (req, res) => {
//     try {
//         res.clearCookie("token", { sameSite: "none", secure: true }).status(200).send("User logged out successfully!")

//     }
//     catch (err) {
//         res.status(500).json(err)
//     }
// })

//REFETCH USER
// router.get("/refetch", (req, res) => {
//     const token = req.cookies.token
//     jwt.verify(token, process.env.SECRET, {}, async (err, data) => {
//         if (err) {
//             return res.status(404).json(err)
//         }
//         res.status(200).json(data)
//     })
// })



module.exports = router