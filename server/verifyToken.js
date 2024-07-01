const jwt = require('jsonwebtoken');
const User = require('./models/User');

const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            return req.status(404).send({ error: "Token not found..." })
        }
        const decodedToken = jwt.verify(token, process.env.JWT_KEY);
        const userId = decodedToken._id;
        // const user = await userService.findUserById(userId); 
        const user = await User.findById(userId)
        if (!user) {
            throw new Error("User not found with id : ", userId);
        }

        req.user = user;

    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
    next();  // calling the next middleware
}

module.exports = verifyToken;